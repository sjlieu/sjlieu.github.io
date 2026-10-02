import type { MouseEvent } from "react";

import { profile, publications, type Publication, type PublicationKind } from "../content";

const GROUPS: { kind: PublicationKind; title: string; legend?: string; collapsed?: boolean }[] = [
  { kind: "journal", title: "Peer-Reviewed Papers" },
  { kind: "working", title: "Working Papers" },
  { kind: "report", title: "Reports" },
  { kind: "conference", title: "Conference Presentations", legend: "† Presented by co-author", collapsed: true },
];

const byId = new Map(publications.map((pub) => [pub.id, pub]));

/** Link to an entry in the list; opens the collapsed conference group first if needed. */
export function PublicationRef({ id }: { id: string }) {
  const pub = byId.get(id);
  const reveal = (event: MouseEvent) => {
    event.stopPropagation();
    const details = document.getElementById(`pub-${id}`)?.closest("details");
    if (details && !details.open) details.open = true;
  };
  return (
    <a href={`#pub-${id}`} className="pub-ref" title={pub?.title} onClick={reveal}>
      {id}
    </a>
  );
}

function Authors({ text }: { text: string }) {
  const parts = text.split(profile.authorName);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? <strong>{profile.authorName}</strong> : null}
        </span>
      ))}
    </>
  );
}

function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <li id={`pub-${pub.id}`} className="pub">
      <span className="pub-id">{pub.id}</span>
      <div className="pub-body">
        <p className="pub-title">{pub.title}</p>
        <p className="pub-authors">
          <Authors text={pub.authors} />
        </p>
        <p className="pub-meta">
          <span>
            {pub.status ? <span className="pub-status">{pub.status}</span> : null}
            {pub.venue ? <em>{pub.venue}</em> : null}
            {pub.status || pub.venue ? " · " : ""}
            {pub.year}
          </span>
          {pub.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="pub-link">
              {link.label} ↗
            </a>
          ))}
        </p>
      </div>
    </li>
  );
}

export function Publications() {
  return (
    <>
      <p className="legend">† Corresponding author · * Equal contribution</p>
      {GROUPS.map((group) => {
        const items = publications.filter((pub) => pub.kind === group.kind);
        if (!items.length) return null;
        const list = (
          <>
            {group.legend ? <p className="legend">{group.legend}</p> : null}
            <ol className="pubs">
              {items.map((pub) => (
                <PublicationItem key={pub.id} pub={pub} />
              ))}
            </ol>
          </>
        );
        return group.collapsed ? (
          <details key={group.kind} className="pub-group">
            <summary>
              <h3 className="sub-label">{group.title}</h3>
            </summary>
            {list}
          </details>
        ) : (
          <div key={group.kind} className="pub-group">
            <h3 className="sub-label">{group.title}</h3>
            {list}
          </div>
        );
      })}
    </>
  );
}
