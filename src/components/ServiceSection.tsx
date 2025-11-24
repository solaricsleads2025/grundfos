import { Search, ImageIcon, Lightbulb, RefreshCw, Truck, HeartHandshake } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: Search,
      title: "Schnelle Identifikation",
      description: "Schnelle Identifikation der passenden Grundfos CR Pumpe oder des benötigten Ersatzteils"
    },
    {
      icon: ImageIcon,
      title: "Auswertung & Analyse",
      description: "Auswertung von Typenschild, Fotos oder vorhandenen Unterlagen"
    },
    {
      icon: Lightbulb,
      title: "Passende Lösung",
      description: "Vorschlag 1:1-Ersatz oder passende Neuauslegung"
    },
    {
      icon: RefreshCw,
      title: "Generalüberholte Pumpen",
      description: "Auf Wunsch Lieferung einer generalüberholten Pumpe als wirtschaftliche Alternative"
    },
    {
      icon: Truck,
      title: "Flexible Lieferung",
      description: "Expressversand, Kurier oder Abholung möglich"
    },
    {
      icon: HeartHandshake,
      title: "Langfristige Betreuung",
      description: "Auf Wunsch unterstützen wir Sie auch bei Wartung, Ersatzteilkonzept und Optimierung des Pumpenbetriebs."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ersatzpumpe oder Ersatzteil gesucht? Wir kümmern uns darum.
            </h2>
            <p className="text-lg text-foreground">
              Ob ungeplanter Ausfall oder geplante Modernisierung – wir sorgen dafür, dass Ihre Anlage schnell wieder zuverlässig läuft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-highlight transition-colors"
              >
                <div className="rounded-full bg-highlight/10 p-4 mb-4">
                  <service.icon className="h-8 w-8 text-highlight" />
                </div>
                <h3 className="font-medium text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg max-w-3xl mx-auto">
            <p className="text-foreground font-medium">
              Schicken Sie uns einfach ein Foto vom Typenschild oder Ihre Daten – den Rest übernehmen wir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;