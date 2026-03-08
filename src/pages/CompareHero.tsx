import heroBgV4 from "@/assets/hero-bg-v4.jpg";
import heroAlt1 from "@/assets/hero-alt-1.jpg";
import heroAlt2 from "@/assets/hero-alt-2b.jpg";
import heroAlt3 from "@/assets/hero-alt-3c.jpg";

const CompareHero = () => {
  return (
    <div className="min-h-screen bg-black p-8 space-y-12">
      <h1 className="text-white text-3xl font-bold text-center">Comparaison des images Hero</h1>
      
      <div className="space-y-8 max-w-5xl mx-auto">
        <div>
          <h2 className="text-white text-xl mb-4">Version 4 (gardée)</h2>
          <img src={heroBgV4} alt="Hero V4" className="w-full rounded-lg" />
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Alt 1 — Cuisine haut de gamme</h2>
          <img src={heroAlt1} alt="Hero Alt 1" className="w-full rounded-lg" />
        </div>
        
        <div>
          <h2 className="text-white text-xl mb-4">Alt 2 — Bureau agenceur / BIM modeleur</h2>
          <img src={heroAlt2} alt="Hero Alt 2" className="w-full rounded-lg" />
        </div>
        
        <div>
          <h2 className="text-white text-xl mb-4">Alt 3 — Avant/Après (transition fluide)</h2>
          <img src={heroAlt3} alt="Hero Alt 3" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CompareHero;
