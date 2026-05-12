import { motion } from "framer-motion";
import { Globe, Code2, Smartphone, Bot, Palette, PenTool, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design", desc: "Conversion-focused, brand-led websites that turn visitors into customers." },
  { icon: Code2, title: "Web Development", desc: "Production-grade React, Next.js & headless builds. Fast, scalable, secure." },
  { icon: Smartphone, title: "App Development", desc: "Native-feel iOS, Android & cross-platform apps with delightful UX." },
  { icon: Bot, title: "AI Automation", desc: "Custom AI agents, workflows & chatbots that save hours every week." },
  { icon: Palette, title: "UI / UX Design", desc: "Research-backed interfaces that feel inevitable to use." },
  { icon: PenTool, title: "Graphic Design", desc: "Brand systems, logos, and visual identity that stand the test of time." },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Services</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Everything you need to <span className="italic font-light text-muted-foreground">launch & grow.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl bg-gradient-card border border-border p-7 overflow-hidden hover:border-foreground/20 transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-foreground/5 blur-3xl group-hover:bg-foreground/10 transition-colors duration-700" />
              <div className="relative flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl glass grid place-items-center group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" />
              </div>
              <h3 className="relative mt-8 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
