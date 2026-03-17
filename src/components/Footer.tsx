import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoEpureWhite from "@/assets/logo-epure-white.svg";

const Footer = () => (
  <footer className="py-16 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
      <div>
        <img src={logoEpureWhite} alt="Epure" className="h-16 mb-6 opacity-80" />
        <p className="text-sm text-primary-foreground/50">
          BIM Modeleur · Dessinateur-Projeteur & Expert Agencement.
        </p>
        <p className="text-sm text-primary-foreground/50 mt-4">
          25 ans d'expérience au service de vos projets.
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
            <MapPin size={16} strokeWidth={1} /> Rhône-Alpes
          </span>
          
            href="https://www.linkedin.com/company/epure-db"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors mt-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-12 pt-8 text-center text-xs border-t border-primary-foreground/20 text-primary-foreground/40">
      © {new Date().getFullYear()} Epure — David BADIN · SIRET : 10209784700010 · <Link to="/mentions-legales" className="underline hover:text-primary-foreground transition-colors">Mentions légales & CGV</Link>
    </div>
  </footer>
);

export default Footer;
