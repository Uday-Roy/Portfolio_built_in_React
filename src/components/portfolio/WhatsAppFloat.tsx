import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/919142620172?text=${encodeURIComponent(
  "Hi Uday! 👋 I just visited your portfolio and I'd love to collaborate with you to build something innovative together!"
)}`;

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
      <span className="relative flex items-center gap-2 rounded-full bg-emerald-500 text-white pl-4 pr-5 py-3 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium hidden sm:inline">Let's chat</span>
      </span>
    </motion.a>
  );
}
