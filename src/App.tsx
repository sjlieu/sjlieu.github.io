import type { ReactNode } from "react";

import { LinkIcon, PersonPlaceholder } from "./components/Icons";
import { Publications } from "./components/Publications";
import { Research } from "./components/Research";
import { profile } from "./content";
import { ConstellationField } from "./shaders/constellation-field/ConstellationField";
import "./shaders/threeui.css";

const YEAR = new Date().getFullYear();

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
];

type TimelineItem = { title: string; org: string; href?: string; dates: string; note?: string };

function Section({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="panel" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="section-label">
        {label}
      </h2>
      {children}
    </section>
  );
}

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="sub-label">{title}</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.title + item.org + item.dates}>
            <div className="timeline-head">
              <span className="timeline-title">{item.title}</span>
              <span className="timeline-dates">{item.dates}</span>
            </div>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer" className="timeline-org">
                {item.org} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="muted">{item.org}</span>
            )}
            {item.note ? <span className="faint">{item.note}</span> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function App() {
  const links = profile.links.filter((link) => link.href);

  return (
    <>
      <header className="nav">
        <a href="#top" className="nav-brand">
          <span className="nav-dot" aria-hidden="true" />
          {profile.name}
        </a>
        <nav aria-label="Sections">
          {SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="page">
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">{profile.eyebrow}</p>
            <h1>{profile.name}</h1>
            <p className="tagline">{profile.tagline}</p>
            <ul className="link-row">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="pill"
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <LinkIcon label={link.label} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-photo">
            {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <PersonPlaceholder />}
          </div>
        </section>

        <Section id="about" label="About">
          <div className="prose bio">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="cv-grid">
            <Timeline title="Education" items={profile.education} />
            <Timeline title="Research Experience" items={profile.researchExperience} />
          </div>
        </Section>

        <Section id="research" label="Research Projects">
          <Research />
        </Section>

        <Section id="publications" label="Publications">
          <Publications />
        </Section>

        <footer className="footer">
          © {YEAR} {profile.name}
        </footer>
      </main>

      {/* Rendered last so it is the final tab stop; CSS pins it behind the page. */}
      <div className="shader-frame">
        <ConstellationField
          mode="dark"
          speed={1.0}
          size={1.0}
          strokeWidth={1.0}
          length={1.0}
          density={1.0}
          opacity={1.0}
          hue={0}
          saturation={1.0}
          brightness={1.0}
        />
      </div>
    </>
  );
}
