import { Link } from "react-router-dom";
import { ArrowRight, Box, Home, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const bimServices = [
  "Modélisation 3D BIM — maquettes architecturales (Revit, AutoCAD)",
  "Plans d'exécution et mise en plan depuis maquette BIM",
  "Gestion et mise à jour de maquettes existantes",
  "Détection de conflits inter-corps d'état",
  "Synthèse technique multi-lots",
  "Export fichiers IFC et extraction de métrés",
  "Production des pièces graphiques pour permis de construire (PC / PCMI)",
  "Assistance MOE BIM (coordination, vérification modèles, réunions)",
];

const dessinateurServices = [
  "Plans d'exécution tous corps d'état (AutoCAD)",
  "Plans de détails techniques et coupes constructives",
  "Dossiers graphiques pour permis de construire (PC / PCMI)",
  "Mise en plan depuis relevés terrain ou données existantes",
  "Pièces graphiques pour dossiers de consultation entreprises (DCE)",
  "Plans conformes à exécution (DOE)",
];

const agencementServices = [
  "Études d'aménagement intérieur",
  "Optimisation des volumes et espaces",
  "Mobilier et menuiserie sur mesure (de l'étude à la pose)",
  "Détails techniques d'exécution et plans d'atelier (AutoCAD)",
  "Recherche de solutions constructives",
  "Conseil en optimisation des méthodes de fabrication",
  "Interface chantier / bureau d'études",
  "Assistance MOE Agencement (mise à jour plans, préparation dossiers entreprises, suivi chantier)",
];

const sectors = ["Architecture", "BTP", "Agencement"];

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

        <div className="grid md:grid-cols-3 gap-8 mb-10 items-stretch">
          <AnimatedSection className="h-full">
            <div className="border border-border bg-gray-50 p-8 h-full flex flex-col transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
              <Box className="text-card-foreground mb-4" size={32} strokeWidth={1} />
              <h2 className="text-2xl font-bold text-card-foreground mb-6 tracking-wide">BIM Modeleur</h2>
              <ul className="space-y-2 flex-1">
                {bimServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-card-foreground/70 text-sm">
                    <span className="mt-1.5 block w-1 h-1 bg-card-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="h-full">
            <div className="border border-border bg-gray-50 p-8 h-full flex flex-col transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
              <Ruler className="text-card-foreground mb-4" size={32} strokeWidth={1} />
              <h2 className="text-2xl font-bold text-card-foreground mb-6 tracking-wide">Dessinateur-Projeteur</h2>
              <ul className="space-y-2 flex-1">
                {dessinateurServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-card-foreground/70 text-sm">
                    <span className="mt-1.5 block w-1 h-1 bg-card-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="h-full">
            <div className="border border-border bg-gray-50 p-8 h-full flex flex-col transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
              <Home className="text-card-foreground mb-4" size={32} strokeWidth={1} />
              <h2 className="text-2xl font-bold text-card-foreground mb-6 tracking-wide">Expert Agencement</h2>
              <ul className="space-y-2 flex-1">
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
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {sectors.map((s) => (
                <div key={s} className="border border-border bg-gray-50 py-4 px-1 text-xs sm:text-sm font-semibold text-foreground text-center tracking-wide">
                  {s}
                </div>
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
