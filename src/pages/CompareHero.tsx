import heroAlt2 from "@/assets/hero-alt-2i.jpg";
import heroAlt3 from "@/assets/hero-alt-3w.jpg";
import heroCombined from "@/assets/hero-combined.jpg";
import heroUnified from "@/assets/hero-unified.jpg";

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
          <h2 className="text-white text-xl mb-4">Alt 3 — Panoramique transition</h2>
          <img src={heroAlt3} alt="Hero Alt 3" className="w-full rounded-lg" />
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Combined — BIM Modeleur + Expert Agencement</h2>
          <img src={heroCombined} alt="Hero Combined" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CompareHero;
