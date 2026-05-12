import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion",
  "Figma", "MongoDB", "PostgreSQL", "Firebase", "OpenAI", "LangChain",
  "React Native", "GSAP", "Three.js", "Supabase", "Vercel", "AWS",
];

export function Skills() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Stack</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Tools I use to <span className="italic font-light text-muted-foreground">ship fast.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="px-5 py-3 rounded-full glass text-sm font-medium hover:border-foreground/30 transition-colors"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
