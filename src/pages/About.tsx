import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import portrait from "@/assets/portrait-david.png";

const parcours = [
  { year: "1997", title: "Apprenti Ébéniste", desc: "Les mains dans la matière. La précision comme culture." },
  { year: "2004", title: "Menuisier Agenceur", desc: "De la pièce unique au projet complet. Conception et pose." },
  { year: "2011", title: "Responsable de Projet Agencement", desc: "Planification entre artisans, architectes et maîtres d'ouvrage." },
  { year: "2025", title: "BIM Modeleur", desc: "Le numérique au service du terrain." },
  { year: "2026", title: "Epure", desc: "BIM Modeleur & Expert Agencement. Le projet abouti." },
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
          <div className="flex flex-col md:flex-row gap-10 items-start mb-8">
            <div className="flex-shrink-0 w-36 h-36">
              <img
                src={portrait}
                alt="David Badin"
                className="w-36 h-36 object-cover object-top"
              />
            </div>
            <div className="self-center text-foreground text-base" style={{ lineHeight: "1.6" }}>
              <p style={{ margin: 0 }}>25 ans sur le terrain.</p>
              <p style={{ margin: 0 }}>De la menuiserie à l'ébénisterie, de l'agencement à la modélisation BIM.</p>
              <p style={{ margin: 0 }}>Je parle la langue des artisans et celle des bureaux d'études.</p>
              <p style={{ margin: 0 }} className="font-bold">Epure, c'est cette double expertise au service de vos projets.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Value box */}
        <AnimatedSection>
          <div className="border border-border bg-gray-50 p-8 mb-20">
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-3 text-card-foreground text-sm">
                <span className="mt-1.5 block w-1.5 h-1.5 bg-card-foreground flex-shrink-0" />
                Un BIM Modeleur qui modélise et anticipe les contraintes terrain
              </li>
              <li className="flex items-start gap-3 text-card-foreground text-sm">
                <span className="mt-1.5 block w-1.5 h-1.5 bg-card-foreground flex-shrink-0" />
                Un expert agencement qui a fabriqué et posé ce qu'il dessine
              </li>
              <li className="flex items-start gap-3 text-card-foreground text-sm">
                <span className="mt-1.5 block w-1.5 h-1.5 bg-card-foreground flex-shrink-0" />
                Un professionnel réactif, disponible et fiable
              </li>
            </ul>
            <p className="text-card-foreground font-bold text-sm">Ma valeur ajoutée ?</p>
            <p className="text-card-foreground italic mt-3" style={{ fontSize: "0.75rem", lineHeight: "1.5" }}>
              Je ne fais pas que dessiner des plans, je propose des solutions techniques réalistes et réalisables.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline horizontale — zones à hauteur fixe pour alignement */}
        <AnimatedSection>
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-10">
              Parcours
            </p>
            <div className="overflow-x-auto">
              <div className="flex items-start" style={{ minWidth: "700px" }}>
                {parcours.map((step, i) => (
                  <div key={step.year} className="flex items-start flex-1">
                    <div className="flex flex-col items-center text-center" style={{ width: "120px" }}>
                      <div className="w-3 h-3 bg-foreground flex-shrink-0" style={{ marginBottom: "12px" }} />
                      <p className="text-xl font-bold text-foreground" style={{ margin: 0 }}>{step.year}</p>
                      <div style={{ minHeight: "40px", display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: "4px" }}>
                        <p className="text-[9px] font-extrabold tracking-[0.12em] uppercase text-foreground/80 text-center" style={{ width: "110px" }}>{step.title}</p>
                      </div>
                      <div style={{ minHeight: "60px", display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: "4px" }}>
                        <p className="text-[11px] text-muted-foreground leading-snug text-center" style={{ width: "110px" }}>{step.desc}</p>
                      </div>
                    </div>
                    {i < parcours.length - 1 && (
                      <div className="flex-1 h-px bg-border" style={{ marginTop: "6px" }} />
                    )}
                  </div>
                ))}
              </div>
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
