import { motion } from "framer-motion";
import { Zap, Sparkles, Search, Bot, Shield, Headphones } from "lucide-react";

const items = [
  { icon: Zap, t: "Fast Delivery", d: "Tight timelines without cutting corners." },
  { icon: Sparkles, t: "Modern UI/UX", d: "Award-quality design, every time." },
  { icon: Search, t: "SEO Optimized", d: "Built to rank from day one." },
  { icon: Bot, t: "AI-Powered", d: "Automation woven into every workflow." },
  { icon: Shield, t: "Scalable & Secure", d: "Production-grade architecture." },
  { icon: Headphones, t: "24/7 Support", d: "Real human help, when you need it." },
];

export function WhyUs() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Why Choose Me</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Six reasons clients <span className="italic font-light text-muted-foreground">stay for years.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card p-8 hover:bg-secondary transition-colors"
            >
              <it.icon className="h-6 w-6 mb-6 text-muted-foreground" />
              <h3 className="text-xl font-semibold tracking-tight">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
