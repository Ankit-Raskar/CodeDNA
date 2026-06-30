import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiUser } from "react-icons/fi";
import type { AIInsights } from "@/lib/groq.functions";

type Msg = { role: "user" | "ai"; text: string; rich?: React.ReactNode };

function categoryAnswer(q: string, ins: AIInsights): Msg {
  const t = q.toLowerCase();
  if (/strength|good|best/.test(t))
    return { role: "ai", text: "Here's where you actually don't suck 👇", rich: <List items={ins.strengths} color="#22C55E" /> };
  if (/weak|improve|bad|worst|roast/.test(t))
    return { role: "ai", text: "Oh boy. Let's look at the damage:", rich: <List items={ins.weaknesses} color="#F59E0B" /> };
  if (/learn|study|next|grow/.test(t))
    return { role: "ai", text: "Please learn these before your next interview:", rich: <List items={ins.learn_next} color="#06B6D4" /> };
  if (/career|job|role|work/.test(t))
    return { role: "ai", text: "Roles that might tolerate your code:", rich: <List items={ins.career_paths} color="#8B5CF6" /> };
  if (/idea|project|build|side/.test(t))
    return { role: "ai", text: "Stop building to-do apps. Build this:", rich: <List items={ins.project_ideas} color="#EC4899" /> };
  if (/who|what|am i|archetype/.test(t))
    return {
      role: "ai",
      text: `You're a classic ${ins.archetype}. ${ins.tagline} Typical.`,
    };
  return {
    role: "ai",
    text: `Interesting question. My analysis of your repos says: ${ins.tagline} Honestly, you should just focus on ${ins.learn_next[0] || "cleaning up your commit history"}.`,
  };
}

function List({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((s, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, type: "spring" }}
          className="flex items-start gap-3 text-sm rounded-lg bg-white/5 p-2.5 border border-white/5 backdrop-blur-md"
        >
          <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ background: color }} />
          <span className="text-white/90 leading-tight">{s}</span>
        </motion.li>
      ))}
    </ul>
  );
}

const SUGGESTIONS = [
  "Roast my weaknesses",
  "What are my strengths?",
  "What should I learn next?",
  "Which career fits me?",
  "Give me a project idea",
];

export function AIMentorChat({ insights }: { insights: AIInsights }) {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: `I've analyzed every single one of your public repos... The good, the bad, and the 5-year-old spaghetti code.` },
    { role: "ai", text: `My verdict: ${insights.tagline} Go ahead, ask me anything 👇` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const ask = (q: string) => {
    const text = q.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, categoryAnswer(text, insights)]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const initialSuggestions = useMemo(() => SUGGESTIONS, []);

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f172a]/60 shadow-2xl backdrop-blur-xl">
      {/* Dynamic Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent mix-blend-overlay"></div>
      
      {/* Header */}
      <div className="relative flex items-center gap-4 border-b border-white/10 bg-white/5 p-5 backdrop-blur-md">
        <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-xl shadow-[0_0_20px_rgba(99,102,241,0.5)]">
          <span className="relative z-10">🧠</span>
          <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
        </div>
        <div>
          <p className="font-display text-lg font-black tracking-tight text-white">AI Mentor</p>
          <p className="text-xs font-medium text-white/50 tracking-wider uppercase">Trained on your code</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" /> Online
        </span>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="relative max-h-[500px] min-h-[300px] space-y-4 overflow-y-auto px-5 py-6 md:px-8 custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
              className={`flex items-end gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-white shadow-xl ${
                  m.role === "user" ? "bg-white/10 backdrop-blur-md" : "bg-gradient-to-br from-fuchsia-500 to-indigo-600"
                }`}
              >
                {m.role === "user" ? <FiUser className="h-5 w-5 opacity-70" /> : "🧠"}
              </div>
              <div
                className={`max-w-[85%] rounded-[24px] px-5 py-4 text-[15px] shadow-lg backdrop-blur-md ${
                  m.role === "user"
                    ? "rounded-br-sm bg-indigo-500/20 border border-indigo-500/30 text-white"
                    : "rounded-bl-sm border border-white/10 bg-white/5 text-white/90"
                }`}
              >
                <p className="leading-relaxed">{m.text}</p>
                {m.rich}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-end gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-600 border border-white/10 text-white shadow-xl">🧠</div>
              <div className="flex gap-1.5 rounded-[24px] rounded-bl-sm border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-2 w-2 rounded-full bg-fuchsia-400"
                    animate={{ y: [0, -6, 0], scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Suggestions */}
      <div className="relative flex flex-wrap gap-2 border-t border-white/10 bg-black/20 px-5 py-4 backdrop-blur-md">
        {initialSuggestions.map((s) => (
          <button
            key={s}
            onClick={() => ask(s)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white/70 transition-all hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="relative flex items-center gap-3 bg-black/40 p-4 backdrop-blur-xl"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your mentor anything…"
          className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-[15px] text-white placeholder-white/30 outline-none transition-colors focus:border-indigo-500 focus:bg-white/10"
        />
        <button
          type="submit"
          className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all disabled:opacity-50 hover:bg-indigo-400 hover:scale-105"
          disabled={!input.trim()}
        >
          <FiSend className="h-5 w-5 -ml-0.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </div>
  );
}
