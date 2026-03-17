import { Link } from "react-router-dom";
import { ArrowRight, Box, Home, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg-new.png";

const services = [
  {
    icon: Box,
    title: "BIM Modeleur",
    items: [
      "Modélisation 3D BIM (Revit, AutoCAD)",
      "Maquettes numériques architecturales",
      "Mise en plan depuis maquette BIM",
      "Adaptation et modification de plans existants",
      "Plans de détails techniques",
      "Gestion et mise à jour de maquettes existantes",
      "Détection de conflits inter-corps d'état",
      "Synthèse technique",
      "Export fichiers IFC",
      "Extraction de métrés et quantitatifs",
      "Assistance MOE BIM (mise à jour maquette, vérification modèles, coordination réunions)",
    ],
  },
  {
    icon: Home,
    title: "Expert Agencement",
    items: [
      "Études d'aménagement intérieur",
      "Optimisation des volumes et espaces",
      "Mobilier et menuiserie sur mesure (de l'étude à la pose)",
      "Détails techniques d'exécution et plans d'atelier",
      "Recherche de solutions constructives",
      "Optimisation des méthodes de fabrication",
      "Suivi de réalisation",
      "Interface chantier / bureau d'études",
      "Assistance MOE Agencement (mise à jour plans, préparation dossiers entreprises, suivi chantier)",
    ],
  },
];

const advantages = [
  {
    title: "Double compétence rare",
    desc: "BIM Modeleur + 25 ans terrain. Je ne fais pas que dessiner des plans — je comprends ce que je dessine.",
  },
  {
    title: "Solutions concrètes",
    desc: "Je comprends les contraintes de réalisation. Mes propositions sont techniques, réalistes et réalisables.",
  },
  {
    title: "Réactivité & flexibilité",
    desc: "Missions courtes ou longues. Télétravail privilégié, déplacements selon projet.",
  },
  {
