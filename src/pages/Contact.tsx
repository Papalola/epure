import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
      <section className="py-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-center mb-3" style={{ color: '#fefee0' }}>
              Échangeons
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-center mb-4" style={{ color: '#FFFFFF' }}>
              Contact
            </h1>
            <p className="text-center max-w-lg mx-auto mb-20" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Une question ? Un projet ? Je suis disponible pour échanger sur vos besoins.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((c) => (
                <AnimatedSection key={c.label}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid #343332' }}>
                      <c.icon style={{ color: '#fefee0' }} size={20} strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-medium transition-colors hover:opacity-80" style={{ color: '#FFFFFF' }}>
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-medium" style={{ color: '#FFFFFF' }}>{c.value}</p>
                      )}
                      {c.sub && <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.sub}</p>}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection>
                <div className="p-6 mt-8" style={{ border: '1px solid #343332' }}>
                  <p className="text-sm font-medium" style={{ color: '#FFFFFF' }}>Disponibilité</p>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Missions ponctuelles ou régulières • Télétravail ou sur site
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="p-8" style={{ border: '1px solid #343332' }}>
                <h2 className="font-display text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: '#FFFFFF' }}>
                  Envoyez-moi un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block" style={{ color: '#FFFFFF' }}>Nom / Prénom *</label>
                      <input
                        value={form.name}
                        onChange={update("name")}
                        className="flex h-10 w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{ backgroundColor: '#2A2A2A', border: '1px solid #343332', color: '#FFFFFF' }}
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block" style={{ color: '#FFFFFF' }}>Entreprise</label>
                      <input
                        value={form.company}
                        onChange={update("company")}
                        className="flex h-10 w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{ backgroundColor: '#2A2A2A', border: '1px solid #343332', color: '#FFFFFF' }}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block" style={{ color: '#FFFFFF' }}>Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        className="flex h-10 w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{ backgroundColor: '#2A2A2A', border: '1px solid #343332', color: '#FFFFFF' }}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block" style={{ color: '#FFFFFF' }}>Téléphone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className="flex h-10 w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{ backgroundColor: '#2A2A2A', border: '1px solid #343332', color: '#FFFFFF' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block" style={{ color: '#FFFFFF' }}>Message *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      className="flex w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{ backgroundColor: '#2A2A2A', border: '1px solid #343332', color: '#FFFFFF' }}
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    style={{ backgroundColor: '#fefee0', color: '#343332', border: '1px solid #343332' }}
                  >
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
