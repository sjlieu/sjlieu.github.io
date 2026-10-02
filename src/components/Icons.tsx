// Small inline icons for the hero buttons; they inherit the text color.

const common = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MailIcon() {
  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.5v.01M11.5 16v-5.5M11.5 13c0-1.6 1-2.5 2.3-2.5S16 11.3 16 13v3" />
    </svg>
  );
}

export function ScholarIcon() {
  return (
    <svg {...common}>
      <path d="m12 4 10 5.5L12 15 2 9.5z" />
      <path d="M6 11.7V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.3" />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <svg {...common}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export function LinkIcon({ label }: { label: string }) {
  switch (label) {
    case "Email":
      return <MailIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "Google Scholar":
      return <ScholarIcon />;
    default:
      return <DocumentIcon />;
  }
}

export function PersonPlaceholder() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="photo-placeholder">
      <circle cx="100" cy="80" r="34" />
      <path d="M26 212c4-48 34-80 74-80s70 32 74 80z" />
    </svg>
  );
}
