import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message requis").max(2000),
});

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "06 88 81 30 86", href: "tel:0688813086" },
  { icon: Mail, label: "Email", value: "davidbadin@outlook.fr", href: "mailto:davidbadin@outlook.fr" },
  { icon: MapPin, label: "Localisation", value: "Pomeys (69590) – Rhône", sub: "Interventions région Auvergne-Rhône-Alpes et au-delà" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({
      title: "Message envoyé !",
      description: "Merci, je vous recontacterai dans les plus brefs délais.",
    });
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20">
              Une question ? Un projet ? Je suis disponible pour échanger sur vos besoins.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((c) => (
                <AnimatedSection key={c.label}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-foreground font-medium hover:text-accent transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{c.value}</p>
                      )}
                      {c.sub && <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection>
                <div className="bg-secondary rounded-lg p-6 mt-8">
                  <p className="text-sm text-foreground font-medium">Disponibilité</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Missions ponctuelles ou régulières • Télétravail ou sur site
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="font-display text-xl font-semibold text-card-foreground mb-6">
                  Envoyez-moi un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-foreground font-medium mb-1.5 block">Nom / Prénom *</label>
                      <Input value={form.name} onChange={update("name")} />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm text-foreground font-medium mb-1.5 block">Entreprise</label>
                      <Input value={form.company} onChange={update("company")} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-foreground font-medium mb-1.5 block">Email *</label>
                      <Input type="email" value={form.email} onChange={update("email")} />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-sm text-foreground font-medium mb-1.5 block">Téléphone</label>
                      <Input type="tel" value={form.phone} onChange={update("phone")} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-foreground font-medium mb-1.5 block">Message *</label>
                    <Textarea rows={5} value={form.message} onChange={update("message")} />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Envoyer <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
