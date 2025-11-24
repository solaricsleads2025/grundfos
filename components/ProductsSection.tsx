import { Wrench, Fan, Cpu, Cable, Circle, Database, Bolt, Disc, Grab } from "lucide-react";
import serviceKit from "@/assets/spare-parts-repair-kit.jpg";
import impeller from "@/assets/spare-parts-impeller-real.jpg";
import motor from "@/assets/spare-parts-motor.jpg";
import shaft from "@/assets/spare-parts-shaft.jpg";
import seals from "@/assets/spare-parts-seals.jpg";
import valves from "@/assets/spare-parts-valves.jpg";
import screws from "@/assets/spare-parts-screws.jpg";
import spacers from "@/assets/spare-parts-spacers.jpg";
import flanges from "@/assets/spare-parts-flanges.jpg";

const categories = [
  {
    name: "Service- & Reparatursätze",
    icon: Wrench,
    image: serviceKit,
  },
  {
    name: "Laufrad & Laufradkammer",
    icon: Fan,
    image: impeller,
  },
  {
    name: "Motor & Gehäuse",
    icon: Cpu,
    image: motor,
  },
  {
    name: "Welle & Kupplung",
    icon: Cable,
    image: shaft,
  },
  {
    name: "Dichtungen & O-Ringe",
    icon: Circle,
    image: seals,
  },
  {
    name: "Ventile & Stopfen",
    icon: Database,
    image: valves,
  },
  {
    name: "Schrauben & Kleinteile",
    icon: Bolt,
    image: screws,
  },
  {
    name: "Distanzhülsen & Klammern",
    icon: Disc,
    image: spacers,
  },
  {
    name: "Flansche & Anschlüsse",
    icon: Grab,
    image: flanges,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Grundfos Ersatzteile – Kategorien im Überblick
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Wählen Sie die passende Kategorie und erhalten Sie Ihr Ersatzteil-Angebot innerhalb von 15 Minuten.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer border border-border/50"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="aspect-square bg-muted/50 rounded-md overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;