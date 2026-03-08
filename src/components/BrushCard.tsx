import React from "react";
import cadreEpure from "@/assets/cadre-epure.png";

interface BrushCardProps {
  children: React.ReactNode;
  className?: string;
}

const BrushCard: React.FC<BrushCardProps> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <img
      src={cadreEpure}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ objectFit: 'fill' }}
    />
    <div className="relative z-10 p-8">
      {children}
    </div>
  </div>
);

export default BrushCard;
