import { Button } from "@/components/ui/button";
import { Send, Search, FileCheck } from "lucide-react";
import grundfosLogo from "@/assets/grundfos-logo-blue.png";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: Send,
      title: "Daten senden",
      description: "Sie schicken uns Fotos (Typenschild, Anlage) oder nennen uns Anwendung, Medium, gewünschte Fördermenge und Förderhöhe."
    },
    {
      number: "2",
      icon: Search,
      title: "Prüfung & Vorschlag",
      description: "Wir gleichen Ihre Anfrage mit unserem Lagerbestand und dem Grundfos-Programm ab und schlagen Ihnen die passende Pumpe bzw. Ersatzteile vor."
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Angebot & Expressversand",
      description: "Sie erhalten ein verbindliches Angebot. Nach Freigabe geht die Ware schnellstmöglich in den Versand oder steht zur Abholung bereit."
    }
  ];

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <img 
                src={grundfosLogo} 
                alt="Grundfos Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              In 3 Schritten zur passenden Grundfos Pumpe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4 h-full hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="rounded-full bg-highlight/10 p-3 flex-shrink-0">
                      <step.icon className="h-6 w-6 text-highlight" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                  <p className="text-foreground">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Jetzt unverbindlich Anfrage stellen
            </Button>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">
                Oder jetzt direkt kontaktieren:
              </p>
              <a 
                href="tel:+4974719429450" 
                className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Jetzt anrufen: +49-7471-94294-50
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;