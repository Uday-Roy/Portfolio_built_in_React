import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Expertise } from "@/components/portfolio/Expertise";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Process } from "@/components/portfolio/Process";
import { WhyUs } from "@/components/portfolio/WhyUs";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { WhatsAppFloat } from "@/components/portfolio/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uday Roy — Premium Web, App & AI Development" },
      { name: "description", content: "Freelance designer & developer crafting premium websites, apps, and AI automation systems for ambitious brands worldwide." },
      { property: "og:title", content: "Uday Roy — Premium Web, App & AI Development" },
      { property: "og:description", content: "Freelance designer & developer crafting premium websites, apps, and AI automation systems." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Work />
        <Skills />
        <Testimonials />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
