import solaricsLogo from "@/assets/solarics-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <img 
                src={solaricsLogo} 
                alt="Solarics Logo" 
                className="h-16 w-auto mb-2"
              />
              <h3 className="font-bold text-lg">Solarics GmbH</h3>
              <p className="text-sm opacity-90">
                Ihr Spezialist für<br />
                Grundfos CR Pumpen & Ersatzteile
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg">Kontakt</h3>
              <div className="text-sm opacity-90 space-y-1">
                <p>Im Nasswasen 14</p>
                <p>72379 Hechingen</p>
                <p className="pt-2">E-Mail: info@solarics.de</p>
                <p>Telefon: +49 (0) 7471-94294-50</p>
                <p className="font-semibold pt-1">Grundfos HOTLINE</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg">Rechtliches</h3>
              <div className="text-sm opacity-90 space-y-1">
                <a href="#" className="block hover:opacity-75 transition-opacity">
                  Impressum
                </a>
                <a href="#" className="block hover:opacity-75 transition-opacity">
                  Datenschutz
                </a>
                <a href="#" className="block hover:opacity-75 transition-opacity">
                  AGB
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Solarics GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;