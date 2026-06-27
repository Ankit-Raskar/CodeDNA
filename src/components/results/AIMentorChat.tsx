import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiUser } from "react-icons/fi";
import type { AIInsights } from "@/lib/groq.functions";

type Msg = { role: "user" | "ai"; text: string; rich?: React.ReactNode };

function categoryAnswer(q: string, ins: AIInsights): Msg {
  const t = q.toLowerCase();
  if (/strength|good|best/.test(t))
    return { role: "ai", text: "Here's where you really shine 👇", rich: <List items={ins.strengths} color="#22C55E" /> };
  if (/weak|improve|bad|worst/.test(t))
    return { role: "ai", text: "Honest, said with love:", rich: <List items={ins.weaknesses} color="#F59E0B" /> };
  if (/learn|study|next|grow/.test(t))
    return { role: "ai", text: "If I were you, I'd explore:", rich: <List items={ins.learn_next} color="#06B6D4" /> };
  if (/career|job|role|work/.test(t))
    return { role: "ai", text: "Roles that fit your DNA:", rich: <List items={ins.career_paths} color="#8B5CF6" /> };
  if (/idea|project|build|side/.test(t))
    return { role: "ai", text: "Build one of these next weekend:", rich: <List items={ins.project_ideas} color="#EC4899" /> };
  if (/who|what|am i|archetype/.test(t))
    return {
      role: "ai",
      text: `You're a ${ins.archetype}. ${ins.tagline}`,
    };
  return {
    role: "ai",
    text: `Good question. Based on what I see in your repos: ${ins.tagline} You'd benefit most from leaning into ${ins.learn_next[0] || "deeper system design"}.`,
  };
}

function List({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((s, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex gap-2 text-sm"
        >
          <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
          <span>{s}</span>
        </motion.li>
      ))}
    </ul>
  );
}

const SUGGESTIONS = [
  "What are my strengths?",
  "Where should I improve?",
  "What should I learn next?",
  "Which career fits me?",
  "Give me a project idea",
];

export function AIMentorChat({ insights }: { insights: AIInsights }) {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: `Hey! I'm your AI mentor. I read every repo. You're a ${insights.archetype}.` },
    { role: "ai", text: `My verdict: ${insights.tagline} Ask me anything below 👇` },
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
    }, 650 + Math.random() * 400);
  };

  const initialSuggestions = useMemo(() => SUGGESTIONS, []);

  return (
    <div className="card-soft overflow-hidden rounded-[28px]">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50 p-4">
        <div className="grid h-10 w-10 place-items-center rounded-2xl grad-primary text-white shadow">🤖</div>
        <div>
          <p className="font-display text-sm font-bold">AI Mentor</p>
          <p className="text-[11px] text-muted-foreground">Trained on your repos · always honest</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-500" /> online
        </span>
      </div>

      {/* Chat */}
      <div ref={scrollRef} className="max-h-[480px] space-y-3 overflow-y-auto bg-white px-4 py-5 md:px-6 md:py-6">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              className={`flex items-end gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-white shadow ${
                  m.role === "user" ? "bg-slate-900" : "grad-primary"
                }`}
              >
                {m.role === "user" ? <FiUser className="h-4 w-4" /> : "🤖"}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  m.role === "user"
                    ? "rounded-br-md bg-slate-900 text-white"
                    : "rounded-bl-md border border-border bg-white"
                }`}
              >
                <p>{m.text}</p>
                {m.rich}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-end gap-2"
            >
              <div className="grid h-8 w-8 place-items-center rounded-xl grad-primary text-white shadow">🤖</div>
              <div className="flex gap-1 rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.8, delay: i * 0.12, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 border-t border-border bg-muted/40 px-4 py-3">
        {initialSuggestions.map((s) => (
          <button
            key={s}
            onClick={() => ask(s)}
            className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium hover:border-primary/40 hover:text-primary"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex items-center gap-2 border-t border-border bg-white p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your mentor anything…"
          className="flex-1 rounded-2xl border border-border bg-muted/40 px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="grid h-10 w-10 place-items-center rounded-2xl grad-primary text-white shadow hover:shadow-lg disabled:opacity-50"
          disabled={!input.trim()}
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
}
