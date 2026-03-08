import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoEpure from "@/assets/logo-epure.png";

const Footer = () => (
  <footer className="py-16 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
      <div>
        <img src={logoEpure} alt="Épure" className="h-20 mb-4 invert mix-blend-screen opacity-50" />
        <p className="text-sm leading-relaxed text-primary-foreground/50">
          Bureau d'études & Expertise Agencement.
          <br />25 ans d'expérience au service de vos projets.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-primary-foreground">Navigation</h4>
        <div className="flex flex-col gap-2 text-sm text-primary-foreground/50">
          <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
          <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
          <Link to="/a-propos" className="hover:text-primary-foreground transition-colors">À propos</Link>
          <Link to="/realisations" className="hover:text-primary-foreground transition-colors">Réalisations</Link>
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-primary-foreground">Contact</h4>
        <div className="flex flex-col gap-3 text-sm text-primary-foreground/50">
          <a href="tel:0688813086" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Phone size={16} strokeWidth={1} /> 06 88 81 30 86
          </a>
          <a href="mailto:contact@epure-db.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail size={16} strokeWidth={1} /> contact@epure-db.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} strokeWidth={1} /> Pomeys (69590) – Rhône
          </span>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-12 pt-8 text-center text-xs border-t border-primary-foreground/20 text-primary-foreground/40">
      © {new Date().getFullYear()} Epure — David BADIN · SIRET : 10209784700010 · <Link to="/mentions-legales" className="underline hover:text-primary-foreground transition-colors">Mentions légales & CGV</Link>
    </div>
  </footer>
);

export default Footer;
