import { Card } from "@/components/ui/card";
import { Zap, Droplet, Shield, FlaskConical, Settings, Gauge, Factory, Beaker, CircleDot, Box, Circle, Copy, Waves, ArrowUpCircle } from "lucide-react";
import pumpCR from "@/assets/pump-cr.jpg";
import pumpCRE from "@/assets/pump-cre.jpg";
import pumpCRI from "@/assets/pump-cri.jpg";
import pumpCRIE from "@/assets/pump-crie.jpg";
import pumpCRN from "@/assets/pump-crn.jpg";
import pumpCRNE from "@/assets/pump-crne.jpg";
import pumpCRT from "@/assets/pump-crt.jpg";
import pumpCRTE from "@/assets/pump-crte.jpg";
import pumpNK from "@/assets/pump-nk.jpg";
import pumpNKE from "@/assets/pump-nke.jpg";
import pumpCM from "@/assets/pump-cm.jpg";
import pumpCME from "@/assets/pump-cme.jpg";
import pumpTP from "@/assets/pump-tp.jpg";
import pumpTPE from "@/assets/pump-tpe.jpg";
import pumpTPD from "@/assets/pump-tpd.jpg";
import pumpTPED from "@/assets/pump-tped.jpg";

const PumpSeriesSection = () => {
  const pumpFamilies = [
    {
      family: "CR-Familie",
      description: "Vertikale, mehrstufige Inline-Kreiselpumpen für Industrie, HLK & Prozess",
      series: [
        {
          name: "CR",
          icon: Settings,
          subtitle: "Standard-Baureihe für Wasser und Medien in Gewerbe & Industrie",
          description: "Vertikale mehrstufige Inline-Pumpe aus Grauguss und Edelstahl – universell einsetzbar für Druckerhöhung, Heizung, Kühlung und Prozesswasser.",
          applications: ["Druckerhöhung", "Heizung & Kühlung", "Prozesswasser", "Industrielle Wasserversorgung"],
          image: pumpCR
        },
        {
          name: "CRE",
          icon: Zap,
          subtitle: "Mit integriertem Frequenzumrichter",
          description: "CR-Pumpe mit integrierter Drehzahlregelung (E-Pumpe) für maximale Energieeffizienz und optimale Anpassung an wechselnde Lasten.",
          applications: ["Variable Lasten", "Konstantdruck", "Energieoptimierung"],
          image: pumpCRE
        },
        {
          name: "CRI",
          icon: Droplet,
          subtitle: "Edelstahl-Ausführung 1.4301",
          description: "Alle medienberührten Teile aus Edelstahl – ideal bei leicht aggressiven Medien und hoher Wasserqualität.",
          applications: ["Leicht aggressive Medien", "Hohe Wasserqualität"],
          image: pumpCRI
        },
        {
          name: "CRIE",
          icon: Gauge,
          subtitle: "CRI mit Drehzahlregelung",
          description: "Edelstahl-Variante mit integriertem Frequenzumrichter – perfekt für variable Volumenströme und energieoptimierten Betrieb.",
          applications: ["Variable Volumenströme", "Energieoptimierung"],
          image: pumpCRIE
        },
        {
          name: "CRN",
          icon: Shield,
          subtitle: "Hochlegierter Edelstahl 1.4401",
          description: "Vertikale mehrstufige Pumpe aus korrosionsbeständigem Edelstahl für anspruchsvollere Medien und höhere Drücke.",
          applications: ["Anspruchsvolle Medien", "Höhere Drücke", "Korrosionsbeständigkeit"],
          image: pumpCRN
        },
        {
          name: "CRNE",
          icon: Factory,
          subtitle: "CRN mit Frequenzumrichter",
          description: "Edelstahl-Pumpe mit integrierter Drehzahlregelung – für energieeffiziente Druckerhöhung und präzises Regelverhalten in Industrieanlagen.",
          applications: ["Industrieanlagen", "Präzise Regelung", "Energieeffizienz"],
          image: pumpCRNE
        },
        {
          name: "CRT",
          icon: FlaskConical,
          subtitle: "Titan-Baureihe für aggressive Medien",
          description: "Vertikale mehrstufige Titan-Pumpe für stark korrosive Medien wie Meerwasser, Chemie und Prozessflüssigkeiten.",
          applications: ["Meerwasser", "Chemie", "Stark korrosive Medien"],
          image: pumpCRT
        },
        {
          name: "CRTE",
          icon: Beaker,
          subtitle: "Titan mit Frequenzumrichter",
          description: "Titan-Pumpe mit integriertem Frequenzumrichter – maximale Korrosionsbeständigkeit kombiniert mit höchster Energieeffizienz.",
          applications: ["Korrosionsbeständigkeit", "Energieeffizienz", "Chemie"],
          image: pumpCRTE
        }
      ]
    },
    {
      family: "NK / NKE",
      description: "Einstufige Norm-Kreiselpumpen (End-Suction)",
      series: [
        {
          name: "NK",
          icon: CircleDot,
          subtitle: "Grundtyp – Horizontal, einstufig",
          description: "Horizontal aufgestellte, einstufige End-Suction-Normpumpe nach EN 733 (long-coupled). Nicht selbstansaugend, Spiralgehäuse, axialer Saug- & radialer Druckstutzen.",
          applications: ["Heizungs- und Kälteanlagen", "Fernwärme / Fernkälte", "Industrielle Wasserversorgung", "Bewässerung / Prozesswasser"],
          image: pumpNK
        },
        {
          name: "NKE",
          icon: Zap,
          subtitle: "Mit integriertem Frequenzumrichter (MGE IE5)",
          description: "Gleiche Hydraulik wie NK – mit integriertem Frequenzumrichter. Ideal für variable Lasten, Konstantdruck, Δp-Regelung. Perfekt für Industrie + Gewerbe (HLK, Prozess, Versorgung).",
          applications: ["Variable Lasten", "Konstantdruck", "Δp-Regelung", "HLK & Prozess"],
          image: pumpNKE
        }
      ]
    },
    {
      family: "CM / CME",
      description: "Horizontale, mehrstufige Blockpumpen",
      series: [
        {
          name: "CM",
          icon: Box,
          subtitle: "Centrifugal Modular – kompakt & modular",
          description: "Horizontale, mehrstufige, nicht selbstansaugende Block-Kreiselpumpe (close-coupled). Kompakt, leise, modular; in Grauguss sowie Edelstahl 304/316.",
          applications: ["Booster / Druckerhöhung", "Prozesswasser", "Waschanlagen", "Kühlkreise", "Kleine Industrie- & Gebäudeanlagen"],
          image: pumpCM
        },
        {
          name: "CME",
          icon: Zap,
          subtitle: "CM mit integriertem Frequenzumrichter",
          description: "Wie CM, aber mit integriertem Frequenzumrichter. Konstantdruck, Softstart, Energieeinsparung. Klassisch im Bereich Industrie-Booster, Prozess, OEM.",
          applications: ["Konstantdruck", "Energieeinsparung", "Industrie-Booster", "OEM-Anwendungen"],
          image: pumpCME
        }
      ]
    },
    {
      family: "TP / TPE / TPD / TPED",
      description: "Einstufige Inline-Kreiselpumpen – Einzel- und Doppelpumpen",
      series: [
        {
          name: "TP",
          icon: Circle,
          subtitle: "Ungeregelte Einzelpumpe mit IE3-Motor",
          description: "Ungeregelte Einzelpumpe mit IE3-Blueflux Motor. Für Heizung, Kühlung, Fernwärme, industrielle Prozesse.",
          applications: ["Heizung", "Kühlung", "Fernwärme", "Industrielle Prozesse"],
          image: pumpTP
        },
        {
          name: "TPE",
          icon: Zap,
          subtitle: "Drehzahlgeregelt – sehr energieeffizient",
          description: "Wie TP, aber mit Frequenzumrichter. Drehzahlgeregelt und sehr energieeffizient. Ideal für HLK, Industrie, große Gebäude.",
          applications: ["HLK", "Industrie", "Große Gebäude", "Energieoptimierung"],
          image: pumpTPE
        },
        {
          name: "TPD",
          icon: Copy,
          subtitle: "Twin-Head basierend auf TP",
          description: "Doppelpumpe (Twin-Head) basierend auf TP. Für maximale Betriebssicherheit.",
          applications: ["Maximale Betriebssicherheit", "Redundanz", "Kritische Anwendungen"],
          image: pumpTPD
        },
        {
          name: "TPED",
          icon: ArrowUpCircle,
          subtitle: "Twin-Head mit integrierter Regelung",
          description: "Twin-Head Variante der TPE mit integrierter Regelung. Für höchste Effizienz + Redundanz.",
          applications: ["Höchste Effizienz", "Redundanz", "Kritische Prozesse"],
          image: pumpTPED
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Grundfos Baureihen im Überblick
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Professionelle Pumpen für jeden Einsatzbereich – schnelle Lieferung garantiert
            </p>
          </div>

          {pumpFamilies.map((family, familyIndex) => (
            <div key={familyIndex} className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {family.family}
                </h3>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  {family.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {family.series.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group text-left w-full"
                  >
                    <Card className="p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-highlight/50 bg-card cursor-pointer">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-highlight/10 p-3 group-hover:bg-highlight/20 transition-colors">
                            <item.icon className="h-6 w-6 text-highlight" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold text-primary group-hover:text-highlight transition-colors">
                              {item.name}
                            </h4>
                          </div>
                        </div>
                        
                        {item.image && (
                          <div className="aspect-square bg-muted/30 rounded-md overflow-hidden mb-3">
                            <img 
                              src={item.image} 
                              alt={`Grundfos ${item.name} Pumpe`}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <p className="text-sm text-muted-foreground font-medium leading-tight">
                          {item.subtitle}
                        </p>
                        
                        <p className="text-sm text-foreground leading-relaxed">
                          {item.description}
                        </p>

                        {item.applications && item.applications.length > 0 && (
                          <div className="pt-2 border-t border-border/50">
                            <p className="text-xs font-semibold text-primary mb-2">Typische Anwendungen:</p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {item.applications.map((app, appIndex) => (
                                <li key={appIndex} className="flex items-start gap-1">
                                  <span className="text-highlight mt-0.5">•</span>
                                  <span>{app}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </Card>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Klicken Sie auf eine Baureihe, um direkt zum Anfrageformular zu gelangen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PumpSeriesSection;