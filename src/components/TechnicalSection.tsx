import { Card } from "@/components/ui/card";
import { Zap, Settings, Droplet, Gauge } from "lucide-react";

const TechnicalSection = () => {
  const features = [
    {
      icon: Zap,
      text: "Kompakte Bauweise und hohe Effizienz"
    },
    {
      icon: Settings,
      text: "Große Variantenvielfalt (Materialkombinationen, Dichtungen, Motoren)"
    },
    {
      icon: Droplet,
      text: "Einsatz in Wasser, Prozessmedien und aggressiven Flüssigkeiten (je nach Ausführung)"
    },
    {
      icon: Gauge,
      text: "Möglichkeiten zur Drehzahlregelung (z. B. CRE / CRIE / CRNE)"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Vertikale, mehrstufige Inline-Kreiselpumpe – kurz erklärt
            </h2>
            <p className="text-lg text-foreground">
              Die Grundfos CR Baureihe ist eine vertikale, mehrstufige Kreiselpumpe mit gegenüberliegenden Saug- und Druckstutzen. Sie zeichnet sich insbesondere aus durch:
            </p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground pt-2">{feature.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="bg-highlight/10 border border-highlight/30 p-6 rounded-lg">
            <p className="text-foreground text-center">
              Gerne prüfen wir für Sie die passende Werkstoffauswahl und Ausführung für Ihre Anwendung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;