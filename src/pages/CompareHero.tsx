import heroAlt2 from "@/assets/hero-alt-2i.jpg";
import heroUnified from "@/assets/hero-unified.jpg";
import heroUnifiedV2 from "@/assets/hero-unified-v2.jpg";

const CompareHero = () => {
  return (
    <div className="min-h-screen bg-black p-8 space-y-12">
      <h1 className="text-white text-3xl font-bold text-center">Comparaison des images Hero</h1>
      
      <div className="space-y-8 max-w-5xl mx-auto">
        <div>
          <h2 className="text-white text-xl mb-4">Alt 2 — Workspace bureau (palette du site)</h2>
          <img src={heroAlt2} alt="Hero Alt 2" className="w-full rounded-lg" />
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Unified V1 — Bureau d'études BIM + Agencement</h2>
          <img src={heroUnified} alt="Hero Unified" className="w-full rounded-lg" />
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Unified V2 — Plus réaliste (lumière naturelle, détails)</h2>
          <img src={heroUnifiedV2} alt="Hero Unified V2" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CompareHero;
