import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BlitzanfrageForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-card border-2 border-accent/20 rounded-lg shadow-lg p-6 space-y-4">
      <div className="border-t-4 border-accent -mt-6 -mx-6 mb-4"></div>
      
      <div>
        <h3 className="text-2xl font-bold text-primary mb-2">
          Blitzanfrage starten
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          Angebot binnen 15 Minuten erhalten
        </p>
        <p className="text-sm font-medium text-accent-foreground">
          Ihre passende Grundfos-Lösung – schnell, präzise, unverbindlich.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="company">Firma / Name *</Label>
          <Input 
            id="company" 
            required 
            placeholder="Ihre Firma oder Name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact">Telefon oder E-Mail *</Label>
          <Input 
            id="contact" 
            required 
            type="text"
            placeholder="Telefon oder E-Mail"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pump-type">Grundfos Typ (falls bekannt)</Label>
          <Input 
            id="pump-type" 
            placeholder="z.B. CR 5-4"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Kurzbeschreibung Anwendung</Label>
          <Textarea 
            id="description" 
            rows={3}
            placeholder="Beschreiben Sie kurz Ihre Anwendung..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="file-upload" className="cursor-pointer">
            <div className="border-2 border-dashed border-border rounded-md p-4 hover:border-primary transition-colors text-center">
              <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Foto vom Typenschild / Anlage hochladen
              </span>
            </div>
          </Label>
          <Input 
            id="file-upload" 
            type="file" 
            className="hidden"
            accept="image/*"
          />
        </div>

        <Button 
          type="submit" 
          variant="cta" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Blitzanfrage absenden"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Wir melden uns schnellstmöglich telefonisch oder per E-Mail zurück.
        </p>
      </form>
    </div>
  );
};

export default BlitzanfrageForm;