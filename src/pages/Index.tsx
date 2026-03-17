import { Link } from "react-router-dom";
import { ArrowRight, Box, Home, HardHat, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg-new.png";

const services = [
  {
    icon: Box,
    title: "BIM Modeleur",
    items: [
      "Modélisation 3D BIM — maquettes architecturales (Revit, AutoCAD)",
      "Détection de conflits inter-corps d'état",
      "Export fichiers IFC et extraction de métrés",
      "Assistance MOE BIM (coordination, vérification modèles, réunions)",
    ],
  },
  {
    icon: Ruler,
    title: "Dessinateur-Projeteur",
    items: [
      "Plans d'exécution tous corps d'état (AutoCAD)",
      "Plans de détails techniques et coupes constructives",
      "Dossiers graphiques pour permis de construire (PC / PCMI)",
      "Plans conformes à exécution (DOE)",
    ],
  },
  {
    icon: Home,
    title: "Expert Agencement",
    items: [
      "Mobilier et menuiserie sur mesure (de l'étude à la pose)",
      "Détails techniques d'exécution et plans d'atelier",
      "Conseil en optimisation des méthodes de fabrication",
      "Assistance MOE Agencement (mise à jour plans, préparation dossiers entreprises, suivi chantier)",
    ],
  },
];

const advantages = [
  {
    title: "Double compétence rare",
    lines: [
      "BIM Modeleur + 25 ans terrain.",
      "Je comprends ce que je dessine.",
    ],
  },
  {
    title: "Solutions concrètes",
    lines: [
      "Propositions techniques, réalistes,",
      "réalisables — ancrées dans le terrain.",
    ],
  },
  {
    title: "Réactivité & flexibilité",
    lines: [
      "Missions courtes ou longues.",
      "Télétravail privilégié, déplacements selon projet.",
    ],
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
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-primary-foreground/60 font-semibold tracking-[0.3em] uppercase text-xs mb-4">
              David Badin · Epure
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
              BIM Modeleur / Dessinateur-Projeteur<br />
              Expert Agencement
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              De la modélisation numérique à la réalisation de vos espaces.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                <Link to="/contact">
                  Me contacter <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 w-full sm:w-auto">
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
              Prestations
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              Mes services
            </h2>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
              De la maquette BIM à l'expertise terrain
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="border border-border bg-gray-50 p-8 h-full flex flex-col transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
                  <service.icon className="text-card-foreground mb-4" size={36} strokeWidth={1} />
                  <h3 className="text-xl font-bold text-card-foreground mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 flex-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-card-foreground/70 text-sm">
                        <span className="mt-1.5 block w-1 h-1 bg-card-foreground flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/services" className="text-xs text-card-foreground/50 hover:text-card-foreground underline transition-colors">
                      Voir toutes les prestations →
                    </Link>
                  </div>
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
      <section className="pt-4 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
              Avantages
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-10">
              Pourquoi me choisir ?
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mx-auto items-stretch">
            {advantages.map((adv, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-border bg-gray-50 p-8 h-full transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
                  <p className="text-card-foreground font-bold text-xs mb-3 tracking-wide uppercase">{adv.title}</p>
                  {adv.lines.map((line, j) => (
                    <p key={j} className="text-card-foreground/70 text-xs leading-relaxed">{line}</p>
                  ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vous avez un projet ?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
              Parlons de vos besoins et trouvons la meilleure solution ensemble.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
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
