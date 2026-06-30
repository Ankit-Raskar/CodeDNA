import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiZap, FiClock, FiTrendingUp, FiX, FiUser } from "react-icons/fi";

const TRENDING = ["gaearon", "torvalds", "sindresorhus", "vercel"];

export function SearchBar({ initial = "", compact = false }: { initial?: string; compact?: boolean }) {
  const [v, setV] = useState(initial);
  const [focused, setFocused] = useState(false);
  const [recent, setRecent] = useState<string[]>([]);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("codedna_recent");
      if (stored) setRecent(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const saveRecent = (username: string) => {
    let list = [username, ...recent.filter(u => u !== username)].slice(0, 5);
    setRecent(list);
    try { localStorage.setItem("codedna_recent", JSON.stringify(list)); } catch {}
  };

  const removeRecent = (e: React.MouseEvent, username: string) => {
    e.stopPropagation();
    let list = recent.filter(u => u !== username);
    setRecent(list);
    try { localStorage.setItem("codedna_recent", JSON.stringify(list)); } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const u = v.trim().replace(/^@/, "");
    if (!u) return;
    saveRecent(u);
    setFocused(false);
    navigate({ to: "/results/$username", params: { username: u } });
  };

  const selectUser = (u: string) => {
    saveRecent(u);
    setFocused(false);
    navigate({ to: "/results/$username", params: { username: u } });
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={submit}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`relative mx-auto flex w-full flex-col ${compact ? "max-w-md" : "max-w-2xl mt-10"}`}
    >
      <div className={`card-soft relative z-20 flex w-full items-center gap-2 rounded-full p-2 pl-5 ring-soft transition-all ${focused ? "ring-2 ring-primary/50 shadow-[0_0_30px_rgba(99,102,241,0.2)] bg-card" : ""}`}>
        <FiSearch className="h-5 w-5 text-muted-foreground" />
        <input
          value={v}
          onFocus={() => setFocused(true)}
          onChange={(e) => setV(e.target.value)}
          placeholder="Enter GitHub username — e.g. torvalds"
          className="flex-1 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground"
          autoComplete="off"
          spellCheck={false}
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          aria-label="Search GitHub User"
          className="glow-primary grad-primary flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-foreground"
        >
          <FiZap className="h-4 w-4" /> {compact ? "Decode" : "Decode My DNA"}
        </motion.button>
      </div>

      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.15 } }}
            className="absolute top-full z-10 w-full overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-2xl backdrop-blur-xl text-left"
          >
            {v ? (
              <div
                onClick={() => submit({ preventDefault: () => {} } as React.FormEvent)}
                className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-white/5"
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/20 text-primary">
                  <FiUser className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Analyze @{v}</div>
                  <div className="text-xs text-muted-foreground">Press Enter to decode DNA</div>
                </div>
              </div>
            ) : (
              <>
                {recent.length > 0 && (
                  <div className="mb-5">
                    <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <FiClock /> Recent Searches
                    </h4>
                    <div className="flex flex-col gap-1">
                      {recent.map((u) => (
                        <div
                          key={u}
                          onClick={() => selectUser(u)}
                          className="group flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
                        >
                          <span className="text-sm font-medium text-foreground">@{u}</span>
                          <button onClick={(e) => removeRecent(e, u)} className="text-muted-foreground opacity-0 transition-opacity hover:text-red-400 group-hover:opacity-100 p-1">
                            <FiX className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <FiTrendingUp /> Trending Developers
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TRENDING.map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => selectUser(u)}
                        className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground hover:border-primary/30"
                      >
                        @{u}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
