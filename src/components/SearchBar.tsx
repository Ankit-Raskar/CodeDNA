import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiSearch, FiZap } from "react-icons/fi";

export function SearchBar({ initial = "", compact = false }: { initial?: string; compact?: boolean }) {
  const [v, setV] = useState(initial);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const u = v.trim().replace(/^@/, "");
    if (!u) return;
    navigate({ to: "/results/$username", params: { username: u } });
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`card-soft relative mx-auto flex w-full items-center gap-2 rounded-full p-2 pl-5 ${compact ? "max-w-md" : "max-w-2xl mt-10 ring-soft"}`}
    >
      <FiSearch className="h-5 w-5 text-muted-foreground" />
      <input
        value={v}
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
        className="glow-primary grad-primary flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
      >
        <FiZap className="h-4 w-4" /> {compact ? "Decode" : "Decode My DNA"}
      </motion.button>
    </motion.form>
  );
}
