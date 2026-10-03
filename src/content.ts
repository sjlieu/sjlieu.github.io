// Everything on the site comes from this file (sourced from CV_SeungJaeLieu_26.docx).
// Edit the text here; the components in src/ handle layout.

export type Link = { label: string; href: string };

export const profile = {
  name: "Seung Jae Lieu",
  // How your name appears in author lists; it is bolded in Publications.
  authorName: "Lieu, S.J.",
  // Shown under the name on the landing page.
  role: "Ph.D. Student · City and Regional Planning · Georgia Tech",
  // Put a square photo in public/ (e.g. public/profile.jpg) and set "/profile.jpg".
  // Empty shows a placeholder circle.
  photo: "/projects/Lieu_headshot.jpg",
  // Small quote shown above the name on the landing page.
  quote: {
    text: "First life, then spaces, then buildings – the other way around never works.",
    author: "Jan Gehl",
  },

  links: [
    { label: "Email", href: "mailto:slieu3@gatech.edu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lsj97/" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=heHaGWsAAAAJ&hl=en" },
    { label: "CV", href: "" }, // Add public/cv.pdf and set "/cv.pdf" to show this button.
  ] satisfies Link[],

  bio: [
    "I am a Ph.D. student in City and Regional Planning at the Georgia Institute of Technology, advised by Professors Subhrajit Guhathakurta and Gulsah Akar. My research develops data-driven approaches to understanding travel behavior and urban environments, with the goal of supporting more sustainable and equitable transportation systems.",
    "My work follows two connected strands. The first examines how people travel through and interact with urban environments, focusing on how the built environment shapes travel behavior, accessibility, and mobility. The second develops vision AI tools that convert spatial records of cities into planning evidence. Together, the two strands support planning decisions by connecting how urban environments are measured with how people experience and respond to them.",
  ],

  // Education shows only the end date (or "Present").
  education: [
    {
      title: "Ph.D., City and Regional Planning",
      org: "Georgia Institute of Technology",
      dates: "Aug 2023 - Present",
      note: "Advisors: Dr. Subhrajit Guhathakurta, Dr. Gulsah Akar",
    },
    {
      title: "M.S., Urban Analytics",
      org: "Georgia Institute of Technology",
      dates: "Aug 2024 - Present",
    },
    {
      title: "M.S., Civil and Environmental Engineering\nMaster of City and Regional Planning",
      org: "Georgia Institute of Technology",
      dates: "May 2023",
      note: "Advisors: Dr. Patricia Mokhtarian, Dr. Catherine Ross",
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
      dates: "Present",
      note: "Supervisor: Dr. Subhrajit Guhathakurta",
    },
    {
      title: "Graduate Research Assistant",
      org: "Resilient and Equitable Mobility Analytics and Planning Lab, Georgia Tech",
      href: "",
      dates: "Present",
      note: "Supervisor: Dr. Rounaq Basu",
    },
    {
      title: "Visiting Student",
      org: "Senseable City Lab, Massachusetts Institute of Technology",
      href: "https://senseable.mit.edu/",
      dates: "Feb 2026 – Aug 2026",
    },
    {
      title: "Data Analyst",
      org: "Atlanta Regional Commission",
      href: "https://atlantaregional.org/",
      dates: "May 2022 – Aug 2022",
    },
    {
      title: "Undergraduate Research Assistant",
      org: "Urban Design and Spatial Analytics Lab, Hanyang University",
      href: "https://junhwan89.cafe24.com/",
      dates: "Mar 2020 – May 2021",
    },
    {
      title: "Legislative Aide",
      org: "Seoul Metropolitan Council Transportation Committee",
      href: "https://www.smc.seoul.kr/foreign/index.do?lang=english/",
      dates: "Dec 2019 – Mar 2020",
    },
  ],
};

// ---------- Research projects ----------

// The filter buttons are built from the keywords used below, in this order.
export const KEYWORDS = [
  "Vision AI",
  "Computer Vision",
  "Vision Language Model",
  "Accessibility",
  "Micromobility",
  "Shared Mobility",
  "Walking",
  "Heat",
  "Travel Behavior",
  "Streetscape",
  "Equity",
  "Urban Design",
  "Human Mobility",
  "Urban Imagery",
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
  // Images are shown whole inside the 3:2 frame, with white filling any gap.
  // Set "cover" to fill the frame instead (the edges are cropped); good for photos.
  coverFit?: "contain" | "cover";
  // Color behind the image (default: white), e.g. "#070914" to match the site background
  // for images with a dark background.
  coverBackground?: string;
  keywords: Keyword[];
  details: ProjectDetail[];
  links: Link[];
};

// Order matters: the first six cards are shown; the rest open with the + button.
export const projects: Project[] = [
  {
    id: "routable-networks",
    title: "Boston Region Routable Mobility Networks",
    cover: "/projects/mobility-network.png",
    keywords: ["Vision AI", "Computer Vision", "Urban Imagery", "Walking"],
    details: [
      {
        text: "Developed a computer vision model that extracts the pedestrian network from aerial imagery, addressing occlusion from tree canopy and from shadows cast by buildings and trees.",
      },
      { text: "Released the code and data publicly for open use." },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/remap-research-group/routable-mobility-networks/tree/main/pedestrian_network",
      },
    ],
  },
  {
    id: "complete-streets",
    title: "Evaluating the Completeness of Urban Streets Using Big Data and AI",
    cover: "/projects/complete-streets.jpg",
    keywords: ["Vision AI", "Computer Vision", "Urban Imagery", "Streetscape", "Urban Design", "Walking", "Micromobility"],
    details: [
      {
        text: "Developed a framework that measures the attributes of diverse street elements, combined with a composite score that evaluates street completeness using AI and big data.",
        refs: ["W11", "C7", "C15"],
      },
      {
        text: "Developed a tool that estimates sidewalk width from street view imagery using computer vision.",
        refs: ["P7", "C5"],
      },
      {
        text: "Developed a framework that detects and classifies bike lane types from multimodal imagery.",
        refs: ["P8"],
      },
      {
        text: "Built a reinforcement learning agent that navigates street view imagery to locate and audit bus stop amenities.",
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
    id: "bikeshare-insights",
    title: "Behavioral Insights from City-wide Bikeshare Trip Data",
    cover: "/projects/bikeshare.jpg",
    coverFit: "cover",
    keywords: ["Micromobility", "Shared Mobility", "Travel Behavior", "Heat", "Equity", "Accessibility", "Streetscape"],
    details: [
      {
        text: "Compared how younger and older bikeshare users in Seoul trade off trip distance against streetscape quality and midblock conflicts with cars when choosing routes.",
        refs: ["P9"],
      },
      {
        text: "Examined whether extreme heat leads NYC bikeshare riders to switch from classic to electric bikes, and whether the built environment shapes that switch.",
        refs: ["W2"],
      },
      {
        text: "Measured how well bikeshare networks in five U.S. cities reach the destinations residents actually travel to, and whether coverage gaps are larger in socioeconomically disadvantaged neighborhoods.",
        refs: ["W3"],
      },
      {
        text: "Classified users by subscription commitment and observed frequency of use, and explored the characteristics of each group.",
      },
    ],
    links: [],
  },
  {
    id: "fifteen-minute-city",
    title: "Rethinking the 15-Minute City",
    cover: "/projects/15minute.jpg",
    coverFit: "cover",
    keywords: ["Accessibility", "Travel Behavior", "Walking", "Streetscape", "Urban Design", "Human Mobility"],
    details: [
      {
        text: "Examined why residents of neighborhoods with high accessibility to amenities still drive or travel beyond their local area, and introduced a “harmony of amenities” metric that captures how co-located destinations work together.",
        refs: ["P10", "C12"],
      },
    ],
    links: [],
  },
  {
    id: "open-walks",
    title: "Open Walks",
    cover: "/projects/open-walks.jpg",
    coverFit: "cover",
    keywords: ["Vision AI", "Vision Language Model", "Urban Imagery", "Walking", "Accessibility"],
    details: [
      {
        text: "Developed a tool that uses vision AI to capture sidewalk attributes (e.g., width, slope, surface material) at a global scale from crowdsourced video.",
        refs: ["W1"],
      },
      {
        text: "Quantified the uncertainty of vision language models in assessing sidewalk attributes using conformal prediction.",
        refs: ["W9"],
      },
    ],
    links: [{ label: "Application", href: "https://openwalks.netlify.app/" }],
  },
  {
    id: "mllm-streetscapes",
    title: "Beyond Computer Vision: Measuring Streetscapes with Multimodal LLMs",
    cover: "/projects/llm.jpg",
    coverFit: "cover",
    keywords: ["Vision AI", "Vision Language Model", "Computer Vision", "Urban Imagery", "Streetscape", "Urban Design", "Equity"],
    details: [
      {
        text: "Tested whether MLLMs can capture how streetscape elements are spatially arranged, and whether that arrangement explains perceived safety beyond what computer vision measures.",
        refs: ["W8", "C16"],
      },
      {
        text: "Examined whether quantity-based streetscape metrics systematically misjudge street conditions by neighborhood socioeconomic status, and whether quality features derived from MLLMs reduce that bias.",
        refs: ["W6"],
      },
    ],
    links: [],
  },
  {
    id: "e-scooter-heat",
    title: "Travel Behavior of Shared E-scooter Users",
    cover: "/projects/e-scooter.jpg",
    coverFit: "cover",
    keywords: ["Micromobility", "Shared Mobility", "Travel Behavior", "Heat"],
    details: [
      { text: "Examined how e-scooter users changed their travel behavior under extreme heat." },
      {
        text: "Explored how e-scooter users choose among fare modes (Eco, Standard, and Turbo) when paying more buys a higher top speed.",
      },
    ],
    links: [],
  },
  {
    id: "social-homogeneity",
    title: "Birds of a Feather in Travel",
    cover: "/projects/birds-feather.jpg",
    coverFit: "cover",
    keywords: ["Accessibility", "Equity", "Human Mobility", "Travel Behavior"],
    details: [
      {
        text: "Introduced accessibility uncertainty (the variance in how far residents of the same neighborhood travel for the same type of amenity) and examined how the built environment and social homogeneity shape it.",
        refs: ["W7"],
      },
    ],
    links: [],
  },
  {
    id: "pedestrian-route-choice",
    title: "Street Design and Pedestrian Route Choice",
    cover: "/projects/pedestrian.jpg",
    coverFit: "cover",
    keywords: ["Walking", "Travel Behavior", "Streetscape", "Vision AI", "Computer Vision", "Urban Imagery"],
    details: [
      {
        text: "Examined how far pedestrians are willing to detour to seek out or avoid street attributes, and how these preferences differ by gender, age, and income.",
        refs: ["P3", "C3"],
      },
    ],
    links: [],
  },
  {
    id: "school-travel",
    title: "School Transportation Without the School Bus",
    cover: "/projects/school-bus.jpg",
    coverFit: "cover",
    keywords: ["Walking", "Travel Behavior", "Equity", "Accessibility"],
    details: [
      {
        text: "Examined how children get to school when state policy makes them ineligible for state-funded bus service, and whether socially vulnerable communities bear more of that burden.",
        refs: ["W10", "C10"],
      },
    ],
    links: [],
  },
  {
    id: "odmts-equity",
    title: "Transit Equity Implications of an On-Demand Multimodal Transit System",
    cover: "/projects/transit-equity.jpg",
    coverFit: "cover",
    keywords: ["Equity", "Accessibility", "Shared Mobility"],
    details: [
      {
        text: "Measured the impact of an On-Demand Multimodal Transit System (ODMTS) on transit equity and equality by comparing it with Atlanta’s existing public transit system.",
        refs: ["P2", "C1"],
      },
      { text: "Built an online dashboard showing which neighborhoods benefit from ODMTS." },
    ],
    links: [{ label: "Dashboard", href: "https://geospatial.gatech.edu/transit-equity/" }],
  },
  {
    id: "home-park-studio",
    title: "Home Park Planning Studio",
    cover: "/projects/planning-studio.jpg",
    keywords: ["Urban Design"],
    details: [
      {
        text: "Contributed data analysis, documentation, visualization, and presentations to a cross-disciplinary, community-engaged process that recommended actions to reimagine neighborhood value.",
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

  // Working papers: not listed on the site. Project cards that cite them show
  // "Paper under review" (Revision / Under review) or "Manuscript in preparation".
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
