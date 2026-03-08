import { Link } from "react-router-dom";
import { ArrowRight, Box, Home, Wrench, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const bimServices = [
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
];

const agencementServices = [
  "Études d'aménagement intérieur",
  "Optimisation des volumes et espaces",
  "Mobilier et menuiserie sur mesure (de l'étude à la pose)",
  "Détails techniques d'exécution et plans d'atelier",
  "Recherche de solutions constructives",
  "Optimisation des méthodes de fabrication",
  "Suivi de réalisation",
  "Interface chantier / bureau d'études",
];

const sectors = [
  "Agencement", "BTP", "Architecture", "Menuiserie", "Ébénisterie", "Aménagement intérieur",
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

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* BIM */}
          <AnimatedSection>
            <div className="bg-card rounded-lg p-8 border border-border h-full hover:shadow-lg transition-shadow">
              <Box className="text-accent mb-4" size={32} />
              <h2 className="font-display text-2xl font-semibold text-card-foreground mb-6">BIM Modeleur</h2>
              <ul className="space-y-2">
                {bimServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Agencement */}
          <AnimatedSection delay={0.15}>
            <div className="bg-card rounded-lg p-8 border border-border h-full hover:shadow-lg transition-shadow">
              <Home className="text-accent mb-4" size={32} />
              <h2 className="font-display text-2xl font-semibold text-card-foreground mb-6">Expert Agencement</h2>
              <ul className="space-y-2">
                {agencementServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Modes de collaboration */}
        <AnimatedSection>
          <p className="text-muted-foreground text-center text-sm mb-20">
            Sous-traitance · Mission ponctuelle · Renfort d'équipe · Télétravail privilégié, déplacements selon projet
          </p>
        </AnimatedSection>

        {/* Sectors */}
        <AnimatedSection>
          <div className="bg-secondary rounded-lg p-10 mb-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Secteurs d'intervention</h3>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span key={s} className="bg-card border border-border rounded-full px-4 py-1.5 text-sm text-foreground">{s}</span>
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
