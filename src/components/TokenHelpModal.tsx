import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiShield, FiCheckCircle } from "react-icons/fi";
import { createPortal } from "react-dom";

const STEPS = [
  { t: "Open GitHub Settings", d: "Click your avatar in the top-right of GitHub and open Settings." },
  { t: "Go to Developer Settings", d: "Scroll to the bottom of the left sidebar and click Developer settings." },
  { t: "Open Personal Access Tokens", d: "Choose Tokens (classic). Fine-grained tokens also work." },
  { t: "Generate New Token", d: "Click Generate new token. Add a note like “CodeDNA”. Expiration: 30 days is fine." },
  { t: "No special permissions are required", d: "Leave every scope unchecked — public profile data is all we read." },
  { t: "Copy & paste into CodeDNA", d: "Copy the token (you won't see it again) and paste it into the field on CodeDNA." },
];

export function TokenHelpModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-card p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <FiX />
            </button>

            <div className="mb-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl grad-primary text-xl text-foreground shadow-lg">
              🔑
            </div>
            <h2 className="font-display text-2xl font-bold">How to create a GitHub Personal Access Token</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Takes about 30 seconds. Lifts your GitHub API limit from <strong>60/hr</strong> to <strong>5,000/hr</strong>.
            </p>

            <ol className="mt-5 space-y-3">
              {STEPS.map((s, i) => (
                <li key={i} className="flex gap-3 rounded-2xl bg-secondary/60 p-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full grad-primary text-xs font-bold text-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.t}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/settings/tokens/new?description=CodeDNA&scopes="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-foreground shadow-lg"
              >
                Create token on GitHub <FiExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold"
              >
                I'm ready, close this
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                <FiShield /> Security Information
              </p>
              <ul className="mt-2 space-y-1 text-xs text-emerald-800/90">
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-0.5 shrink-0" /> Your token never leaves your browser without your action.</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-0.5 shrink-0" /> We never store your token on our servers.</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-0.5 shrink-0" /> You can remove your token at any time.</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-0.5 shrink-0" /> The token lives only in your browser's local storage.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
