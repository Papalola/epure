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
    titre: "CAF / URSSAF — Vue volumétrique",
    desc: "Modélisation 3D architecturale — Maquette numérique, équipement public",
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
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
              Projets
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-20">
              Réalisations
            </h1>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex items-center gap-4">

              <button
                onClick={prev}
                className="flex-shrink-0 w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <ArrowLeft size={16} />
              </button>

              <div
                className="relative overflow-hidden bg-white border border-border group cursor-pointer flex-1"
                style={{ aspectRatio: "1.414 / 1" }}
              >
                <img
                  src={projets[current].src}
                  alt={projets[current].titre}
                  className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <button
                onClick={next}
                className="flex-shrink-0 w-10 h-10 bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <ArrowRight size={16} />
              </button>

            </div>

            <div className="flex items-start justify-between mt-5 mb-8 px-14">
              <div>
                <p className="text-base font-bold text-foreground">{projets[current].titre}</p>
                <p className="text-sm text-muted-foreground mt-1">{projets[current].desc}</p>
              </div>
              <p className="text-sm text-muted-foreground flex-shrink-0 ml-6 pt-1">
                {current + 1} / {projets.length}
              </p>
            </div>

            <div className="flex gap-3 px-14 overflow-x-auto pb-2">
              {projets.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => setCurrent(i)}
                  className={`flex-shrink-0 border-2 transition-all duration-200 overflow-hidden ${
                    i === current ? "border-foreground" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                  style={{ width: "100px", aspectRatio: "1.414 / 1" }}
                >
                  <img
                    src={p.src}
                    alt={p.titre}
                    className="w-full h-full object-contain bg-white"
                  />
                </button>
              ))}
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
