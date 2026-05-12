import { motion } from "framer-motion";
import profile from "@/assets/profile.jpg";

const stats = [
  { v: "5+", l: "Years experience" },
  { v: "80+", l: "Projects shipped" },
  { v: "40+", l: "Happy clients" },
  { v: "12", l: "Countries served" },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-elegant">
              <img src={profile} alt="Uday Roy" loading="lazy" width={768} height={960} className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="glass rounded-2xl p-4 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm">Available for freelance work</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 hidden md:block">
              <div className="text-4xl font-semibold">5★</div>
              <div className="text-xs text-muted-foreground mt-1">Avg client rating</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">About</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              A designer-engineer obsessed with the details that make products feel alive.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I help startups and established brands transform ideas into world-class digital products. From marketing sites to complex SaaS dashboards, AI agents, and mobile apps — I deliver with craft, speed, and conversion in mind.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My mission: blend cinematic design with rock-solid engineering so every pixel earns its place.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.l} className="bg-card p-6">
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
