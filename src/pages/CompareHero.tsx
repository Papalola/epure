import heroAlt2i from "@/assets/hero-alt-2i.jpg";
import heroUnified from "@/assets/hero-unified.jpg";
import heroUnifiedV2 from "@/assets/hero-unified-v2.jpg";
import heroBgV4 from "@/assets/hero-bg-v4.jpg";
import heroProgression from "@/assets/hero-progression.jpg";
import heroCombined from "@/assets/hero-combined.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: heroCombined, label: "Combined — Mur 4 étapes (croquis/CAD/béton/bois)" },
  { src: heroBgV4, label: "V4 — Bureau croquis → boiserie (2 étapes)" },
  { src: heroProgression, label: "Progression — 4 étapes panoramiques" },
  { src: heroUnifiedV2, label: "Unified V2 — Bureau BIM réaliste" },
  { src: heroUnified, label: "Unified V1 — Bureau BIM + Agencement" },
  { src: heroAlt2i, label: "Alt 2i — Workspace bureau palette site" },
  { src: heroBg, label: "Hero BG — Image originale" },
];

const CompareHero = () => {
  return (
    <div className="min-h-screen bg-black p-8 space-y-12">
      <h1 className="text-white text-3xl font-bold text-center">Toutes les images Hero</h1>
      <div className="space-y-8 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div key={i}>
            <h2 className="text-white text-xl mb-4">{img.label}</h2>
            <img src={img.src} alt={img.label} className="w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareHero;
