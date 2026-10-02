// Everything on the site comes from this file. Edit the text here; App.tsx handles layout.
// Items marked TODO are placeholders — replace or delete them before sharing the site.

export type Link = { label: string; href: string };

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status?: string; // e.g. "Under review", "Forthcoming"
  links?: Link[]; // e.g. [{ label: "PDF", href: "/papers/my-paper.pdf" }]
};

export type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export const profile = {
  name: "Seung Jae Lieu",
  // How your name appears in author lists; matching entries are bolded in Publications.
  authorName: "S. J. Lieu",
  role: "Ph.D. Student",
  affiliation: "Georgia Institute of Technology",
  department: "School of Civil and Environmental Engineering", // TODO: confirm your school
  location: "Atlanta, GA",
  // Put a square photo in public/ (e.g. public/profile.jpg) and set "/profile.jpg". Empty shows initials.
  photo: "",
  tagline:
    "I study how people move through cities — micromobility, transit, and walking — and how street design shapes who can get where.", // TODO

  links: [
    { label: "Email", href: "mailto:lsj6308@gmail.com" }, // TODO: swap for your GT email if preferred
    { label: "GitHub", href: "https://github.com/sjlieu" },
    { label: "Google Scholar", href: "" }, // TODO: paste your Scholar profile URL
    { label: "LinkedIn", href: "" }, // TODO
    { label: "CV", href: "" }, // TODO: add public/cv.pdf and set "/cv.pdf"
  ] satisfies Link[],

  bio: [
    "I am a Ph.D. student at the Georgia Institute of Technology. My research combines travel-behavior modeling with large-scale spatial data to understand how the built environment shapes mobility choices.", // TODO
    "Recent work includes choice models for shared e-scooter use in Seoul, open datasets on sidewalk accessibility, and interactive tools for measuring transit access and equity in Atlanta.", // TODO
  ],

  interests: [
    "Micromobility",
    "Travel behavior & choice modeling",
    "Transit accessibility & equity",
    "Pedestrian infrastructure",
    "Urban spatial data",
  ],

  education: [
    { degree: "Ph.D., Civil Engineering", school: "Georgia Institute of Technology", years: "20XX – present" }, // TODO
    { degree: "M.S., …", school: "…", years: "20XX" }, // TODO
    { degree: "B.S., …", school: "…", years: "20XX" }, // TODO
  ],
};

export const news: { date: string; text: string }[] = [
  { date: "Oct 2026", text: "Launched this website." },
  { date: "20XX", text: "TODO: a recent talk, award, paper acceptance, or new position." },
];

export const publications: Publication[] = [
  // TODO: replace this example entry with your papers (newest first).
  {
    title: "Example paper title — replace with your own",
    authors: ["S. J. Lieu", "Coauthor A", "Advisor B"],
    venue: "Journal or Conference Name",
    year: 2026,
    status: "Example",
    links: [{ label: "PDF", href: "" }],
  },
];

export const projects: Project[] = [
  {
    title: "Seoul Sidewalk Accessibility Images",
    description:
      "Pedestrian-perspective sidewalk images from Seoul with field-measured and expert-annotated accessibility attributes.",
    href: "https://github.com/sjlieu/seoul_sidewalk_accessibility_image",
    tags: ["Dataset", "Accessibility"],
  },
  {
    title: "Transit Accessibility in Atlanta",
    description: "Interactive visualization of transit accessibility across the City of Atlanta.",
    href: "https://github.com/sjlieu/TransitAccessibility",
    tags: ["Visualization", "Transit"],
  },
  {
    title: "Transit Equity in Atlanta",
    description: "Interactive visualization of transit equity across the City of Atlanta.",
    href: "https://github.com/sjlieu/transit-equity",
    tags: ["Visualization", "Equity"],
  },
];
