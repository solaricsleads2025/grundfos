import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/4915223662354"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button 
        variant="cta" 
        size="lg" 
        className="rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 group-hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Fragen? Per WhatsApp schreiben</span>
        <span className="sm:hidden">WhatsApp</span>
      </Button>
    </a>
  );
};

export default FloatingWhatsApp;
