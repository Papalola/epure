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

const certificationsLeft = [
  "CAP Ébénisterie",
  "CAP Menuiserie-Agencement",
  "BEP Bois et Matériaux",
];

const certificationsRight = [
  "Titre Professionnel BIM Modeleur",
  "Bac Pro CAB Option Bois — Mention Bien",
];

const About = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
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
          <div className="flex flex-col md:flex-row gap-10 items-center mb-8">
            <div className="flex-shrink-0 w-36 h-36">
              <img
                src={portrait}
                alt="David Badin"
                className="w-36 h-36 object-cover object-top"
              />
            </div>
            <div className="text-foreground text-base leading-7">
              <p>25 ans sur le terrain.</p>
              <p>De la menuiserie à l'ébénisterie, de l'agencement à la modélisation BIM.</p>
              <p>Je parle la langue des artisans et celle des bureaux d'études.</p>
              <p className="font-bold mt-2">Epure, c'est cette double expertise au service de vos projets.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Value box */}
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
            <p className="text-card-foreground italic text-base">Je ne fais pas que dessiner des plans…</p>
            <p className="text-card-foreground italic text-base">je propose des solutions techniques réalistes et réalisables.</p>
          </div>
        </AnimatedSection>

        {/* Timeline avec ligne verticale */}
        <AnimatedSection>
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-10">
              Parcours
            </p>
            <div className="relative pl-6 border-l-2 border-border space-y-8">
              {parcours.map((step) => (
                <div key={step.year} className="relative grid grid-cols-[80px_160px_1fr] gap-6 items-start">
                  {/* Carré sur la ligne */}
                  <div className="absolute -left-[29px] top-1 w-3 h-3 bg-foreground" />
                  <p className="text-xl font-bold text-foreground leading-tight">{step.year}</p>
                  <p className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-foreground pt-1 leading-tight">{step.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Formations 2 colonnes */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-foreground" size={28} strokeWidth={1} />
              <h2 className="text-3xl font-bold text-foreground">Formations & Certifications</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                {certificationsLeft.map((c) => (
                  <div key={c} className="border border-border bg-gray-50 px-5 py-3 text-sm text-card-foreground">
                    {c}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {certificationsRight.map((c) => (
                  <div key={c} className="border border-border bg-gray-50 px-5 py-3 text-sm text-card-foreground">
                    {c}
                  </div>
                ))}
              </div>
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
