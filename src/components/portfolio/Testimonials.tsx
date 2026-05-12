import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { name: "Sarah Chen", role: "CEO, Nova Labs", quote: "Uday delivered a product that felt like magic. Our conversion doubled within 3 weeks of launch.", initials: "SC" },
  { name: "Marcus Reid", role: "Founder, Pulse", quote: "The most thoughtful designer-developer I've worked with. He gets product, not just pixels.", initials: "MR" },
  { name: "Aiko Tanaka", role: "Product, Synapse", quote: "Fast, communicative, and genuinely cares. The AI workflow he built saves us 20+ hours per week.", initials: "AT" },
  { name: "David Okafor", role: "CTO, Quantum", quote: "World-class craft. Every detail considered. Already booked him for the next two projects.", initials: "DO" },
];

export function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Loved by founders <span className="italic font-light text-muted-foreground">worldwide.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-gradient-card border border-border p-8 shadow-elegant"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-secondary grid place-items-center text-sm font-medium">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
