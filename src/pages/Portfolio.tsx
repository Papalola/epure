import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const projets = [
  {
    src: "/capture1.png",
    titre: "CAF / URSSAF — Vue 3D bâtiment URSSAF",
    desc: "Modélisation 3D architecturale — Maquette numérique, équipement public",
  },
  {
    src: "/capture2.png",
    titre: "CAF / URSSAF — Plan masse",
    desc: "Modélisation 3D architecturale — Plan masse et vues 3D",
  },
  {
    src: "/capture3.png",
    titre: "Immeuble collectif — Élévations",
    desc: "Modélisation 3D architecturale — Élévations 4 façades, programme collectif",
  },
  {
    src: "/capture4.png",
    titre: "Immeuble collectif — Plan de niveau",
    desc: "Modélisation 3D architecturale — Plan RDC, programme collectif",
  },
  {
    src: "/capture5.png",
    titre: "Logement T2 — Plan de niveau",
    desc: "Modélisation 3D architecturale — Plan RDC, logement individuel",
  },
  {
    src: "/BYS 1.png",
    titre: "Meuble d'entrée — Claustra bois et rangements",
    desc: "Agencement sur mesure — Claustra bois massif, banquette tissu gris avec tiroirs, armoire laquée blanc",
  },
  {
    src: "/BYS 2.png",
    titre: "Meuble d'entrée — Vues d'ensemble",
    desc: "Agencement sur mesure — Détails claustra et intégration dans l'espace",
  },
  {
    src: "/alb_cuisine_1.png",
    titre: "Cuisine — Vue d'ensemble",
    desc: "Agencement sur mesure — Cuisine équipée, façades mélaminées grises, plan de travail stratifié effet béton, réalisation pour particulier",
  },
  {
    src: "/alb_cuisine_2.png",
    titre: "Cuisine — Bloc cuisson",
    desc: "Agencement sur mesure — Colonne four intégré, plaque induction, hotte inox, façades mélaminées grises",
  },
  {
    src: "/alb_cuisine_3.png",
    titre: "Cuisine — Détail colonne",
    desc: "Agencement sur mesure — Colonne four intégré, façades mélaminées grises",
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projets.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projets.length - 1 ? 0 : c + 1));

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
              Projets
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center mb-16">
              Réalisations
            </h1>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative px-6">
              <div
                className="relative overflow-hidden group cursor-pointer flex items-center justify-center"
                style={{ aspectRatio: "1.414 / 1", backgroundColor: "#EDE9E4" }}
              >
                <img
                  src={projets[current].src}
                  alt={projets[current].titre}
                  className="max-w-full max-h-full object-contain"
                  style={{ transition: "transform 1500ms ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 border border-foreground bg-background flex items-center justify-center hover:bg-foreground hover:text-background transition-colors z-10"
              >
                <ArrowLeft size={15} />
              </button>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity z-10"
              >
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="flex items-start justify-between mt-4 mb-6 px-6">
              <div>
                <p className="text-sm font-bold text-foreground">{projets[current].titre}</p>
                <p className="text-xs text-muted-foreground mt-1">{projets[current].desc}</p>
              </div>
              <p className="text-xs text-muted-foreground flex-shrink-0 ml-6 pt-1">
                {current + 1} / {projets.length}
              </p>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 px-6">
              {projets.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => setCurrent(i)}
                  className={`flex-shrink-0 border-2 transition-all duration-200 overflow-hidden ${
                    i === current ? "border-foreground" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                  style={{ width: "72px", aspectRatio: "1.414 / 1", backgroundColor: "#EDE9E4" }}
                >
                  <img
                    src={p.src}
                    alt={p.titre}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center mt-14">
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
