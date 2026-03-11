import { motion } from "framer-motion";

const BimWireframeOverlay = () => {
  // Architectural grid lines — horizontal and vertical
  const horizontalLines = [0.08, 0.2, 0.35, 0.5, 0.65, 0.8, 0.92];
  const verticalLines = [0.05, 0.12, 0.2, 0.28, 0.36, 0.44];

  // Dimension markers (small ticks with measurement text)
  const dimensions = [
    { x1: 0.06, y1: 0.15, x2: 0.18, y2: 0.15, label: "3.200" },
    { x1: 0.22, y1: 0.45, x2: 0.38, y2: 0.45, label: "2.750" },
    { x1: 0.1, y1: 0.7, x2: 0.3, y2: 0.7, label: "4.100" },
  ];

  // Cross marks (structural nodes)
  const nodes = [
    { x: 0.12, y: 0.2 },
    { x: 0.28, y: 0.2 },
    { x: 0.12, y: 0.5 },
    { x: 0.28, y: 0.5 },
    { x: 0.12, y: 0.8 },
    { x: 0.28, y: 0.8 },
    { x: 0.05, y: 0.35 },
    { x: 0.36, y: 0.35 },
    { x: 0.36, y: 0.65 },
    { x: 0.44, y: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Gradient mask: visible left, fades to transparent right */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.15) 40%, transparent 55%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.15) 40%, transparent 55%)",
        }}
      >
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal structural lines */}
          {horizontalLines.map((y, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={y * 600}
              x2={480}
              y2={y * 600}
              stroke="rgba(180,210,240,0.35)"
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            />
          ))}

          {/* Vertical structural lines */}
          {verticalLines.map((x, i) => (
            <motion.line
              key={`v-${i}`}
              x1={x * 1000}
              y1="0"
              x2={x * 1000}
              y2="600"
              stroke="rgba(180,210,240,0.3)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 + i * 0.15, ease: "easeOut" }}
            />
          ))}

          {/* Dimension lines with labels */}
          {dimensions.map((d, i) => (
            <motion.g
              key={`dim-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 + i * 0.3 }}
            >
              <line
                x1={d.x1 * 1000}
                y1={d.y1 * 600}
                x2={d.x2 * 1000}
                y2={d.y2 * 600}
                stroke="rgba(200,220,240,0.4)"
                strokeWidth="0.4"
                strokeDasharray="3 2"
              />
              {/* Tick marks */}
              <line
                x1={d.x1 * 1000}
                y1={d.y1 * 600 - 4}
                x2={d.x1 * 1000}
                y2={d.y1 * 600 + 4}
                stroke="rgba(200,220,240,0.4)"
                strokeWidth="0.4"
              />
              <line
                x1={d.x2 * 1000}
                y1={d.y2 * 600 - 4}
                x2={d.x2 * 1000}
                y2={d.y2 * 600 + 4}
                stroke="rgba(200,220,240,0.4)"
                strokeWidth="0.4"
              />
              <text
                x={((d.x1 + d.x2) / 2) * 1000}
                y={d.y1 * 600 - 6}
                textAnchor="middle"
                fill="rgba(180,210,240,0.35)"
                fontSize="7"
                fontFamily="monospace"
              >
                {d.label}
              </text>
            </motion.g>
          ))}

          {/* Structural node crosses */}
          {nodes.map((n, i) => (
            <motion.g
              key={`node-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            >
              <circle
                cx={n.x * 1000}
                cy={n.y * 600}
                r="2"
                fill="none"
                stroke="rgba(160,200,240,0.3)"
                strokeWidth="0.4"
              />
              <line
                x1={n.x * 1000 - 3}
                y1={n.y * 600}
                x2={n.x * 1000 + 3}
                y2={n.y * 600}
                stroke="rgba(160,200,240,0.25)"
                strokeWidth="0.3"
              />
              <line
                x1={n.x * 1000}
                y1={n.y * 600 - 3}
                x2={n.x * 1000}
                y2={n.y * 600 + 3}
                stroke="rgba(160,200,240,0.25)"
                strokeWidth="0.3"
              />
            </motion.g>
          ))}

          {/* Subtle diagonal bracing lines */}
          <motion.line
            x1="50" y1="120" x2="280" y2="480"
            stroke="rgba(170,200,235,0.12)"
            strokeWidth="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          />
          <motion.line
            x1="120" y1="48" x2="440" y2="360"
            stroke="rgba(170,200,235,0.1)"
            strokeWidth="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.8 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default BimWireframeOverlay;
