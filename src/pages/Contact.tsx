import { Phone, Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
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

          <div className="max-w-2xl mx-auto">

            <AnimatedSection>
              <div className="border border-border bg-gray-50 p-10 flex flex-col gap-8">

                <a href="mailto:contact@epure-db.com" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 border border-border bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors">
                    <Mail className="text-foreground group-hover:text-background transition-colors" size={20} strokeWidth={1} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <p className="font-bold text-foreground group-hover:opacity-70 transition-opacity">contact@epure-db.com</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" size={18} />
                </a>

                <a href="tel:0688813086" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 border border-border bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors">
                    <Phone className="text-foreground group-hover:text-background transition-colors" size={20} strokeWidth={1} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">Téléphone</p>
                    <p className="font-bold text-foreground group-hover:opacity-70 transition-opacity">06 88 81 30 86</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" size={18} />
                </a>

                <a href="https://www.linkedin.com/company/112306131/" target="_blank" rel="noreferrer" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 border border-border bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors">
                    <Linkedin className="text-foreground group-hover:text-background transition-colors" size={20} strokeWidth={1} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                    <p className="font-bold text-foreground group-hover:opacity-70 transition-opacity">Epure — David Badin</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" size={18} />
                </a>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-border bg-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-foreground" size={20} strokeWidth={1} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">Localisation</p>
                    <p className="font-bold text-foreground">Rhône-Alpes</p>
                    <p className="text-xs text-muted-foreground mt-1">Télétravail privilégié · Déplacements selon projet</p>
                  </div>
                </div>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
