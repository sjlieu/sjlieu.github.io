import { profile, publications, type Publication, type PublicationKind } from "../content";

const byId = new Map(publications.map((pub) => [pub.id, pub]));

// Working papers are not listed on the site; a card shows their status instead of an id.
function pendingLabel(pub: Publication) {
  return pub.status === "Working manuscript" ? "Manuscript in preparation" : "Paper under review";
}

/** A project card's reference: links to a listed paper or talk, or shows a working paper's status. */
export function PublicationRef({ id }: { id: string }) {
  const pub = byId.get(id);
  if (pub?.kind === "working") {
    return (
      <span className="pub-pending" title={pub.title}>
        {pendingLabel(pub)}
      </span>
    );
  }
  return (
    <a href={`#pub-${id}`} className="pub-ref" title={pub?.title}>
      {id}
    </a>
  );
}

// Author marks († corresponding / presented by co-author, * equal contribution) as small superscripts.
function withMarks(text: string, key: string) {
  return text.split(/(\s*[*†](?:\s*[*†])*)/).map((chunk, i) =>
    /[*†]/.test(chunk) ? (
      <sup key={`${key}-${i}`} className="author-mark">
        {chunk.replace(/\s+/g, "")}
      </sup>
    ) : (
      chunk
    ),
  );
}

function Authors({ text }: { text: string }) {
  const parts = text.split(profile.authorName);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {withMarks(part, String(i))}
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

function PublicationList({ kind }: { kind: PublicationKind }) {
  return (
    <ol className="pubs">
      {publications
        .filter((pub) => pub.kind === kind)
        .map((pub) => (
          <PublicationItem key={pub.id} pub={pub} />
        ))}
    </ol>
  );
}

export function Publications() {
  return (
    <>
      <p className="legend">
        <sup className="author-mark">†</sup> Corresponding author
      </p>
      <div className="pub-group">
        <h3 className="sub-label">Peer-Reviewed Papers</h3>
        <PublicationList kind="journal" />
      </div>
      <div className="pub-group">
        <h3 className="sub-label">Reports</h3>
        <PublicationList kind="report" />
      </div>
    </>
  );
}

export function Conferences() {
  return (
    <>
      <p className="legend">
        <sup className="author-mark">†</sup> Presented by co-author
      </p>
      <PublicationList kind="conference" />
    </>
  );
}
