import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Nova Analytics", cat: "SaaS", stack: ["Next.js", "TypeScript", "PostgreSQL"], year: "2025" },
  { img: p2, title: "Pulse Fitness", cat: "Mobile", stack: ["React Native", "Firebase"], year: "2025" },
  { img: p3, title: "Synapse AI", cat: "AI", stack: ["OpenAI", "LangChain", "Node.js"], year: "2025" },
  { img: p4, title: "Atelier Noir", cat: "Web", stack: ["Shopify", "GSAP"], year: "2024" },
  { img: p5, title: "Forma Studio", cat: "Branding", stack: ["Figma", "Illustrator"], year: "2024" },
  { img: p6, title: "Quantum Trade", cat: "SaaS", stack: ["React", "WebSocket", "D3"], year: "2025" },
];

const filters = ["All", "SaaS", "Mobile", "AI", "Web", "Branding"];

export function Work() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Selected Work</div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
              Recent projects <span className="italic font-light text-muted-foreground">in the wild.</span>
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  filter === f ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.a
                layout
                key={p.title}
                href="#"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative block rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-elegant"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{p.cat}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full glass grid place-items-center group-hover:bg-foreground group-hover:text-background transition-all">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
