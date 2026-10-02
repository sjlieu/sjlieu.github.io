// Everything on the site comes from this file (sourced from CV_SeungJaeLieu_26.docx).
// Edit the text here; the components in src/ handle layout.

export type Link = { label: string; href: string };

export const profile = {
  name: "Seung Jae Lieu",
  // How your name appears in author lists; it is bolded in Publications.
  authorName: "Lieu, S.J.",
  eyebrow: "Ph.D. Student · City and Regional Planning · Georgia Tech",
  // Put a square photo in public/ (e.g. public/profile.jpg) and set "/profile.jpg".
  // Empty shows a placeholder circle.
  photo: "",
  tagline:
    "I study how streets and neighborhoods shape the way people walk, bike, ride transit, and drive — combining travel-behavior models with vision AI and urban big data.",

  links: [
    { label: "Email", href: "mailto:slieu3@gatech.edu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lsj97/" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=heHaGWsAAAAJ&hl=en" },
    { label: "CV", href: "" }, // Add public/cv.pdf and set "/cv.pdf" to show this button.
  ] satisfies Link[],

  bio: [
    "I am a Ph.D. student in City and Regional Planning at the Georgia Institute of Technology, advised by Subhrajit Guhathakurta and Gulsah Akar, and a graduate research assistant at the Center for Urban Resilience and Analytics. My research spans sustainable transportation, urban analytics, travel behavior, and vision AI.",
    "I build tools that measure streets at scale — sidewalk widths, bike lanes, bus stop amenities, and how complete a street is — and use them to understand route choice, mode choice, and equity in access. In 2026 I was a visiting student at the MIT Senseable City Lab, where I worked on Open Walks, a global, crowdsourced map of sidewalk accessibility.",
  ],

  // Education shows only the end date (or "Present").
  education: [
    {
      title: "Ph.D., City and Regional Planning",
      org: "Georgia Institute of Technology",
      dates: "Present",
      note: "Advisors: Subhrajit Guhathakurta, Gulsah Akar",
    },
    {
      title: "M.S., Urban Analytics",
      org: "Georgia Institute of Technology",
      dates: "Present",
    },
    {
      title: "M.S., Civil and Environmental Engineering\nMaster of City and Regional Planning",
      org: "Georgia Institute of Technology",
      dates: "May 2023",
      note: "Advisors: Patricia Mokhtarian, Catherine Ross",
    },
    {
      title: "B.S., Urban Engineering",
      org: "Hanyang University",
      dates: "Feb 2021",
    },
  ],

  // `href` turns the group name into a link; leave it out for no link.
  researchExperience: [
    {
      title: "Graduate Research Assistant",
      org: "Center for Urban Resilience and Analytics, Georgia Tech",
      href: "https://resilience.research.gatech.edu/",
      dates: "Aug 2021 – Present",
      note: "Supervisor: Subhrajit Guhathakurta",
    },
    {
      title: "Graduate Research Assistant",
      org: "Resilient and Equitable Mobility Analytics and Planning Lab, Georgia Tech",
      href: "", // TODO: add the lab's website
      dates: "Jan 2026 – Present",
      note: "Supervisor: Rounaq Basu",
    },
    {
      title: "Visiting Student",
      org: "Senseable City Lab, Massachusetts Institute of Technology",
      href: "https://senseable.mit.edu/",
      dates: "Feb 2026 – Aug 2026",
    },
    {
      title: "Undergraduate Research Assistant",
      org: "Urban Design and Spatial Analytics Lab, Hanyang University",
      href: "https://junhwan89.cafe24.com/",
      dates: "Mar 2020 – May 2021",
    },
  ],
};

// ---------- Research projects ----------

// The filter buttons are built from the keywords used below, in this order.
export const KEYWORDS = [
  "Vision AI",
  "Travel Behavior",
  "Walking",
  "Micromobility",
  "Shared Mobility",
  "Transit",
  "Complete Streets",
  "Equity",
  "Extreme Heat",
  "Urban Analytics",
  "Planning Practice",
] as const;

export type Keyword = (typeof KEYWORDS)[number];

export type ProjectDetail = {
  text: string;
  refs?: string[]; // publication ids shown after the bullet, e.g. ["P7", "C5"]
};

export type Project = {
  id: string;
  title: string;
  // Path to an image in public/ (e.g. "/projects/my-project.jpg"). Empty draws a generated cover.
  cover: string;
  // Shown as "Funded by …" under the title on the back; empty shows "Independent work".
  funding: string;
  keywords: Keyword[];
  details: ProjectDetail[];
  links: Link[];
};

export const projects: Project[] = [
  {
    id: "routable-networks",
    title: "Boston Region Routable Mobility Networks",
    cover: "",
    funding: "Boston Region MPO",
    keywords: ["Vision AI", "Walking", "Urban Analytics"],
    details: [
      {
        text: "Developed a vision AI model identifying the pedestrian network from aerial imagery while addressing occlusion caused by tree canopy and shadows cast by buildings and trees.",
      },
      { text: "Released the code as a public GitHub repository for open use." },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/remap-research-group/routable-mobility-networks/tree/main/pedestrian_network",
      },
    ],
  },
  {
    id: "bikeshare-insights",
    title: "Behavioral Insights from City-wide Bikeshare Trip Data",
    cover: "",
    funding: "",
    keywords: ["Micromobility", "Shared Mobility", "Travel Behavior", "Extreme Heat", "Equity"],
    details: [
      {
        text: "Among bikeshare users, explored the extent to which subscription commitment coincides with observed frequent use.",
      },
      {
        text: "Examined whether extreme heat leads New York City bike share riders to switch from classic bikes to e-bikes on the same routes, and whether the built environment shapes that switch.",
        refs: ["W2"],
      },
      {
        text: "Measured how well bikeshare networks in five U.S. cities reach the destinations residents actually travel to, and whether these coverage gaps are larger in socioeconomically disadvantaged neighborhoods.",
        refs: ["W3"],
      },
      {
        text: "Compared how younger and older bike share users in Seoul trade off trip distance against streetscape qualities and midblock conflicts with cars when choosing routes.",
        refs: ["P9"],
      },
    ],
    links: [],
  },
  {
    id: "e-scooter-heat",
    title: "Travel Behavior Analysis of Shared E-scooter Users",
    cover: "",
    funding: "",
    keywords: ["Micromobility", "Shared Mobility", "Travel Behavior", "Extreme Heat"],
    details: [
      { text: "Examined how e-scooter users changed their travel behavior under extreme heat exposure." },
      {
        text: "Explored how e-scooter users choose a fare mode (Eco, Standard, or Turbo) when paying more buys a higher top speed, depending on heat exposure and route friction such as bike lanes, pedestrian volume, and traffic signals.",
      },
    ],
    links: [],
  },
  {
    id: "open-walks",
    title: "Open Walks",
    cover: "/projects/open-walks.jpg",
    funding: "",
    keywords: ["Vision AI", "Walking"],
    details: [
      {
        text: "Developed a tool to capture sidewalk attributes (e.g., width, slope, surface material) at global scale from crowdsourced video data using vision AI.",
        refs: ["W1"],
      },
      {
        text: "Quantified the uncertainty of visual language models when assessing sidewalk attributes via conformal prediction.",
        refs: ["W9"],
      },
    ],
    links: [{ label: "Application", href: "https://openwalks.netlify.app/" }],
  },
  {
    id: "complete-streets",
    title: "Evaluating the Completeness of Urban Streets Using Big Data and AI",
    cover: "/projects/complete-streets.jpg",
    funding: "U.S. Department of Transportation (Grant no. 69A3552344815)",
    keywords: ["Vision AI", "Complete Streets", "Walking", "Micromobility", "Transit"],
    details: [
      {
        text: "Led the research group and developed a framework to quantify attributes of diverse street elements, with a composite scoring system that evaluates completeness using AI and big data.",
        refs: ["W11", "C7", "C15"],
      },
      {
        text: "Developed a tool estimating sidewalk width using street view imagery and computer vision.",
        refs: ["P7", "C5"],
      },
      { text: "Developed a framework identifying bike lane type using multimodal imagery.", refs: ["P8"] },
      {
        text: "Built an agent that automatically finds and identifies bus stop amenities using reinforcement learning.",
        refs: ["P6"],
      },
      { text: "Published an online dashboard and a public GitHub repository." },
    ],
    links: [
      { label: "Dashboard", href: "https://gt-cura.github.io/complete_streets_web/" },
      { label: "GitHub", href: "https://github.com/GT-CURA/complete_streets" },
    ],
  },
  {
    id: "odmts-equity",
    title: "Transit Equity Implications of On-Demand Multimodal Transit System",
    cover: "/projects/transit-equity.jpg",
    funding: "National Science Foundation (Grant no. CMMI-1854684)",
    keywords: ["Transit", "Equity", "Shared Mobility"],
    details: [
      {
        text: "Examined the impact of the ODMTS on transit equity and equality by comparing it with the existing public transit system in Atlanta.",
        refs: ["P2", "C1"],
      },
      { text: "Created an online dashboard to visualize which neighborhoods take advantage of ODMTS." },
    ],
    links: [{ label: "Dashboard", href: "https://geospatial.gatech.edu/transit-equity/" }],
  },
  {
    id: "home-park-studio",
    title: "Home Park Planning Studio",
    cover: "",
    funding: "",
    keywords: ["Planning Practice"],
    details: [
      {
        text: "Conducted data analysis, documentation, visualization, and presentation in a cross-disciplinary, community-involved process to recommend actions that signal a reimagining of neighborhood value.",
        refs: ["R1"],
      },
    ],
    links: [],
  },
];

