import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoEpure from "@/assets/logo-epure.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
      <div>
        <img src={logoEpure} alt="Épure" className="h-20 mb-4 brightness-0 invert" />
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          BIM Modélisation & Expertise Agencement.
          <br />25 ans d'expérience au service de vos projets.
        </p>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Navigation</h4>
        <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
          <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
          <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
          <Link to="/a-propos" className="hover:text-primary-foreground transition-colors">À propos</Link>
          <Link to="/realisations" className="hover:text-primary-foreground transition-colors">Réalisations</Link>
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
        <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
          <a href="tel:0688813086" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Phone size={16} /> 06 88 81 30 86
          </a>
          <a href="mailto:davidbadin@outlook.fr" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail size={16} /> davidbadin@outlook.fr
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Pomeys (69590) – Rhône
          </span>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Épure – David Badin. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;
