import { Phone, MessageCircle, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import grundfosLogo from "@/assets/grundfos-logo.png";
import technicianTorben from "@/assets/technician-torben.jpg";
import technicianSebastian from "@/assets/technician-sebastian.jpg";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2">
            <img 
              src={grundfosLogo} 
              alt="Grundfos Logo" 
              className="h-12 md:h-14 w-auto"
            />
            <p className="text-sm text-muted-foreground text-center">
              Deutschlands größtes Lager für Pumpen und Ersatzteile
            </p>
          </div>
          
          {/* Banner mit CTAs */}
          <div className="w-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* Blitzanfrage starten */}
              <a
                href="https://wa.me/4974719429450"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full"
              >
                <div className="flex flex-col items-center gap-3 p-6 bg-background border-2 border-accent rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-center">Blitzanfrage starten</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Angebot binnen 15 Minuten erhalten
                  </p>
                  <p className="text-sm font-medium text-accent-foreground text-center">
                    Ihre passende Grundfos-Lösung – schnell, präzise, unverbindlich.
                  </p>
                </div>
              </a>

              {/* Direkt anrufen */}
              <a
                href="tel:+4974719429450"
                className="group h-full"
              >
                <div className="flex flex-col items-center gap-3 p-6 bg-background border-2 border-primary rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
                  <div className="flex -space-x-3 mb-2">
                    <img 
                      src={technicianTorben} 
                      alt="Torben Maier" 
                      className="w-16 h-16 rounded-full border-3 border-background object-cover"
                    />
                    <img 
                      src={technicianSebastian} 
                      alt="Sebastian Treck" 
                      className="w-16 h-16 rounded-full border-3 border-background object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-center">Direkt anrufen</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Torben Maier und Sebastian Treck sind für Sie da
                  </p>
                  <div className="flex items-center gap-2 text-xs text-orange-600 font-medium bg-orange-50 px-3 py-1.5 rounded-full">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3 Personen in der Hotline – bitte kurz warten</span>
                  </div>
                  <p className="text-sm font-semibold text-primary text-center">
                    +49 (0) 7471 9429450
                  </p>
                </div>
              </a>

              {/* Per WhatsApp schreiben */}
              <a
                href="https://wa.me/4974719429450"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full"
              >
                <div className="flex flex-col items-center gap-3 p-6 bg-background border-2 border-primary rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
                  <div className="rounded-full bg-primary/10 p-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-center">Jetzt per WhatsApp schreiben</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Schicken Sie uns einfach ein Foto vom Typenschild 📸 und eine kurze Fehlerbeschreibung
                  </p>
                  <div className="mt-2 px-4 py-2 bg-primary/10 rounded-md">
                    <p className="text-sm font-bold text-primary text-center">
                      Unser Team kümmert sich darum
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;