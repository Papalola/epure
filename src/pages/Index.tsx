import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Box, Home, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BrushCard from "@/components/BrushCard";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Box,
    title: "BIM Modeleur",
    items: [
      "Modélisation 3D BIM (Revit, AutoCAD)",
      "Maquettes numériques architecturales",
      "Mise en plan depuis maquette BIM",
      "Adaptation et modification de plans existants",
      "Plans de détails techniques",
      "Gestion et mise à jour de maquettes existantes",
      "Détection de conflits inter-corps d'état",
      "Synthèse technique",
      "Export fichiers IFC",
      "Extraction de métrés et quantitatifs",
      "Assistance MOE BIM (mise à jour maquette, vérification modèles, coordination réunions)",
    ],
  },
  {
    icon: Home,
    title: "Expert Agencement",
    items: [
      "Études d'aménagement intérieur",
      "Optimisation des volumes et espaces",
      "Mobilier et menuiserie sur mesure (de l'étude à la pose)",
      "Détails techniques d'exécution et plans d'atelier",
      "Recherche de solutions constructives",
      "Optimisation des méthodes de fabrication",
      "Suivi de réalisation",
      "Interface chantier / bureau d'études",
      "Assistance MOE Agencement (mise à jour plans, préparation dossiers entreprises, suivi chantier)",
    ],
  },
];

const advantages = [
  {
    title: "Double compétence rare",
    desc: "BIM Modeleur + 25 ans terrain. Je ne fais pas que dessiner des plans — je comprends ce que je dessine.",
  },
  {
    title: "Solutions concrètes",
    desc: "Je comprends les contraintes de réalisation. Mes propositions sont techniques, réalistes et réalisables.",
  },
  {
    title: "Réactivité & flexibilité",
    desc: "Missions courtes ou longues. Télétravail privilégié, déplacements selon projet.",
  },
  {
    title: "Basé en Rhône-Alpes (69)",
    desc: "Interventions région Auvergne-Rhône-Alpes et au-delà.",
  },
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
            <p className="text-primary-foreground/60 font-semibold tracking-[0.3em] uppercase text-xs mb-4">
              David Badin · Epure
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight uppercase">
              Bureau d'études<br />& Expert Agencement
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              De la conception technique à la réalisation de vos espaces
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="border border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">
                  Me contacter <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
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
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
              Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              Mes services
            </h2>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
              Une expertise complète, du plan à la réalisation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="border border-border bg-card p-8 h-full transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
                  <service.icon className="text-foreground mb-4" size={36} strokeWidth={1} />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="mt-1.5 block w-1 h-1 bg-foreground flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-muted-foreground text-center text-sm mt-10">
              Sous-traitance · Mission ponctuelle · Renfort d'équipe · Télétravail privilégié, déplacements selon projet
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why choose me */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
              Avantages
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
              Pourquoi me choisir ?
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((adv, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
                  <CheckCircle className="text-foreground flex-shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground font-semibold text-sm mb-1 uppercase tracking-wide">{adv.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{adv.desc}</p>
                  </div>
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
            <HardHat className="mx-auto mb-6 text-primary-foreground/60" size={48} strokeWidth={1} />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Vous avez un projet ?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
              Parlons de vos besoins et trouvons la meilleure solution ensemble.
            </p>
            <Button asChild size="lg" className="border border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
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
