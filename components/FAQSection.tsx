import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Welche Angaben benötigen Sie für eine Pumpenauslegung oder Ersatzpumpe?",
      answer: "Ideal sind: Medium, Temperatur, gewünschte Fördermenge (m³/h), Förderhöhe (m), Betriebsdruck, vorhandene Rohrdimensionen und ggf. ein Foto des Typenschilds bzw. der bestehenden Anlage."
    },
    {
      question: "Wie schnell können Sie liefern?",
      answer: "Viele CR-Modelle und Ersatzteile haben wir direkt ab Lager verfügbar. In dringenden Fällen bieten wir Expressversand oder Kurierlösungen an. Nennen Sie uns Ihren Wunschliefertermin – wir prüfen die schnellste Option."
    },
    {
      question: "Bieten Sie auch generalüberholte Pumpen an?",
      answer: "Ja. Wir haben regelmäßig generalüberholte Grundfos CR Pumpen auf Lager, die wir geprüft, gereinigt und getestet haben. Eine wirtschaftliche Alternative zur Neupumpe – mit Gewährleistung."
    },
    {
      question: "Können Sie auch komplette Anlagenlösungen unterstützen?",
      answer: "Ja. Wir unterstützen Sie gerne bei der Auswahl der passenden Pumpe innerhalb Ihrer Gesamtanlage und arbeiten bei Bedarf mit Ihrem Planer, Anlagenbauer oder Haustechniker zusammen."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Häufige Fragen zu Grundfos CR Pumpen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium text-primary hover:text-primary/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;