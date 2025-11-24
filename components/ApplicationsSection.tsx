import { Card } from "@/components/ui/card";
import buildingImage from "@/assets/application-building.jpg";
import industryImage from "@/assets/application-industry.jpg";
import agricultureImage from "@/assets/application-agriculture.jpg";

const ApplicationsSection = () => {
  const applications = [
    {
      title: "Gebäude & Versorgung",
      image: buildingImage,
      items: [
        "Heizung für Gewerbeimmobilien",
        "Klimatisierung von Gewerbeimmobilien",
        "Druckerhöhung für Gewerbeimmobilien",
        "Fernwärme",
        "Fernkühlung",
        "Kommunale Wasserversorgung",
        "Wasserverteilung im Wasserwerk",
        "Trinkwasseraufbereitung"
      ]
    },
    {
      title: "Industrie & Prozesse",
      image: industryImage,
      items: [
        "Zerspanung",
        "Waschen und Reinigen",
        "Transport von Prozessflüssigkeiten",
        "Heizungsanlagen in Industriebetrieben",
        "Kühlung",
        "Industrielle Wasserversorgung",
        "Industrielle Abwasserbehandlung",
        "Industrielle Prozesswasseraufbereitung",
        "Entsalzung",
        "Oberflächenwassergewinnung"
      ]
    },
    {
      title: "Landwirtschaft, Solar & digitale Lösungen",
      image: agricultureImage,
      items: [
        "Bewässerung",
        "Kreisberegnung und Sprühbewässerung",
        "Solarwärmeanlage",
        "Solarlösungen für die Landwirtschaft",
        "Solarenergie-Lösungen für Städte und Gemeinden",
        "Solarlösungen für Kommunen und Gemeinden",
        "Steuerung & digitale Lösungen für Grundwasser",
        "Steuerung & digitale Lösungen mit erneuerbarer Energie"
      ]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Typische Anwendungen der Grundfos CR Pumpen
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Die Grundfos CR Baureihe ist eine vertikale, mehrstufige Kreiselpumpe mit gegenüberliegenden Saug- und Druckstutzen – extrem vielseitig, robust und in unzähligen Anwendungen im Einsatz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-highlight mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-card border border-border p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-foreground text-center">
              Wenn Sie uns Ihre Anwendung und Betriebsdaten nennen (Medium, Temperatur, Fördermenge, Förderhöhe), schlagen wir Ihnen die passende CR-Ausführung vor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;