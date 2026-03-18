import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  { icon: Mail, label: "Email", value: "contact@epure-db.com", href: "mailto:contact@epure-db.com" },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Rhône-Alpes",
    sub: "Interventions région Auvergne-Rhône-Alpes et au-delà",
  },
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
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
              Échangeons
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20">
              Une question ? Un projet ?<br />
              Je suis disponible pour échanger sur vos besoins.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-end">
            {/* Colonne gauche */}
            <div className="lg:col-span-2 flex flex-col justify-between h-full">
              <div className="space-y-8">
                {contactInfo.map((c) => (
                  <AnimatedSection key={c.label}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-border bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <c.icon className="text-foreground" size={20} strokeWidth={1} />
                      </div>
                      <div>
                        <p className="text-sm mb-1 text-muted-foreground">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="font-bold text-foreground transition-colors hover:opacity-80">
                            {c.value}
                          </a>
                        ) : (
                          <p className="font-bold text-foreground">{c.value}</p>
                        )}
                        {c.sub && (
                          <p className="text-xs mt-1 text-muted-foreground whitespace-nowrap">{c.sub}</p>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Disponibilité aligné en bas */}
              <AnimatedSection>
                <div className="border border-border bg-gray-50 p-6 mt-8">
                  <p className="text-sm font-bold text-card-foreground">Disponibilité</p>
                  <p className="text-sm mt-1 text-card-foreground/70 whitespace-nowrap">
                    Missions ponctuelles ou régulières · Télétravail ou sur site
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Formulaire */}
            <AnimatedSection className="lg:col-span-3">
              <div className="border border-border bg-gray-50 p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-bold text-card-foreground mb-1.5 block">Nom / Prénom *</label>
                      <input
                        value={form.name}
                        onChange={update("name")}
                        className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-bold text-card-foreground mb-1.5 block">Entreprise</label>
                      <input
                        value={form.company}
                        onChange={update("company")}
                        className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-bold text-card-foreground mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-bold text-card-foreground mb-1.5 block">Téléphone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-card-foreground mb-1.5 block">Message *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      className="flex w-full border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Envoyer <ArrowRight className="ml-2" size={18} />
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
