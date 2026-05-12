import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discovery", d: "We align on goals, audience, and success metrics. Research informs every decision." },
  { n: "02", t: "Design", d: "Wireframes evolve into pixel-perfect, on-brand interfaces with motion direction." },
  { n: "03", t: "Development", d: "Production-grade code, modular architecture, and rigorous performance budgets." },
  { n: "04", t: "Testing", d: "Cross-device QA, accessibility audits, and load tests before anything ships." },
  { n: "05", t: "Launch", d: "Smooth deployment with monitoring, analytics, and a 30-day support window." },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Process</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            From idea to launch in <span className="italic font-light text-muted-foreground">five steps.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="text-xs text-muted-foreground tracking-[0.2em]">STEP {s.n}</div>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 h-16 w-16 rounded-full glass-strong grid place-items-center font-semibold">
                  {s.n}
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
