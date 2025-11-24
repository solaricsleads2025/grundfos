import { Button } from "@/components/ui/button";
import { Check, Phone, MessageCircle } from "lucide-react";
import BlitzanfrageForm from "./BlitzanfrageForm";
import heroImage from "@/assets/hero-pumps.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-background to-secondary/30 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Grundfos Industriepumpen & Ersatzteile – sofort ab Lager verfügbar
            </h1>
            
            <p className="text-lg text-foreground">
              Industriepumpen von Grundfos (z. B. CR/CRE/CRN, TP/TPE, NB/NK, CM u. v. m.) – neu & generalüberholt, inklusive passender Ersatzteile. Schnelle Lieferung aus unserem Lager, technischer Support inklusive.
            </p>

            <div className="space-y-3">
              {[
                "Große Lagerverfügbarkeit – Pumpen & Ersatzteile sofort lieferbar",
                "Expressversand & Abholung nach Absprache möglich",
                "Technische Beratung durch erfahrene Pumpen-Spezialisten",
                "2 Jahre Gewährleistung auf geprüfte Pumpen"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-success/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={scrollToForm}
                className="w-full sm:w-auto"
              >
                Blitzanfrage starten
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="tel:+4900000000">
                  <Phone className="h-4 w-4" />
                  Direkt anrufen
                </a>
              </Button>
              <Button 
                size="lg"
                asChild
                className="w-full sm:w-auto bg-[#128C7E] text-white hover:bg-[#075E54]"
              >
                <a 
                  href="https://wa.me/4900000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Per WhatsApp schreiben
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              Beschreiben Sie kurz Ihre Anwendung – wir finden die passende Grundfos CR Pumpe oder das richtige Ersatzteil.
            </p>

            <div className="relative aspect-video lg:hidden rounded-lg overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt="Grundfos CR Pumpen in professioneller Industrieumgebung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Blitzanfrage Form */}
          <div className="lg:sticky lg:top-24">
            <BlitzanfrageForm />
          </div>
        </div>

        {/* Hero Image for Desktop */}
        <div className="hidden lg:block relative aspect-[21/9] rounded-lg overflow-hidden shadow-2xl mt-12">
          <img 
            src={heroImage} 
            alt="Grundfos CR Pumpen in professioneller Industrieumgebung"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;