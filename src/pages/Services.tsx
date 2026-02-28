import { Link } from "react-router-dom";
import { ArrowRight, Box, FileText, Layers, Wrench, Factory, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const bimServices = [
  {
    icon: Box,
    title: "Modélisation BIM Revit",
    items: [
      "Maquettes numériques architecturales et techniques",
      "Modélisation tous corps d'état",
      "Coordination de projets BIM",
      "Gestion et mise à jour de maquettes existantes",
    ],
  },
  {
    icon: FileText,
    title: "Plans d'exécution AutoCAD",
    items: [
      "Plans 2D tous corps d'état",
      "Mise en plan depuis maquette BIM",
      "Adaptation et modification de plans existants",
      "Plans de détails techniques",
    ],
  },
  {
    icon: Layers,
    title: "Coordination & Synthèse",
    items: [
      "Détection de conflits inter-corps d'état",
      "Synthèse technique",
      "Export fichiers IFC",
      "Extraction de métrés et quantitatifs",
    ],
  },
];

const agencementServices = [
  {
    icon: Wrench,
    title: "Études techniques",
    items: [
      "Recherche de solutions constructives",
      "Optimisation des méthodes de fabrication",
      "Plans d'atelier et de pose",
    ],
  },
  {
    icon: Factory,
    title: "Accompagnement production",
    items: [
      "Organisation et méthodes",
      "Contrôle qualité",
      "Coordination fournisseurs",
    ],
  },
  {
    icon: HardHat,
    title: "Suivi de chantier",
    items: [
      "Suivi de réalisation",
      "Interface chantier/bureau d'études",
      "SAV et ajustements",
    ],
  },
];

const sectors = [
  "Agencement", "BTP", "Architecture", "Menuiserie", "Ébénisterie", "Aménagement intérieur",
];

const modes = [
  "Sous-traitance", "Mission ponctuelle", "Renfort d'équipe", "Télétravail ou sur site",
];

const Services = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Mes Services
          </h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20">
            Une offre complète de la modélisation BIM à l'expertise terrain
          </p>
        </AnimatedSection>

        {/* BIM */}
        <AnimatedSection>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10">
            Modélisation BIM & Plans Techniques
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {bimServices.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="bg-card rounded-lg p-8 border border-border h-full hover:shadow-lg transition-shadow">
                <s.icon className="text-accent mb-4" size={32} />
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
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

        {/* Agencement */}
        <AnimatedSection>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10">
            Expertise Agencement
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {agencementServices.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="bg-card rounded-lg p-8 border border-border h-full hover:shadow-lg transition-shadow">
                <s.icon className="text-accent mb-4" size={32} />
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
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

        {/* Sectors & modes */}
        <AnimatedSection>
          <div className="bg-secondary rounded-lg p-10 mb-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Secteurs d'intervention</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {sectors.map((s) => (
                <span key={s} className="bg-card border border-border rounded-full px-4 py-1.5 text-sm text-foreground">{s}</span>
              ))}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Modes de collaboration</h3>
            <div className="flex flex-wrap gap-3">
              {modes.map((m) => (
                <span key={m} className="bg-card border border-border rounded-full px-4 py-1.5 text-sm text-foreground">{m}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Discutons de votre projet <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Services;
