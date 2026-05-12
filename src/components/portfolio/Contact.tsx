import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = `New project inquiry from ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:udayroytech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-foreground/5 blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95]">
              Let's build<br />
              <span className="italic font-light text-muted-foreground">something great.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Have a project in mind? Drop a message and I'll get back within 24 hours.
            </p>

            <div className="mt-10 space-y-3">
              {[
                { icon: Mail, label: "udayroytech@gmail.com", href: "mailto:udayroytech@gmail.com" },
                { icon: Github, label: "github.com/Uday-Roy", href: "https://github.com/Uday-Roy" },
                { icon: Linkedin, label: "linkedin.com/in/udaykrroy", href: "https://www.linkedin.com/in/udaykrroy" },
                { icon: Instagram, label: "@uday.kr.roy", href: "https://www.instagram.com/uday.kr.roy" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl glass px-5 py-4 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <c.icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">{c.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-3xl p-8 shadow-elegant space-y-5"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                name="name"
                required
                placeholder="Your full name"
                className="mt-2 w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="mt-2 w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Project Details</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, timeline, and budget..."
                className="mt-2 w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-4 text-sm font-medium hover:scale-[1.01] transition-transform"
            >
              {sent ? "Message ready in your mail app" : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
