import type { Keyword, Project } from "../content";

// Tint for generated covers, keyed by a project's first keyword.
const TINTS: Record<Keyword, string> = {
  "Vision AI": "#7fc4ff",
  "Travel Behavior": "#e6c879",
  Walking: "#8be0b4",
  Micromobility: "#f2a65a",
  "Shared Mobility": "#c9a2ff",
  Transit: "#6fd3e0",
  "Complete Streets": "#9ad16f",
  Equity: "#ff8fa3",
  "Extreme Heat": "#ff7a59",
  "Urban Analytics": "#7fc4ff",
  "Planning Practice": "#b8c0d8",
};

// Small deterministic PRNG so each project always gets the same pattern.
function seeded(text: string) {
  let h = 2166136261;
  for (const ch of text) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function GeneratedCover({ project }: { project: Project }) {
  const tint = TINTS[project.keywords[0]] ?? "#e6c879";
  const rand = seeded(project.id);
  const nodes = Array.from({ length: 22 }, () => ({ x: rand() * 320, y: rand() * 200, r: 1.2 + rand() * 2.2 }));
  const links: [number, number][] = [];
  nodes.forEach((a, i) =>
    nodes.slice(i + 1).forEach((b, k) => {
      if (Math.hypot(a.x - b.x, a.y - b.y) < 78) links.push([i, i + 1 + k]);
    }),
  );
  const gradientId = `cover-${project.id}`;

  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="25%" cy="20%" r="90%">
          <stop offset="0" stopColor={tint} stopOpacity="0.32" />
          <stop offset="1" stopColor={tint} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="#0b0f1f" />
      <rect width="320" height="200" fill={`url(#${gradientId})`} />
      <g stroke={tint} strokeWidth="0.6" strokeOpacity="0.45">
        {links.map(([i, j]) => (
          <line key={`${i}-${j}`} x1={nodes[i].x} y1={nodes[i].y} x2={nodes[j].x} y2={nodes[j].y} />
        ))}
      </g>
      <g fill={tint}>
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} />
        ))}
      </g>
    </svg>
  );
}

export function Cover({ project }: { project: Project }) {
  return (
    <div className="cover">
      {project.cover ? <img src={project.cover} alt="" loading="lazy" /> : <GeneratedCover project={project} />}
    </div>
  );
}
