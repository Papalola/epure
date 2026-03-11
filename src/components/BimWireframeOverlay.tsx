import { motion } from "framer-motion";

const BimWireframeOverlay = () => {
  // Subtle architect pencil-like lines — not a grid, just a few strokes
  const lines = [
    // Horizontal strokes
    { x1: 30, y1: 180, x2: 420, y2: 178, delay: 0.5 },
    { x1: 60, y1: 340, x2: 380, y2: 342, delay: 0.9 },
    { x1: 10, y1: 480, x2: 350, y2: 478, delay: 1.3 },
    // Diagonal strokes
    { x1: 80, y1: 60, x2: 320, y2: 520, delay: 0.7 },
    { x1: 200, y1: 30, x2: 440, y2: 400, delay: 1.1 },
    // Short accent lines
    { x1: 140, y1: 140, x2: 260, y2: 138, delay: 1.5 },
    { x1: 100, y1: 420, x2: 280, y2: 422, delay: 1.7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, transparent 50%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, transparent 50%)",
        }}
      >
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {lines.map((l, i) => (
            <motion.line
              key={i}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: l.delay, ease: "easeOut" }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default BimWireframeOverlay;
