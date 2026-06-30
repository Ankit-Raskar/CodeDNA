import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const OPTIONS = [
  { id: "frontend", label: "Frontend & UI", emoji: "✨" },
  { id: "backend", label: "Backend & Systems", emoji: "⚙️" },
  { id: "ai", label: "AI & Data", emoji: "🧠" },
  { id: "mobile", label: "Mobile Apps", emoji: "📱" },
  { id: "gamedev", label: "Game Dev", emoji: "🎮" },
  { id: "devops", label: "DevOps & Cloud", emoji: "☁️" },
];

export function QuizModal({
  username,
  onComplete,
}: {
  username: string;
  onComplete: (interest: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const key = `codedna_quiz_${username}`;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(key)) {
      onComplete("skipped");
      return;
    }
    sessionStorage.setItem(key, "1");
    setOpen(true);
  }, [username, onComplete]);

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(() => {
      setOpen(false);
      onComplete(id);
    }, 600);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="quiz-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-6"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            className="w-full max-w-lg bg-white overflow-hidden rounded-[32px] shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 pointer-events-none" />
            
            <div className="relative p-8 text-center">
              <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 mb-2">
                What interests you most?
              </h2>
              <p className="text-slate-500 mb-8 text-sm">
                We'll combine this with your GitHub stats to find your true Developer Class.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className={`relative overflow-hidden group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 ${
                      selected === opt.id
                        ? "border-indigo-500 bg-indigo-50 scale-95"
                        : "border-slate-100 bg-white hover:border-indigo-200 hover:shadow-md"
                    }`}
                  >
                    <span className="text-3xl transition-transform group-hover:scale-110 duration-300">
                      {opt.emoji}
                    </span>
                    <span className="font-bold text-sm text-slate-700">{opt.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setOpen(false);
                    onComplete("skipped");
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Skip for now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
