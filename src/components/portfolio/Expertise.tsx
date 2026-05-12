import { motion } from "framer-motion";
import {
  Cpu, Brush, Sparkles, MousePointer2, ScrollText,
  Smartphone, Apple, Bot, Globe2,
} from "lucide-react";

const expertise = [
  { icon: Cpu, title: "Tech Innovation", desc: "Pushing boundaries with cutting-edge stacks, AI agents & automation that ship real results.", tag: "R&D" },
  { icon: Brush, title: "UI / UX Design", desc: "Pixel-perfect, research-backed interfaces engineered for clarity, delight and conversion.", tag: "Design" },
  { icon: Sparkles, title: "Motion & Animation", desc: "Cinematic Framer Motion & GSAP storytelling — interfaces that breathe and respond.", tag: "Motion" },
  { icon: MousePointer2, title: "Hover Interactions", desc: "Micro-interactions, magnetic buttons & parallax that make every cursor move feel premium.", tag: "Micro-UX" },
  { icon: ScrollText, title: "Scroll Experiences", desc: "Scroll-triggered scenes, sticky reveals & smooth scroll choreography that wow visitors.", tag: "Scroll" },
  { icon: Globe2, title: "Web Development", desc: "Lightning-fast Next.js, React & TanStack builds. SEO-tuned, scalable, production-grade.", tag: "Web" },
  { icon: Smartphone, title: "Android Apps", desc: "Native-feel Android experiences — Kotlin & React Native — Play Store ready.", tag: "Android" },
  { icon: Apple, title: "iOS Apps", desc: "Polished iOS apps with Apple-grade fit & finish, App Store submission included.", tag: "iOS" },
  { icon: Bot, title: "AI Automation", desc: "Custom GPT agents, RAG pipelines & workflow bots that save hours every single day.", tag: "AI" },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-foreground/[0.04] blur-[140px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-5">
            <Sparkles className="h-3.5 w-3.5" /> Core Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Where craft meets <span className="italic font-light text-muted-foreground">cutting-edge tech.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl">
            A premium toolkit blending tech innovation, motion design and platform mastery — from sleek scroll experiences to native mobile apps.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-gradient-card border border-border p-7 overflow-hidden hover:border-foreground/30 transition-all duration-500 shadow-elegant"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-foreground/5 blur-3xl group-hover:bg-foreground/15 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl glass-strong grid place-items-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <e.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-2.5 py-1">
                  {e.tag}
                </span>
              </div>

              <h3 className="relative mt-8 text-xl font-semibold tracking-tight">{e.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
