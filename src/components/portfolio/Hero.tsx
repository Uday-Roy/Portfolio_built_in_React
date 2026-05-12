import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = ["Web Design", "Web Development", "App Development", "AI Automation", "UI/UX Design", "Graphic Design"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1280} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for new projects · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] max-w-5xl"
        >
          <span className="text-gradient">Crafting digital</span>
          <br />
          <span className="text-gradient">experiences that</span>
          <br />
          <span className="italic font-light text-muted-foreground">convert & scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          I'm Uday — a freelance designer & developer building premium websites, apps, and AI automation systems for ambitious brands worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:scale-[1.03] transition-transform"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-secondary transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 overflow-hidden border-y border-border/50 py-6"
        >
          <div className="flex marquee gap-12 whitespace-nowrap text-2xl md:text-3xl text-muted-foreground/60 font-light tracking-tight">
            {[...services, ...services, ...services].map((s, i) => (
              <span key={i} className="flex items-center gap-12">
                {s}
                <span className="text-foreground/30">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
