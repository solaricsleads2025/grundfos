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

          <div className="flex flex-col items-center gap-2">
            <img src={grundfosLogo} alt="Grundfos Logo" className="h-12 md:h-14 w-auto" />
            <p className="text-sm text-muted-foreground text-center">
              Deutschlands größtes Lager für Pumpen und Ersatzteile
            </p>
          </div>

          <div className="w-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

              {/* Blitzanfrage per WhatsApp */}
              <a
                href="https://wa.me/4915223662354"
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
                </div>
              </a>

              {/* Direkt anrufen */}
              <a href="tel:+4974719429450" className="group h-full">
                <div className="flex flex-col items-center gap-3 p-6 bg-background border-2 border-primary rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
                  <div className="flex -space-x-3 mb-2">
                    <img src={technicianTorben} alt="Torben Maier" className="w-16 h-16 rounded-full" />
                    <img src={technicianSebastian} alt="Sebastian Treck" className="w-16 h-16 rounded-full" />
                  </div>
                  <h3 className="font-bold text-lg text-center">Direkt anrufen</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Torben Maier und Sebastian Treck sind für Sie da
                  </p>
                  <p className="text-sm font-semibold text-primary text-center">
                    +49 (0)7471-94294-50
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/4915223662354"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full"
              >
                <div className="flex flex-col items-center gap-3 p-6 bg-background border-2 border-primary rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
                  <div className="rounded-full bg-primary/10 p-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-center">Jetzt per WhatsApp schreiben</h3>
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
