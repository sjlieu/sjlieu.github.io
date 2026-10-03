import { useRef, useState, type MouseEvent } from "react";

import { KEYWORDS, projects, type Keyword, type Project } from "../content";
import { Cover } from "./Cover";
import { PublicationRef } from "./Publications";

// Keywords always show in alphabetical order, wherever they appear.
function sortKeywords(keywords: readonly Keyword[]) {
  return [...keywords].sort((a, b) => a.localeCompare(b));
}

function ProjectCard({ project, onKeyword }: { project: Project; onKeyword: (keyword: Keyword) => void }) {
  const [flipped, setFlipped] = useState(false);
  const frontButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);

  const flip = (next: boolean) => {
    setFlipped(next);
    // Keep keyboard focus on the side that is now showing.
    requestAnimationFrame(() => (next ? backButton : frontButton).current?.focus({ preventScroll: true }));
  };

  // Clicking anywhere on the back flips it over, except on its own links and buttons.
  const onBackClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    flip(false);
  };

  return (
    <li className={`card${flipped ? " is-flipped" : ""}`}>
      <div className="card-inner">
        {/* The cover side is one big button: just the image and the title. */}
        <button
          ref={frontButton}
          type="button"
          className="face front"
          onClick={() => flip(true)}
          inert={flipped}
          aria-label={`${project.title}, show details`}
        >
          <Cover project={project} />
          <span className="front-body">
            <span className="card-title">{project.title}</span>
          </span>
          <span className="flip-hint" aria-hidden="true">
            ↻ Details
          </span>
        </button>

        <div className="face back" onClick={onBackClick} inert={!flipped}>
          <div className="back-scroll">
            <h3 className="back-title">{project.title}</h3>
            <ul className="back-details">
              {project.details.map((detail) => (
                <li key={detail.text}>
                  {detail.text}
                  {detail.refs?.length ? (
                    <span className="pub-refs">
                      {detail.refs.map((id) => (
                        <PublicationRef key={id} id={id} />
                      ))}
                    </span>
                  ) : null}
                </li>
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
              {sortKeywords(project.keywords).map((keyword) => (
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

// At most this many cards show at once; the rest open with the + button.
const INITIAL_COUNT = 6;

export function Research() {
  const [filter, setFilterState] = useState<Keyword | null>(null);
  const [expanded, setExpanded] = useState(false);
  const keywords = sortKeywords(KEYWORDS.filter((keyword) => projects.some((p) => p.keywords.includes(keyword))));
  const matching = filter ? projects.filter((p) => p.keywords.includes(filter)) : projects;
  const hiddenCount = Math.max(0, matching.length - INITIAL_COUNT);
  const shown = expanded ? matching : matching.slice(0, INITIAL_COUNT);

  // A new filter starts collapsed again.
  const setFilter = (next: Keyword | null) => {
    setFilterState(next);
    setExpanded(false);
  };

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
        {`Showing ${shown.length} of ${matching.length} ${filter ?? ""} projects`}
      </p>
      <ul id="project-grid" className="project-grid">
        {shown.map((project) => (
          <ProjectCard key={project.id} project={project} onKeyword={setFilter} />
        ))}
      </ul>
      {hiddenCount ? (
        <div className="more-row">
          <button
            type="button"
            className="more-button"
            aria-expanded={expanded}
            aria-controls="project-grid"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="more-icon" aria-hidden="true">
              {expanded ? "−" : "+"}
            </span>
            {expanded ? "Show fewer projects" : `${hiddenCount} more project${hiddenCount > 1 ? "s" : ""}`}
          </button>
        </div>
      ) : null}
    </>
  );
}
