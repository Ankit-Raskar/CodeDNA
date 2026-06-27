import { motion } from "framer-motion";
import type { GithubData } from "@/lib/github.functions";
import { predictCareer } from "@/lib/archetype";

export function CareerPath({ data }: { data: GithubData }) {
  const roles = predictCareer(data);

  return (
    <div className="card-soft relative overflow-hidden rounded-[28px] p-6 md:p-10">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative">
        <h3 className="font-display text-2xl font-bold md:text-3xl">Your future path</h3>
        <p className="mt-1 text-muted-foreground">
          Where your code is taking you — predicted from your stack and trajectory.
        </p>

        <div className="relative mt-10">
          {/* Vertical timeline */}
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2" />

          <ol className="space-y-8">
            {roles.map((r, i) => (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative grid items-center gap-4 md:grid-cols-2 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* Node */}
                <span className="absolute left-5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-white ring-4 ring-primary md:left-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>

                <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left md:[direction:ltr]"}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {r.year} · {r.chance}% match
                  </p>
                  <p className="mt-1 font-display text-xl font-bold md:text-2xl">
                    {r.emoji} {r.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.why}</p>
                </div>

                <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? "md:pl-12 md:[direction:ltr]" : "md:pr-12 md:text-right"}`}>
                  <div className="rounded-2xl border border-border bg-white p-4">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Probability</span>
                      <span>{r.chance}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${r.chance}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.15 + i * 0.08 }}
                        className="h-full grad-primary"
                      />
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
