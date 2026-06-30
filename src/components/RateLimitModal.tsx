import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiRefreshCw, FiKey, FiPlay } from "react-icons/fi";
import { createPortal } from "react-dom";

export function RateLimitModal({
  open,
  hasToken,
  onClose,
  onAddToken,
  onTryDemo,
  onTryAgain,
}: {
  open: boolean;
  hasToken: boolean;
  onClose: () => void;
  onAddToken: () => void;
  onTryDemo: () => void;
  onTryAgain: () => void;
}) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative w-full max-w-md rounded-t-3xl bg-white p-7 shadow-2xl sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <FiX />
            </button>

            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl grad-primary text-3xl text-foreground shadow-lg">
              ⏳
            </div>
            <h2 className="text-center font-display text-2xl font-bold">GitHub API Limit Reached</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              GitHub's public API limit has been reached.
            </p>

            <div className="mt-5 rounded-2xl bg-secondary/60 p-4 text-sm text-foreground/80">
              <p className="font-semibold">You can:</p>
              <ul className="mt-1.5 space-y-1 text-sm">
                <li>• Wait a few minutes for the limit to reset</li>
                <li>• Add your own GitHub Personal Access Token for instant access</li>
              </ul>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {!hasToken && (
                <button
                  onClick={onAddToken}
                  className="inline-flex items-center justify-center gap-2 rounded-full grad-primary px-5 py-3 text-sm font-semibold text-foreground shadow-lg"
                >
                  <FiKey /> Add Personal Token
                </button>
              )}
              <button
                onClick={onTryDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold"
              >
                <FiPlay /> Try Demo Profile
              </button>
              <button
                onClick={onTryAgain}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                <FiRefreshCw /> Try Again
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
