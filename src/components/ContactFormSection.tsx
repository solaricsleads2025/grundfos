import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Phone, MessageCircle, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // NEW: Local preview of selected files
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    setSelectedFiles(filesArray);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formspree.io/f/manzqjyp", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Anfrage erfolgreich gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });

      e.currentTarget.reset();
      setSelectedFiles([]);
    } catch {
      toast({
        title: "Anfrage gesendet!",
        description: "Ihre Anfrage wurde übermittelt. Bitte prüfen Sie Ihre E-Mails.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Jetzt Grundfos CR Pumpe oder Ersatzteil anfragen
            </h2>
            <p className="text-lg text-foreground">
              Schicken Sie uns Ihre Daten oder rufen Sie direkt an. Wir melden
              uns schnell mit einer konkreten Lösung – Ihr Angebot erhalten Sie
              in der Regel binnen{" "}
              <span className="font-bold text-accent-foreground">
                15 Minuten
              </span>{" "}
              (werktags während unserer Servicezeiten).
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cf-company">Firma / Name *</Label>
                <Input
                  id="cf-company"
                  name="company"
                  required
                  placeholder="Ihre Firma oder Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cf-email">E-Mail *</Label>
                <Input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cf-phone">Telefon *</Label>
                <Input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+49 ..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cf-application">Einsatzbereich</Label>
                <Select name="application">
                  <SelectTrigger id="cf-application">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="heating">Heizung</SelectItem>
                    <SelectItem value="cooling">Kühlung</SelectItem>
                    <SelectItem value="pressure">Druckerhöhung</SelectItem>
                    <SelectItem value="industrial">Industrieprozess</SelectItem>
                    <SelectItem value="irrigation">Bewässerung</SelectItem>
                    <SelectItem value="other">Sonstiges</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cf-pump-type">Grundfos Typ (falls bekannt)</Label>
              <Input
                id="cf-pump-type"
                name="pump_type"
                placeholder="z.B. CR 5-4, CRE 15-2"
              />
            </div>

            {/* FILE UPLOAD WITH PREVIEW */}
            <div className="space-y-2">
              <Label htmlFor="cf-file-upload" className="cursor-pointer">
                <div className="border-2 border-dashed border-border rounded-md p-6 hover:border-primary transition-colors text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Foto vom Typenschild / Anlage hochladen (klicken oder ziehen)
                  </span>
                </div>
              </Label>

              <Input
                id="cf-file-upload"
                name="file"
                type="file"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />

              {/* SHOW SELECTED FILES */}
              {selectedFiles.length > 0 && (
                <div className="mt-2 space-y-1">
                  {selectedFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ImageIcon className="h-4 w-4" />
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cf-description">
                Bitte beschreiben Sie kurz Ihre Anwendung / Ihr Projekt
              </Label>
              <Textarea
                id="cf-description"
                name="description"
                rows={4}
                placeholder="Medium, Temperatur, Fördermenge, Förderhöhe..."
              />
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
            </Button>

            <div className="border-t border-border pt-6 space-y-3">
              <p className="text-center font-medium text-foreground">
                Oder jetzt direkt kontaktieren:
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+4974719429450" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Jetzt anrufen: +49 (0)7471-94294-50
                  </a>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://wa.me/4915223662354"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Per WhatsApp schreiben
                  </a>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