// ---------- Publications ----------

export type PublicationKind = "journal" | "working" | "report" | "conference";

export type Publication = {
  id: string;
  kind: PublicationKind;
  year: number;
  authors: string;
  title: string;
  venue?: string;
  status?: string; // e.g. "Under review"
  links: Link[]; // the first link is also applied to the title
};

const doi = (id: string): Link => ({ label: "DOI", href: `https://doi.org/${id}` });

export const publications: Publication[] = [
  // Peer-reviewed papers
  {
    id: "P10",
    kind: "journal",
    year: 2026,
    authors: "Lieu, S.J.† and Guhathakurta, S.",
    title:
      "Why do residents still drive and travel beyond high-accessibility neighborhoods? Examining the challenges to the 15-minute city concept",
    venue: "Sustainable Cities and Society",
    links: [
      doi("10.1016/j.scs.2026.107597"),
      {
        label: "Media: Tech Square ATL",
        href: "https://www.techsquareatl.com/tech-square-news/2026/5/18/moving-from-the-15-minute-city-to-the-harmonious-city",
      },
    ],
  },
  {
    id: "P9",
    kind: "journal",
    year: 2026,
    authors: "Lieu, S.J.†, Ki, D., and Akar, G.",
    title: "Age heterogeneity in bike share users’ route choice: Integrating streetscape and midblock conflicts",
    venue: "Travel Behaviour and Society",
    links: [doi("10.1016/j.tbs.2026.101302")],
  },
  {
    id: "P8",
    kind: "journal",
    year: 2026,
    authors: "Lieu, S.J.†, Koo, B.W., Hwang, U., and Guhathakurta, S.",
    title: "Automated detection and classification of bike lanes using multimodal imagery",
    venue: "Remote Sensing Applications: Society and Environment",
    links: [doi("10.1016/j.rsase.2025.101817")],
  },
  {
    id: "P7",
    kind: "journal",
    year: 2026,
    authors: "Lieu, S.J.† and Guhathakurta, S.",
    title: "A novel approach for estimating sidewalk width from street view images and computer vision",
    venue: "Environment and Planning B: Urban Analytics and City Science",
    links: [doi("10.1177/23998083251369602")],
  },
  {
    id: "P6",
    kind: "journal",
    year: 2026,
    authors: "Jones, B., Lieu, S.J.†, and Guhathakurta, S.",
    title: "Active navigation with reinforcement learning for bus stop amenity auditing in street view imagery",
    venue: "Transportation Research Interdisciplinary Perspectives",
    links: [doi("10.1016/j.trip.2026.102240")],
  },
  {
    id: "P5",
    kind: "journal",
    year: 2026,
    authors: "Han, C., Lieu, S.J., Hwang, U., and Guhathakurta, S.",
    title:
      "Do streetscapes still matter for customer ratings of eating and drinking establishments in car-dependent cities?",
    venue: "Journal of Urban Design",
    links: [doi("10.1080/13574809.2025.2541953")],
  },
  {
    id: "P4",
    kind: "journal",
    year: 2025,
    authors: "Lieu, S.J.† and Akar, G.",
    title: "Understanding rail users’ mode choice behavior for first and last mile travel",
    venue: "Journal of Transport Geography",
    links: [doi("10.1016/j.jtrangeo.2025.104214")],
  },
  {
    id: "P3",
    kind: "journal",
    year: 2025,
    authors: "Lieu, S.J.† and Guhathakurta, S.",
    title: "Exploring pedestrian route choice preferences by demographic groups: Analysis of street attributes in Chicago",
    venue: "Transportation Research Part A: Policy and Practice",
    links: [doi("10.1016/j.tra.2025.104437")],
  },
  {
    id: "P2",
    kind: "journal",
    year: 2025,
    authors: "Hwang, U., Lieu, S.J., Dalmeijer, K., Guan, H., Guhathakurta, S., and Van Hentenryck, P.",
    title: "Measuring Transit Equity of On-demand Multimodal Transit System",
    venue: "Journal of the American Planning Association",
    links: [doi("10.1080/01944363.2024.2323470")],
  },
  {
    id: "P1",
    kind: "journal",
    year: 2023,
    authors: "Ki, D., Chen, Z., Lee, S., and Lieu, S.J.",
    title: "A Novel Walkability Index Using Google Street View and Deep Learning",
    venue: "Sustainable Cities and Society",
    links: [doi("10.1016/j.scs.2023.104896")],
  },

  // Working papers
  {
    id: "W11",
    kind: "working",
    year: 2026,
    authors: "Lieu, S.J.†, Lee, J., Jones, B., Synn, S.H., and Guhathakurta, S.",
    title: "How complete are your city’s streets? Evaluating the completeness of urban streets using AI and big data",
    status: "Revision",
    links: [],
  },
  {
    id: "W10",
    kind: "working",
    year: 2026,
    authors: "Lieu, S.J.† and Akar, G.",
    title: "School travel without the school bus: Equity implications of distance-based funding thresholds in Georgia",
    status: "Under review",
    links: [],
  },
  {
    id: "W9",
    kind: "working",
    year: 2026,
    authors: "Lieu, S.J.* †, Morra, D.*, Cadoni, C., Song, W., Mazzarello, M., and Ratti, C.",
    title: "Can VLMs reliably assess sidewalk accessibility attributes from pedestrian-level imagery?",
    status: "Under review",
    links: [{ label: "arXiv", href: "https://doi.org/10.48550/arXiv.2609.17882" }],
  },
  {
    id: "W8",
    kind: "working",
    year: 2026,
    authors: "Lieu, S.J., Ki, D., and Guhathakurta, S.",
    title:
      "From streetscape elements to spatial configuration: Theory-grounded measurement with multimodal large language models",
    status: "Under review",
    links: [],
  },
  {
    id: "W7",
    kind: "working",
    year: 2026,
    authors: "Lieu, S.J.†, Han, C., and Guhathakurta, S.",
    title:
      "Accessibility uncertainty: How built environments and social homogeneity shape within-neighborhood travel variance",
    status: "Under review",
    links: [],
  },
  {
    id: "W6",
    kind: "working",
    year: 2026,
    authors: "Ki, D., Lieu, S.J.†, and Guhathakurta, S.",
    title:
      "Revealing socioeconomic bias in mesoscale-based streetscape metrics: Leveraging MLLMs to capture microscale quality",
    status: "Under review",
    links: [],
  },
  {
    id: "W5",
    kind: "working",
    year: 2026,
    authors: "Ha, J., Lieu, S.J., Zhang, K., and Ki, D.",
    title: "From potential access to realized response: Evidence from 2.4 million emergency incidents in South Korea",
    status: "Under review",
    links: [],
  },
  {
    id: "W4",
    kind: "working",
    year: 2026,
    authors: "Ki, D. and Lieu, S.J.",
    title: "Do MLLMs Perceive Streetscapes Like Humans? Uncovering Systematic Biases in Built Environment Perception",
    status: "Under review",
    links: [],
  },
  {
    id: "W3",
    kind: "working",
    year: 2026,
    authors: "Lim, S., Lieu, S.J., and Suh, H.",
    title:
      "Beyond station access: Bikeshare destination-coverage gaps and residential disadvantage across five U.S. cities",
    status: "Under review",
    links: [],
  },
  {
    id: "W2",
    kind: "working",
    year: 2026,
    authors: "Lieu, S.J. and Basu, R.",
    title:
      "Pedal of least resistance: Examining extreme heat-induced substitution between classic and electric bikes within New York City’s bike share system",
    status: "Working manuscript",
    links: [],
  },
  {
    id: "W1",
    kind: "working",
    year: 2026,
    authors: "Morra, D., Lieu, S.J., Choi, K., Cadoni, C., Mazzarello, M., and Ratti, C.",
    title: "Open Walks: Global Crowdsourced Mapping of Sidewalk Accessibility Using Smartphones and Multimodal AI",
    status: "Working manuscript",
    links: [],
  },

  // Reports
  {
    id: "R1",
    kind: "report",
    year: 2023,
    authors:
      "Master, M., Yohanis, S., Hudson, J., Noe, J., Lieu, S.J., Neaves, T., Yuxiang, Z., and Rollins, M.",
    title: "Urban Design Studio: Home Park Neighborhood Strategic Planning",
    venue: "",
    links: [{ label: "Handle", href: "https://hdl.handle.net/1853/70267" }],
  },

  // Conference presentations
  {
    id: "C16",
    kind: "conference",
    year: 2026,
    authors: "Lieu, S.J., Ki, D., and Guhathakurta, S.",
    title:
      "Beyond Computer Vision: Integrating Multimodal Large Language Models for Theory-Grounded Measurement of Urban Design for Streetscape Perception",
    venue: "66th Annual Conference of the Association of Collegiate Schools of Planning, Pittsburgh, PA, USA",
    links: [],
  },
  {
    id: "C15",
    kind: "conference",
    year: 2026,
    authors: "Lieu, S.J., Lee, J., Jones, B., Synn, S.H., and Guhathakurta, S.†",
    title: "How complete are your city’s streets? Evaluating the completeness of urban streets using AI and big data",
    venue: "66th Annual Conference of the Association of Collegiate Schools of Planning, Pittsburgh, PA, USA",
    links: [],
  },
  {
    id: "C14",
    kind: "conference",
    year: 2026,
    authors: "Basu, R., Lieu, S.J., and Synn, S.H.",
    title: "Hot Wheels: How Do Bikeshare Usage Patterns Change in Response to Extreme Heat Across American Cities?",
    venue: "66th Annual Conference of the Association of Collegiate Schools of Planning, Pittsburgh, PA, USA",
    links: [],
  },
  {
    id: "C13",
    kind: "conference",
    year: 2026,
    authors: "Lieu, S.J. and Guhathakurta, S.",
    title: "Different Acceptable Travel Times Across Amenity Types: An Empirical Assessment Using U.S. Mobility Data",
    venue: "2026 Association of American Geographers Annual Meeting, San Francisco, CA, USA",
    links: [],
  },
  {
    id: "C12",
    kind: "conference",
    year: 2026,
    authors: "Lieu, S.J. and Guhathakurta, S.",
    title:
      "Why do residents still drive and travel beyond high-accessibility neighborhoods? Examining the challenges to the 15-minute city concept",
    venue: "105th Annual Meeting of the Transportation Research Board, Washington, DC, USA",
    links: [],
  },
  {
    id: "C11",
    kind: "conference",
    year: 2025,
    authors: "Lieu, S.J., Ki, D., and Akar, G.",
    title: "Route choice behaviors for shared bike users: Visual streetscapes and gender differences",
    venue: "65th Annual Conference of the Association of Collegiate Schools of Planning, Minneapolis, MN, USA",
    links: [],
  },
  {
    id: "C10",
    kind: "conference",
    year: 2025,
    authors: "Lieu, S.J. and Akar, G.†",
    title: "No school bus, no problem? How students get to school without bus service",
    venue: "65th Annual Conference of the Association of Collegiate Schools of Planning, Minneapolis, MN, USA",
    links: [],
  },
  {
    id: "C9",
    kind: "conference",
    year: 2025,
    authors: "Park, S.†, Han, C., Lieu, S.J., and Akar, G.",
    title: "Influence of travel mode and heat sensitivity on streetscape preferences related to thermal comfort",
    venue: "65th Annual Conference of the Association of Collegiate Schools of Planning, Minneapolis, MN, USA",
    links: [],
  },
  {
    id: "C8",
    kind: "conference",
    year: 2025,
    authors: "Synn, S.H.†, Jones, B., Lieu, S.J., and Guhathakurta, S.",
    title: "Street-level transit accessibility: Integrating bus stop quality and transit user locations",
    venue: "65th Annual Conference of the Association of Collegiate Schools of Planning, Minneapolis, MN, USA",
    links: [],
  },
  {
    id: "C7",
    kind: "conference",
    year: 2025,
    authors: "Lieu, S.J., Lee, J., Jones, B., Synn, S.H., and Guhathakurta, S.",
    title:
      "How complete are your city’s streets? Evaluating the completeness of urban streets using big data and computer vision",
    venue: "19th International Conference on Computers in Urban Planning and Urban Management, London, United Kingdom",
    links: [],
  },
  {
    id: "C6",
    kind: "conference",
    year: 2025,
    authors: "Lieu, S.J. and Akar, G.",
    title: "Investigating mode choice behavior for first and last mile travel among rail users in Atlanta",
    venue: "104th Annual Meeting of the Transportation Research Board, Washington, DC, USA",
    links: [],
  },
  {
    id: "C5",
    kind: "conference",
    year: 2025,
    authors: "Lieu, S.J. and Guhathakurta, S.",
    title: "A novel approach for estimating sidewalk width from street view images and computer vision",
    venue: "2025 AI and the City: Understanding New Applications in Urban Environments, Bangalore, India",
    links: [],
  },
  {
    id: "C4",
    kind: "conference",
    year: 2024,
    authors: "Lieu, S.J., Han, C., and Guhathakurta, S.",
    title: "Aesthetic places and travel destination choices",
    venue: "64th Annual Conference of the Association of Collegiate Schools of Planning, Seattle, WA, USA",
    links: [],
  },
  {
    id: "C3",
    kind: "conference",
    year: 2023,
    authors: "Lieu, S.J. and Guhathakurta, S.",
    title: "Exploring pedestrian route choice preferences by demographic groups: Analysis of street attributes in Chicago",
    venue: "63rd Annual Conference of the Association of Collegiate Schools of Planning, Chicago, IL, USA",
    links: [],
  },
  {
    id: "C2",
    kind: "conference",
    year: 2023,
    authors: "Han, C.†, Lieu, S.J., and Guhathakurta, S.",
    title:
      "The interplay of aging populations and urban agglomeration: Assessing economic specialization and densification trends in U.S. cities",
    venue: "63rd Annual Conference of the Association of Collegiate Schools of Planning, Chicago, IL, USA",
    links: [],
  },
  {
    id: "C1",
    kind: "conference",
    year: 2023,
    authors: "Lieu, S.J., Hwang, U., and Guhathakurta, S.",
    title: "Measuring transit equity for on-demand transit services",
    venue: "2023 Association of American Geographers Annual Meeting, Denver, CO, USA",
    links: [],
  },
];
