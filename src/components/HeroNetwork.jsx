// SVG-based animated digital network for the Hero section background.
// Pure SVG SMIL animations — no JS animation loop, very performant.

const NODES = [
  { id: 0,  cx: 50,  cy: 48,  r: 1.8 },  // central hub
  { id: 1,  cx: 24,  cy: 28,  r: 1.4 },
  { id: 2,  cx: 76,  cy: 22,  r: 1.6 },
  { id: 3,  cx: 88,  cy: 56,  r: 1.2 },
  { id: 4,  cx: 72,  cy: 80,  r: 1.3 },
  { id: 5,  cx: 38,  cy: 84,  r: 1.4 },
  { id: 6,  cx: 14,  cy: 64,  r: 1.2 },
  { id: 7,  cx: 11,  cy: 36,  r: 1.3 },
  { id: 8,  cx: 63,  cy: 34,  r: 1.5 },
  { id: 9,  cx: 34,  cy: 56,  r: 1.4 },
  { id: 10, cx: 83,  cy: 38,  r: 1.3 },
  { id: 11, cx: 46,  cy: 14,  r: 1.2 },
  { id: 12, cx: 58,  cy: 68,  r: 1.1 },
  { id: 13, cx: 20,  cy: 80,  r: 1.0 },
]

const EDGES = [
  [0,  1], [0,  8], [0,  9],  [0, 2],
  [1,  7], [1,  9], [1,  6],  [1, 11],
  [2,  8], [2, 10], [2, 11],  [2, 3],
  [3, 10], [3,  4], [3, 12],
  [4,  5], [4, 12], [4,  9],
  [5,  6], [5,  9], [5, 13],
  [6,  7], [6, 13],
  [7, 11],
  [8, 10], [8, 11],
  [9, 12],
]

// Indices of edges that get a traveling light particle
const TRAVEL_EDGES = [0, 2, 5, 9, 14, 20, 24]

export default function HeroNetwork() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ opacity: 0.28 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Line gradient */}
          <linearGradient id="netLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%"  stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>

          {/* Node gradient */}
          <radialGradient id="netNodeGrad">
            <stop offset="0%"   stopColor="#a5b4fc" stopOpacity="1" />
            <stop offset="60%"  stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4338ca" stopOpacity="0.5" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Travel particle glow filter */}
          <filter id="travelGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Paths for animateMotion */}
          {TRAVEL_EDGES.map((edgeIdx) => {
            if (!EDGES[edgeIdx]) return null
            const [a, b] = EDGES[edgeIdx]
            const na = NODES[a], nb = NODES[b]
            return (
              <path
                key={`tp-${edgeIdx}`}
                id={`tp-${edgeIdx}`}
                d={`M${na.cx},${na.cy} L${nb.cx},${nb.cy}`}
                fill="none"
              />
            )
          })}
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b], i) => {
          const na = NODES[a], nb = NODES[b]
          return (
            <line
              key={`edge-${i}`}
              x1={na.cx} y1={na.cy}
              x2={nb.cx} y2={nb.cy}
              stroke="url(#netLineGrad)"
              strokeWidth="0.18"
              opacity="0.55"
            />
          )
        })}

        {/* Traveling light particles */}
        {TRAVEL_EDGES.map((edgeIdx, i) => {
          if (!EDGES[edgeIdx]) return null
          return (
            <circle
              key={`travel-${i}`}
              r="0.45"
              fill="#06b6d4"
              filter="url(#travelGlow)"
            >
              <animateMotion
                dur={`${2.8 + i * 0.9}s`}
                repeatCount="indefinite"
                begin={`${i * 0.6}s`}
              >
                <mpath xlinkHref={`#tp-${edgeIdx}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                keyTimes="0;0.1;0.9;1"
                dur={`${2.8 + i * 0.9}s`}
                repeatCount="indefinite"
                begin={`${i * 0.6}s`}
              />
            </circle>
          )
        })}

        {/* Nodes */}
        {NODES.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Outer pulsing halo */}
            <circle
              cx={node.cx} cy={node.cy}
              r={node.r * 5}
              fill="#6366f1"
              opacity="0"
            >
              <animate
                attributeName="r"
                values={`${node.r * 3};${node.r * 7};${node.r * 3}`}
                dur={`${2.5 + (node.id % 4) * 0.7}s`}
                repeatCount="indefinite"
                begin={`${(node.id % 5) * 0.4}s`}
              />
              <animate
                attributeName="opacity"
                values="0.06;0.01;0.06"
                dur={`${2.5 + (node.id % 4) * 0.7}s`}
                repeatCount="indefinite"
                begin={`${(node.id % 5) * 0.4}s`}
              />
            </circle>

            {/* Mid glow ring */}
            <circle
              cx={node.cx} cy={node.cy}
              r={node.r * 2.2}
              fill="#6366f1"
              opacity="0.12"
              filter="url(#nodeGlow)"
            >
              <animate
                attributeName="opacity"
                values="0.08;0.2;0.08"
                dur={`${1.8 + (node.id % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Main node */}
            <circle
              cx={node.cx} cy={node.cy}
              r={node.r}
              fill="url(#netNodeGrad)"
              filter="url(#nodeGlow)"
            >
              <animate
                attributeName="opacity"
                values="0.65;1;0.65"
                dur={`${1.6 + (node.id % 4) * 0.3}s`}
                repeatCount="indefinite"
                begin={`${(node.id % 5) * 0.3}s`}
              />
            </circle>

            {/* Bright core */}
            <circle
              cx={node.cx} cy={node.cy}
              r={node.r * 0.38}
              fill="white"
              opacity="0.95"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
