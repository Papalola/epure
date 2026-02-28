import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const placeholders = [
  { title: "Maquette BIM – Projet résidentiel", category: "BIM" },
  { title: "Plans d'exécution – Agencement commercial", category: "Plans" },
  { title: "Agencement sur mesure – Espace professionnel", category: "Agencement" },
  { title: "Coordination BIM – Projet tertiaire", category: "BIM" },
  { title: "Menuiserie d'art – Réalisation terrain", category: "Terrain" },
  { title: "Synthèse technique – Multi-corps d'état", category: "Plans" },
];

const Portfolio = () => (
  <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Réalisations
          </h1>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-20">
            Quelques exemples de projets et réalisations
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {placeholders.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <ImageIcon className="text-muted-foreground/40" size={48} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display text-lg font-semibold text-card-foreground mt-2">{p.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-secondary rounded-lg p-10 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">
              Cette section sera enrichie au fur et à mesure avec des captures de maquettes BIM,
              plans réalisés et projets d'agencement.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
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
