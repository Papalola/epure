import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  { src: "/epure/capture1.png", category: "BIM" },
  { src: "/epure/capture2.png", category: "BIM" },
  { src: "/epure/capture3.png", category: "BIM" },
  { src: "/epure/capture4.png", category: "Plans" },
  { src: "/epure/capture5.png", category: "Plans" },
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
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.category}
                   className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{p.category}</span>
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
