import { Link } from "react-router-dom";
import { ArrowRight, Award, GraduationCap, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  {
    period: "1997 – 2023",
    title: "25 ans d'expérience terrain",
    icon: Briefcase,
    items: [
      "Ébéniste, menuisier-agenceur, poseur",
      "Responsable de production et méthodes",
      "Gestion d'équipes et coordination de projets",
    ],
  },
  {
    period: "2024 – 2025",
    title: "Formation BIM Modeleur",
    icon: GraduationCap,
    items: [
      "Titre Professionnel BIM Modeleur obtenu",
      "Maîtrise Revit et AutoCAD",
      "Collaboration multi-disciplinaire avec architectes et ingénieurs",
    ],
  },
];

const certifications = [
  "Titre Professionnel BIM Modeleur (2025)",
  "Bac Pro CAB Option Bois (1999)",
  "CAP Ébénisterie",
  "BEP Bois et Matériaux",
  "CAP Menuiserie-Agencement",
];

const About = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            À propos
          </h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20 text-lg">
            Un parcours solide au service de vos projets
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-foreground text-lg leading-relaxed mb-16 text-center max-w-2xl mx-auto">
            Passionné par les métiers du bois et de l'agencement depuis plus de 25 ans,
            j'ai évolué du terrain à la conception technique.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <AnimatedSection key={item.period} delay={i * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 md:text-right pl-16 md:pl-0">
                  {i % 2 === 0 && (
                    <div className="md:pr-12">
                      <TimelineContent item={item} />
                    </div>
                  )}
                  {i % 2 === 1 && <div className="hidden md:block" />}
                </div>
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-accent border-4 border-background z-10" />
                <div className="md:w-1/2 pl-16 md:pl-12">
                  {i % 2 === 1 && <TimelineContent item={item} />}
                  {i % 2 === 0 && <div className="hidden md:block" />}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Today */}
        <AnimatedSection>
          <div className="bg-secondary rounded-lg p-10 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-accent" size={28} />
              <h2 className="font-display text-2xl font-semibold text-foreground">Aujourd'hui</h2>
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              Je mets cette double expertise au service des bureaux d'études, architectes, agenceurs
              et industriels qui recherchent :
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-2 block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                Un BIM modeleur qui comprend les contraintes de réalisation
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-2 block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                Un expert agencement capable de modéliser et coordonner
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-2 block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                Un professionnel réactif et fiable
              </li>
            </ul>
            <p className="text-accent font-semibold italic">
              Ma valeur ajoutée ? Je ne fais pas que dessiner des plans, je propose des solutions
              techniques réalistes et réalisables.
            </p>
          </div>
        </AnimatedSection>

        {/* Parcours Timeline */}
        <AnimatedSection>
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-10">
              Parcours
            </p>
            <div className="relative flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
              {/* Horizontal line (desktop) */}
              <div className="hidden lg:block absolute top-3 left-0 right-0 h-px bg-border" />
              {[
                { year: "1997", title: "Apprenti · Ébéniste", desc: "Les mains dans la matière. La précision comme culture." },
                { year: "2004", title: "Menuisier Agenceur", desc: "De la pièce unique au projet complet. Conception et pose." },
                { year: "2011", title: "Responsable Production", desc: "Chef d'orchestre entre artisans, architectes et maîtres d'ouvrage." },
                { year: "2025", title: "BIM Modeleur · Titre Professionnel", desc: "Le numérique au service du terrain." },
                { year: "2026", title: "Epure", desc: "L'indépendance. Bureau d'études & Expert Agencement. Le projet abouti." },
              ].map((step) => (
                <div key={step.year} className="relative flex-1 lg:text-center lg:px-3">
                  {/* Dot */}
                  <div className="hidden lg:flex items-center justify-center mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                  </div>
                  {/* Vertical line dot (mobile) */}
                  <div className="lg:hidden absolute left-0 top-1 w-2 h-2 rounded-full bg-foreground" />
                  <div className="lg:pl-0 pl-6">
                    <p className="font-display text-lg font-bold text-foreground">{step.year}</p>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground/80 mt-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-accent" size={28} />
              <h2 className="font-display text-2xl font-semibold text-foreground">Formations & Certifications</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c} className="bg-card border border-border rounded-lg px-5 py-3 text-sm text-foreground">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Travaillons ensemble <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

const TimelineContent = ({ item }: { item: typeof timeline[0] }) => (
  <div>
    <span className="text-accent font-semibold text-sm tracking-widest">{item.period}</span>
    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-4">{item.title}</h3>
    <ul className="space-y-2 mb-4">
      {item.items.map((it) => (
        <li key={it} className="text-muted-foreground text-sm flex items-start gap-2">
          <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          {it}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
