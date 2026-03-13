import { Link } from "react-router-dom";
import { ArrowRight, Box, Home } from "lucide-react";
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
  "Assistance MOE BIM (mise à jour maquette, vérification modèles, coordination réunions)",
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
  "Assistance MOE Agencement (mise à jour plans, préparation dossiers entreprises, suivi chantier)",
];

const sectors = ["BTP", "Architecture", "Agencement"];

const Services = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
            Prestations
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
            Mes services
          </h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20">
            De la maquette BIM à l'expertise terrain
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <AnimatedSection>
            <div className="border border-border bg-white p-8 h-full transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
              <Box className="text-card-foreground mb-4" size={32} strokeWidth={1} />
              <h2 className="text-2xl font-bold text-card-foreground mb-6 tracking-wide">Bim Modeleur</h2>
              <ul className="space-y-2">
                {bimServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-card-foreground/70 text-sm">
                    <span className="mt-1.5 block w-1 h-1 bg-card-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="border border-border bg-white p-8 h-full transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
              <Home className="text-card-foreground mb-4" size={32} strokeWidth={1} />
              <h2 className="text-2xl font-bold text-card-foreground mb-6 tracking-wide">Expert Agencement</h2>
              <ul className="space-y-2">
                {agencementServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-card-foreground/70 text-sm">
                    <span className="mt-1.5 block w-1 h-1 bg-card-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <p className="text-muted-foreground text-center text-sm mb-20">
            Sous-traitance · Mission ponctuelle · Renfort d'équipe · Télétravail privilégié, déplacements selon projet
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Secteurs d'intervention
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {sectors.map((s) => (
                <span key={s} className="border border-border px-5 py-2 text-sm text-foreground">{s}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background w-full sm:w-auto">
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
