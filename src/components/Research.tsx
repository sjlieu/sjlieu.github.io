import { useRef, useState, type MouseEvent } from "react";

import { KEYWORDS, projects, type Keyword, type Project } from "../content";
import { Cover } from "./Cover";
import { PublicationRef } from "./Publications";

function ProjectCard({ project, onKeyword }: { project: Project; onKeyword: (keyword: Keyword) => void }) {
  const [flipped, setFlipped] = useState(false);
  const frontButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);

  const flip = (next: boolean) => {
    setFlipped(next);
    // Keep keyboard focus on the side that is now showing.
    requestAnimationFrame(() => (next ? backButton : frontButton).current?.focus({ preventScroll: true }));
  };

  // Clicking anywhere on a face flips it, except on its own links and buttons.
  const onFaceClick = (next: boolean) => (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    flip(next);
  };

  return (
    <li className={`card${flipped ? " is-flipped" : ""}`}>
      <div className="card-inner">
        <div className="face front" onClick={onFaceClick(true)} inert={flipped}>
          <Cover project={project} />
          <div className="front-body">
            <h3 className="card-title">{project.title}</h3>
            {project.publications.length ? (
              <div className="pub-refs" aria-label="Related publications">
                {project.publications.map((id) => (
                  <PublicationRef key={id} id={id} />
                ))}
              </div>
            ) : null}
            <button
              ref={frontButton}
              type="button"
              className="flip-button"
              onClick={() => flip(true)}
              aria-label={`Show details: ${project.title}`}
            >
              Details <span aria-hidden="true">↻</span>
            </button>
          </div>
        </div>

        <div className="face back" onClick={onFaceClick(false)} inert={!flipped}>
          <div className="back-scroll">
            <p className="back-dates">{project.dates}</p>
            <h3 className="back-title">{project.title}</h3>
            {project.people.map((line) => (
              <p key={line} className="back-people">
                {line}
              </p>
            ))}
            <ul className="back-details">
              {project.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {project.links.length ? (
              <div className="back-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : null}
            <div className="back-tags">
              {project.keywords.map((keyword) => (
                <button key={keyword} type="button" onClick={() => onKeyword(keyword)}>
                  {keyword}
                </button>
              ))}
            </div>
          </div>
          <button
            ref={backButton}
            type="button"
            className="flip-button back-button"
            onClick={() => flip(false)}
            aria-label={`Back to cover: ${project.title}`}
          >
            <span aria-hidden="true">↺</span> Back
          </button>
        </div>
      </div>
    </li>
  );
}

export function Research() {
  const [filter, setFilter] = useState<Keyword | null>(null);
  const keywords = KEYWORDS.filter((keyword) => projects.some((p) => p.keywords.includes(keyword)));
  const visible = filter ? projects.filter((p) => p.keywords.includes(filter)) : projects;

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by keyword">
        <button type="button" aria-pressed={filter === null} onClick={() => setFilter(null)}>
          All <span className="count">{projects.length}</span>
        </button>
        {keywords.map((keyword) => (
          <button
            key={keyword}
            type="button"
            aria-pressed={filter === keyword}
            onClick={() => setFilter(filter === keyword ? null : keyword)}
          >
            {keyword} <span className="count">{projects.filter((p) => p.keywords.includes(keyword)).length}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {filter ? `Showing ${visible.length} ${filter} projects` : `Showing all ${projects.length} projects`}
      </p>
      <ul className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onKeyword={setFilter} />
        ))}
      </ul>
    </>
  );
}
