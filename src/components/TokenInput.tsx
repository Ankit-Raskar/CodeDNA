import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiKey, FiCheck, FiChevronDown, FiEye, FiEyeOff, FiClipboard, FiTrash2,
  FiRefreshCw, FiShield, FiAlertCircle, FiHelpCircle, FiCheckCircle,
} from "react-icons/fi";
import { TokenHelpModal } from "./TokenHelpModal";

export const TOKEN_KEY = "github_token";
const LEGACY_KEY = "codedna:gh_token";
const VALID = /^(gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,})$/;

export function getStoredToken(): string | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const t = window.localStorage.getItem(TOKEN_KEY) || window.localStorage.getItem(LEGACY_KEY);
    return t && t.trim() ? t.trim() : undefined;
  } catch {
    return undefined;
  }
}

function mask(t: string) {
  return `${t.slice(0, 7)}…${t.slice(-4)}`;
}

type State = "idle" | "checking" | "ok" | "invalid" | "error";

export function TokenInput({
  autoFocus = false,
  defaultOpen = false,
}: { autoFocus?: boolean; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(autoFocus || defaultOpen);
  const [saved, setSaved] = useState<string | undefined>(undefined);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const t = getStoredToken();
    setSaved(t);
    // Migrate legacy → new key
    try {
      if (t && !window.localStorage.getItem(TOKEN_KEY)) {
        window.localStorage.setItem(TOKEN_KEY, t);
        window.localStorage.removeItem(LEGACY_KEY);
      }
    } catch {}
  }, []);

  const validateAndSave = async () => {
    const t = value.trim();
    setMsg(null);
    if (!t) {
      setState("invalid");
      setMsg("Please paste a token first.");
      return;
    }
    if (t.length > 255 || !VALID.test(t)) {
      setState("invalid");
      setMsg("That doesn't look like a GitHub token (should start with ghp_ or github_pat_).");
      return;
    }
    setState("checking");
    try {
      const res = await fetch("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${t}`, Accept: "application/vnd.github+json" },
      });
      if (res.status === 401) {
        setState("invalid");
        setMsg("Invalid GitHub Token — please check your token and try again.");
        return;
      }
      if (!res.ok) {
        setState("error");
        setMsg(`GitHub responded with ${res.status}. Try again in a moment.`);
        return;
      }
      window.localStorage.setItem(TOKEN_KEY, t);
      window.localStorage.removeItem(LEGACY_KEY);
      setSaved(t);
      setValue("");
      setEditing(false);
      setState("ok");
      setMsg(null);
      window.setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("error");
      setMsg("Couldn't reach GitHub. Check your connection and try again.");
    }
  };

  const remove = () => {
    try {
      window.localStorage.removeItem(TOKEN_KEY);
      window.localStorage.removeItem(LEGACY_KEY);
    } catch {}
    setSaved(undefined);
    setEditing(false);
    setState("idle");
    setMsg(null);
  };

  const paste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setValue(text.trim());
        setState("idle");
        setMsg(null);
      }
    } catch {
      setMsg("Clipboard access denied. Paste manually with Ctrl/Cmd+V.");
    }
  };

  const showForm = !saved || editing;

  return (
    <div className="mt-4 w-full max-w-2xl mx-auto">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mx-auto flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-white hover:text-foreground"
      >
        <FiKey className="h-3.5 w-3.5" />
        {saved ? (
          <span className="inline-flex items-center gap-1.5 text-emerald-700">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Personal GitHub Token Connected
          </span>
        ) : (
          <span>Advanced Options</span>
        )}
        <FiChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="card-soft mt-3 rounded-2xl p-4 text-left sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-base font-bold">GitHub Personal Access Token <span className="text-muted-foreground font-normal">(Optional)</span></h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    🔒 Your token is stored only in your browser and is never sent to our servers.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setHelpOpen(true)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent"
                >
                  <FiHelpCircle className="h-3.5 w-3.5" /> Help
                </button>
              </div>

              {/* Connected state */}
              {saved && !editing && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                >
                  <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    <FiCheckCircle /> Personal GitHub Token Connected
                  </p>
                  <p className="mt-1 text-xs text-emerald-800/80">
                    Active token: <code className="rounded bg-white/60 px-1.5 py-0.5">{mask(saved)}</code> · API limit ≈ 5,000 requests/hr.
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <button
                      onClick={remove}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-white px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50"
                    >
                      <FiTrash2 /> Remove Token
                    </button>
                    <button
                      onClick={() => { setEditing(true); setValue(""); setState("idle"); setMsg(null); }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      <FiRefreshCw /> Replace Token
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              {showForm && (
                <div className="mt-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <div className="relative flex-1">
                      <input
                        type={show ? "text" : "password"}
                        value={value}
                        onChange={(e) => { setValue(e.target.value); setState("idle"); setMsg(null); }}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); validateAndSave(); } }}
                        placeholder="ghp_xxxxxxxxxxxxxxxxxxxxx"
                        autoComplete="off"
                        spellCheck={false}
                        className="w-full rounded-full border border-border bg-white px-4 py-2.5 pr-20 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <div className="absolute right-1.5 top-1/2 flex -translate-y-1/2 items-center gap-1">
                        <button
                          type="button"
                          onClick={paste}
                          title="Paste from clipboard"
                          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          <FiClipboard className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setShow((s) => !s)}
                          title={show ? "Hide token" : "Show token"}
                          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {show ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={validateAndSave}
                      disabled={state === "checking"}
                      className="inline-flex items-center justify-center gap-2 rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg disabled:opacity-60"
                    >
                      {state === "checking" ? (<><FiRefreshCw className="h-4 w-4 animate-spin" /> Checking…</>) : (<><FiCheck className="h-4 w-4" /> Connect</>)}
                    </button>
                    {editing && (
                      <button
                        type="button"
                        onClick={() => { setEditing(false); setValue(""); setState("idle"); setMsg(null); }}
                        className="rounded-full border border-border bg-white px-4 py-2.5 text-sm font-medium"
                      >
                        Cancel
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {state === "invalid" && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="mt-2 flex items-center gap-1.5 text-xs font-medium text-rose-600"
                      >
                        <FiAlertCircle /> {msg || "Invalid GitHub Token — please check your token and try again."}
                      </motion.p>
                    )}
                    {state === "error" && msg && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-700"
                      >
                        <FiAlertCircle /> {msg}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setHelpOpen(true)}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    How to create a GitHub token →
                  </button>
                </div>
              )}

              {/* Success animation */}
              <AnimatePresence>
                {state === "ok" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white shadow-lg"
                  >
                    <p className="flex items-center gap-2 font-display text-base font-bold">
                      <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 0.7 }}>🎉</motion.span>
                      GitHub Token Connected Successfully!
                    </p>
                    <p className="mt-1 text-xs text-white/90">
                      Your API limit has increased to approximately 5,000 requests per hour.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Security */}
              <div className="mt-4 rounded-2xl bg-secondary/60 p-3 text-[11px] leading-relaxed text-muted-foreground">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <FiShield className="h-3.5 w-3.5" /> Security Information
                </p>
                <ul className="mt-1.5 space-y-0.5">
                  <li>• Your token never leaves your browser.</li>
                  <li>• We never store your token on our servers.</li>
                  <li>• You can remove your token at any time.</li>
                  <li>• The token is stored only in your local browser storage.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <TokenHelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
