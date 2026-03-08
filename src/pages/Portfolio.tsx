import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const placeholders = [
  { title: "Maquette BIM – Projet résidentiel", category: "BIM" },
  { title: "Plans d'exécution – Agencement commercial", category: "Plans" },
  { title: "Agencement sur mesure – Espace professionnel", category: "Agencement" },
];

const Portfolio = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground text-center mb-4">
            Réalisations
          </h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20">
            Quelques exemples de projets et réalisations
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {placeholders.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="border border-border overflow-hidden">
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <ImageIcon className="text-muted-foreground/40" size={48} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2">{p.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <Button asChild size="lg" className="border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background">
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
