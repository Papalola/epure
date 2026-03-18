import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import portrait from "@/assets/portrait-david.png";

const parcours = [
  { year: "1997", title: "Apprenti Ébéniste", desc: "Les mains dans la matière. La précision comme culture." },
  { year: "2004", title: "Menuisier Agenceur", desc: "De la pièce unique au projet complet. Conception et pose." },
  { year: "2011", title: "Responsable de Projet Agencement", desc: "Planification et coordination entre artisans, architectes et maîtres d'ouvrage." },
  { year: "2025", title: "BIM Modeleur", desc: "Le numérique au service du terrain." },
  { year: "2026", title: "Epure", desc: "L'indépendance. BIM Modeleur & Expert Agencement. Le projet abouti." },
];

const certifications = [
  "Titre Professionnel BIM Modeleur",
  "Bac Pro CAB Option Bois — Mention Bien",
  "CAP Ébénisterie",
  "CAP Menuiserie-Agencement",
  "BEP Bois et Matériaux",
];

const About = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
            David Badin
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
            À propos
          </h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20 text-lg">
            Un parcours solide au service de vos projets
          </p>
        </AnimatedSection>

        {/* Portrait + intro */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-start gap-12 mb-8">
            <div className="flex-shrink-0">
              <img
                src={portrait}
                alt="David Badin"
                className="w-40 h-40 object-cover object-top"
              />
            </div>
            <div className="text-foreground text-lg leading-relaxed self-center">
              <p>25 ans sur le terrain.</p>
              <p>De la menuiserie à l'ébénisterie, de l'agencement à la modélisation BIM.</p>
              <p>Je parle la langue des artisans et celle des bureaux d'études.</p>
              <p className="font-bold mt-2">Epure, c'est cette double expertise au service de vos projets.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Value box — même largeur que le bloc du dessus */}
        <AnimatedSection>
          <div className="border border-border bg-gray-50 p-8 mb-20">
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-card-foreground text-base">
                <span className="mt-2 block w-1.5 h-1.5 bg-card-foreground flex-shrink-0" />
                Un BIM Modeleur qui modélise et anticipe les contraintes terrain
              </li>
              <li className="flex items-start gap-3 text-card-foreground text-base">
                <span className="mt-2 block w-1.5 h-1.5 bg-card-foreground flex-shrink-0" />
                Un expert agencement qui a fabriqué et posé ce qu'il dessine
              </li>
              <li className="flex items-start gap-3 text-card-foreground text-base">
                <span className="mt-2 block w-1.5 h-1.5 bg-card-foreground flex-shrink-0" />
                Un professionnel réactif, disponible et fiable
              </li>
            </ul>
            <p className="text-card-foreground font-bold text-base">Ma valeur ajoutée ?</p>
            <p className="text-card-foreground italic text-base">
              Je ne fais pas que dessiner des plans, je propose des solutions techniques réalistes et réalisables.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline — 2 colonnes, sans ligne verticale */}
        <AnimatedSection>
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-10">
              Parcours
            </p>
            <div className="space-y-6">
              {parcours.map((step) => (
                <div key={step.year} className="grid grid-cols-[140px_1fr] gap-8 items-start">
                  {/* Gauche : année + point + titre */}
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 bg-foreground flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-bold text-foreground leading-none">{step.year}</p>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-foreground/70 mt-1 leading-tight">{step.title}</p>
                    </div>
                  </div>
                  {/* Droite : description */}
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Formations */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-foreground" size={28} strokeWidth={1} />
              <h2 className="text-3xl font-bold text-foreground">Formations & Certifications</h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              {certifications.map((c) => (
                <div key={c} className="border border-border bg-gray-50 px-8 py-3 text-sm text-card-foreground w-full max-w-md text-center">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <Button asChild size="lg" className="border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background w-full sm:w-auto">
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

export default About;
