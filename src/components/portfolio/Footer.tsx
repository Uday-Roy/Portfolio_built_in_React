import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-foreground text-background grid place-items-center font-bold text-sm">U</div>
            <span className="font-semibold tracking-tight">Uday Roy</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            {[
              { i: Mail, h: "mailto:udayroytech@gmail.com" },
              { i: Github, h: "https://github.com/Uday-Roy" },
              { i: Linkedin, h: "https://www.linkedin.com/in/udaykrroy" },
              { i: Instagram, h: "https://www.instagram.com/uday.kr.roy" },
            ].map((s, i) => (
              <a key={i} href={s.h} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full glass grid place-items-center hover:bg-secondary transition-colors">
                <s.i className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Uday Roy. All rights reserved.</div>
          <div>Crafted with care · Built for performance</div>
        </div>
      </div>
    </footer>
  );
}
