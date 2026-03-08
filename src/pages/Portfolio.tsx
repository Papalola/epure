import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const placeholders = [
  { title: "Collaboration multi-disciplinaire – Projet tertiaire", category: "BIM" },
  { title: "Menuiserie d'art – Réalisation terrain", category: "Terrain" },
  { title: "Synthèse technique – Multi-corps d'état", category: "Plans" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {placeholders.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="border border-border bg-card overflow-hidden transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(52,51,50,0.15)]">
                <div className="aspect-[4/3] bg-card flex items-center justify-center">
                  <ImageIcon className="text-muted-foreground" size={48} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{p.category}</span>
                  <h3 className="text-lg font-bold text-card-foreground mt-2">{p.title}</h3>
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
