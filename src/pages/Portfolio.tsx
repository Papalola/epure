import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  { src: "/epure/plans/plan_coupe_rdc.pdf", category: "BIM", label: "Plan de coupe RDC" },
  { src: "/epure/plans/plan_detail_appartement.pdf", category: "BIM", label: "Détail appartement" },
  { src: "/epure/plans/plan_masse_afpa.pdf", category: "BIM", label: "Plan masse" },
  { src: "/epure/plans/plan_elevations.pdf", category: "Plans", label: "Élévations" },
];

const Portfolio = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
            Projets
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-20">
            Réalisations
          </h1>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {plans.map((p, i) => (
            <AnimatedSection key={p.src} delay={i * 0.08}>
              <div className="border border-border bg-gray-50 overflow-hidden transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
                <a href={p.src} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-square flex flex-col items-center justify-center gap-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <FileText className="text-foreground/30" size={64} strokeWidth={1} />
                    <span className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Voir le plan</span>
                  </div>
                </a>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{p.category}</span>
                  <span className="text-xs text-muted-foreground">{p.label}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
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

export default Portfolio;
