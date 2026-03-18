import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const projets = [
  {
    src: "/epure/capture1.png",
    titre: "Logement T2 — Plan de niveau",
    desc: "Modélisation 3D architecturale — Plan RDC, logement individuel",
  },
  {
    src: "/epure/capture2.png",
    titre: "Équipement public — Vue volumétrique",
    desc: "Modélisation 3D architecturale — Maquette numérique, bâtiment CAF/URSSAF",
  },
  {
    src: "/epure/capture3.png",
    titre: "CAF / URSSAF — Plan masse",
    desc: "Modélisation 3D architecturale — Plan masse et vues axonométriques",
  },
  {
    src: "/epure/capture4.png",
    titre: "Immeuble collectif — Élévations",
    desc: "Modélisation 3D architecturale — Élévations 4 façades, programme collectif",
  },
  {
    src: "/epure/capture5.png",
    titre: "Immeuble collectif — Plan de niveau",
    desc: "Modélisation 3D architecturale — Plan RDC, 4 logements",
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projets.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projets.length - 1 ? 0 : c + 1));

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
              Projets
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-20">
              Réalisations
            </h1>
          </AnimatedSection>

          {/* Carrousel */}
          <AnimatedSection>
            <div className="relative">
              {/* Image principale — ratio A3 paysage 420x297 = ~1.414 */}
              <div
                className="relative overflow-hidden bg-white border border-border group cursor-pointer"
                style={{ aspectRatio: "1.414 / 1" }}
              >
                <img
                  src={projets[current].src}
                  alt={projets[current].titre}
                  className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Légende */}
              <div className="flex items-start justify-between mt-5 mb-10">
                <div>
                  <p className="text-base font-bold text-foreground">{projets[current].titre}</p>
                  <p className="text-sm text-muted-foreground mt-1">{projets[current].desc}</p>
                </div>
                <p className="text-sm text-muted-foreground flex-shrink-0 ml-6 pt-1">
                  {current + 1} / {projets.length}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 justify-end">
                <button
                  onClick={prev}
                  className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Miniatures */}
              <div className="flex gap-3 mt-8 overflow-x-auto pb-2">
                {projets.map((p, i) => (
                  <button
                    key={p.src}
                    onClick={() => setCurrent(i)}
                    className={`flex-shrink-0 border-2 transition-all duration-200 overflow-hidden ${
                      i === current ? "border-foreground" : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                    style={{ width: "120px", aspectRatio: "1.414 / 1" }}
                  >
                    <img
                      src={p.src}
                      alt={p.titre}
                      className="w-full h-full object-contain bg-white"
                    />
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center mt-16">
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
};

export default Portfolio;
