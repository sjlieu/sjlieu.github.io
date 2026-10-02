import type { ReactNode } from "react";

import { news, profile, projects, publications } from "./content";
import { ConstellationField } from "./shaders/constellation-field/ConstellationField";
import "./shaders/threeui.css";

const YEAR = new Date().getFullYear();

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={className}
      {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

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

function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((author, i) => (
        <span key={author}>
          {author === profile.authorName ? <strong>{author}</strong> : author}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
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
          <div className="hero-photo">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <span aria-hidden="true">{initials(profile.name)}</span>
            )}
          </div>
          <p className="eyebrow">
            {profile.role} · {profile.affiliation}
          </p>
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <ul className="link-row">
            {links.map((link) => (
              <li key={link.label}>
                <ExternalLink href={link.href} className="pill">
                  {link.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <Section id="about" label="About">
          <div className="about-grid">
            <div className="prose">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="tags" aria-label="Research interests">
                {profile.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
            <aside>
              <h3 className="sub-label">Education</h3>
              <ol className="timeline">
                {profile.education.map((item) => (
                  <li key={item.degree + item.years}>
                    <span className="timeline-title">{item.degree}</span>
                    <span className="muted">{item.school}</span>
                    <span className="faint">{item.years}</span>
                  </li>
                ))}
              </ol>
              <h3 className="sub-label">Affiliation</h3>
              <p className="muted small">
                {profile.department}
                <br />
                {profile.affiliation}
                <br />
                {profile.location}
              </p>
            </aside>
          </div>
        </Section>

        <Section id="news" label="News">
          <ul className="news">
            {news.map((item) => (
              <li key={item.date + item.text}>
                <span className="news-date">{item.date}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="publications" label="Publications">
          <ol className="pubs">
            {publications.map((pub) => {
              const pubLinks = (pub.links ?? []).filter((link) => link.href);
              return (
                <li key={pub.title}>
                  <p className="pub-title">{pub.title}</p>
                  <p className="muted small">
                    <Authors authors={pub.authors} />
                  </p>
                  <p className="pub-meta">
                    <span>
                      <em>{pub.venue}</em>, {pub.year}
                    </span>
                    {pub.status ? <span className="badge">{pub.status}</span> : null}
                    {pubLinks.map((link) => (
                      <ExternalLink key={link.label} href={link.href} className="text-link">
                        {link.label}
                      </ExternalLink>
                    ))}
                  </p>
                </li>
              );
            })}
          </ol>
        </Section>

        <Section id="projects" label="Projects & Data">
          <ul className="projects">
            {projects.map((project) => (
              <li key={project.href}>
                <ExternalLink href={project.href} className="project">
                  <span className="project-title">
                    {project.title} <span aria-hidden="true">↗</span>
                  </span>
                  <span className="muted small">{project.description}</span>
                  <span className="project-tags">{project.tags.join(" · ")}</span>
                </ExternalLink>
              </li>
            ))}
          </ul>
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
