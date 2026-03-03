import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Box, HardHat, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Box,
    title: "Bureau d'études technique",
    items: [
      "Modélisation et coordination BIM (Revit)",
      "Plans d'exécution et dessins techniques (AutoCAD)",
      "Gestion de projet et maquettes numériques",
      "Relevés techniques, assistance MOE, suivi de chantier",
    ],
  },
  {
    icon: Home,
    title: "Architecture d'intérieur & Agencement",
    items: [
      "Conception et pilotage de projets d'aménagement",
      "Mobilier et menuiserie sur mesure, de l'étude à la pose",
      "Optimisation des volumes et agencements fonctionnels",
      "Coordination des intervenants et suivi de réalisation",
    ],
  },
];

const advantages = [
  "Double compétence rare : BIM + 25 ans d'expérience terrain (menuiserie, ébénisterie, agencement)",
  "Solutions concrètes : Je comprends les contraintes de réalisation",
  "Réactivité & flexibilité : Missions courtes ou longues, télétravail ou sur site",
  "Basé en Rhône (69) : Interventions région Auvergne-Rhône-Alpes et au-delà",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-accent-foreground/80 font-semibold tracking-widest uppercase text-sm mb-4">
              David Badin
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Bureau d'études &<br />Expertise Agencement
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              25 ans d'expérience terrain + Certification BIM
              <br />De la conception technique à la réalisation de vos espaces
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Me contacter <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/50 text-white bg-white/10 hover:bg-white/20">
                <Link to="/services">Voir mes services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Mes services
            </h2>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
              Une expertise complète, du plan à la réalisation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow h-full">
                  <service.icon className="text-accent mb-4" size={36} />
                  <h3 className="font-display text-xl font-semibold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose me */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              Pourquoi me choisir ?
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((adv, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-card rounded-lg p-6 border border-border">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={22} />
                  <p className="text-foreground text-sm leading-relaxed">{adv}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <AnimatedSection>
          <div className="container mx-auto px-4">
            <HardHat className="mx-auto mb-6 text-accent" size={48} />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Vous avez un projet ?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
              Parlons de vos besoins et trouvons la meilleure solution ensemble.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Me contacter <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Index;
