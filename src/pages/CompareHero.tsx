import heroBgV2 from "@/assets/hero-bg-v2.jpg";
import heroBgV3 from "@/assets/hero-bg-v3.jpg";
import heroBgV4 from "@/assets/hero-bg-v4.jpg";

const CompareHero = () => {
  return (
    <div className="min-h-screen bg-black p-8 space-y-12">
      <h1 className="text-white text-3xl font-bold text-center">Comparaison des images Hero</h1>
      
      <div className="space-y-8 max-w-5xl mx-auto">
        <div>
          <h2 className="text-white text-xl mb-4">Version 2</h2>
          <img src={heroBgV2} alt="Hero V2" className="w-full rounded-lg" />
        </div>
        
        <div>
          <h2 className="text-white text-xl mb-4">Version 3</h2>
          <img src={heroBgV3} alt="Hero V3" className="w-full rounded-lg" />
        </div>
        
        <div>
          <h2 className="text-white text-xl mb-4">Version 4</h2>
          <img src={heroBgV4} alt="Hero V4" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CompareHero;
