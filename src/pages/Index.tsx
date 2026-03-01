import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Ruler, Box, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroIllustration from "@/assets/hero-illustration.png";

const services = [
  {
    icon: Box,
    title: "Modélisation BIM & Plans techniques",
    items: [
      "Modélisation Revit (architecturale et technique)",
      "Plans d'exécution AutoCAD 2D",
      "Coordination BIM et gestion de maquettes numériques",
      "Extraction de métrés et quantitatifs",
    ],
  },
  {
    icon: Ruler,
    title: "Expertise Agencement",
    items: [
      "Études techniques et solutions constructives",
      "Optimisation production et méthodes",
      "Suivi de chantier et contrôle qualité",
      "Coordination multi-corps d'état",
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
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              David Badin
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              BIM Modeleur &<br />Expert Agencement
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              25 ans d'expérience terrain + Certification BIM
              <br />Au service de vos projets d'agencement et de construction
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/contact">
                  Me contacter <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground hover:bg-foreground/5">
                <Link to="/services">Découvrir mes services</Link>
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img
              src={heroIllustration}
              alt="BIM Modeleur au travail"
              className="w-full max-w-xl mx-auto rounded-lg"
            />
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
