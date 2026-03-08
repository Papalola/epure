import { Link } from "react-router-dom";
import { ArrowRight, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import portrait from "@/assets/portrait-david.png";

const parcours = [
  { year: "1997", title: "Apprenti · Ébéniste", desc: "Les mains dans la matière. La précision comme culture." },
  { year: "2004", title: "Menuisier Agenceur", desc: "De la pièce unique au projet complet. Conception et pose." },
  { year: "2011", title: "Responsable Production", desc: "Chef d'orchestre entre artisans, architectes et maîtres d'ouvrage." },
  { year: "2025", title: "BIM Modeleur · Titre Professionnel", desc: "Le numérique au service du terrain." },
  { year: "2026", title: "Epure", desc: "L'indépendance. Bureau d'études & Expert Agencement. Le projet abouti." },
];

const certifications = [
  "Titre Professionnel BIM Modeleur",
  "Bac Pro CAB Option Bois — Mention Bien",
  "CAP Ébénisterie",
  "BEP Bois et Matériaux",
  "CAP Menuiserie-Agencement",
];

const About = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
            David Badin
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
            À propos
          </h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20 text-lg">
            Un parcours solide au service de vos projets
          </p>
        </AnimatedSection>

        {/* Portrait + intro */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <img src={portrait} alt="David Badin" className="w-48 h-48 object-cover grayscale" />
            <p className="text-foreground text-lg leading-relaxed max-w-2xl">
              Passionné par les métiers du bois et de l'agencement depuis plus de 25 ans,
              j'ai évolué du terrain à la conception technique. Ma double compétence — 
              expertise terrain et maîtrise BIM — me permet de proposer des solutions
              techniques réalistes et réalisables.
            </p>
          </div>
        </AnimatedSection>

        {/* Today */}
        <AnimatedSection>
          <div className="border border-border p-10 mb-20">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-foreground" size={28} strokeWidth={1} />
              <h2 className="font-display text-3xl font-bold text-foreground uppercase">Aujourd'hui</h2>
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              Je mets cette double expertise au service des bureaux d'études, architectes, agenceurs
              et industriels qui recherchent :
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-2 block w-1.5 h-1.5 bg-foreground flex-shrink-0" />
                Un BIM modeleur qui comprend les contraintes de réalisation
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-2 block w-1.5 h-1.5 bg-foreground flex-shrink-0" />
                Un expert agencement capable de modéliser et coordonner
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-2 block w-1.5 h-1.5 bg-foreground flex-shrink-0" />
                Un professionnel réactif et fiable
              </li>
            </ul>
            <p className="text-foreground font-semibold italic">
              Ma valeur ajoutée ? Je ne fais pas que dessiner des plans, je propose des solutions
              techniques réalistes et réalisables.
            </p>
          </div>
        </AnimatedSection>

        {/* Horizontal Timeline */}
        <AnimatedSection>
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-10">
              Parcours
            </p>
            <div className="overflow-x-auto">
              <div className="flex items-start min-w-[800px]">
                {parcours.map((step, i) => (
                  <div key={step.year} className="flex items-start flex-1">
                    <div className="flex flex-col items-center text-center px-2">
                      {/* Dot */}
                      <div className="w-3 h-3 bg-foreground mb-4 flex-shrink-0" />
                      <p className="font-display text-2xl font-bold text-foreground">{step.year}</p>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-foreground/80 mt-1">{step.title}</p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed max-w-[160px]">{step.desc}</p>
                    </div>
                    {/* Connector line */}
                    {i < parcours.length - 1 && (
                      <div className="flex-1 h-px bg-border mt-[6px] min-w-[20px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Formations */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-foreground" size={28} strokeWidth={1} />
              <h2 className="font-display text-3xl font-bold text-foreground uppercase">Formations & Certifications</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c} className="border border-border px-5 py-3 text-sm text-foreground">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <Button asChild size="lg" className="border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background">
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
