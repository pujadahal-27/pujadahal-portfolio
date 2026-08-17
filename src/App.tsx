"use client";

import { useEffect, useState } from "react";
import { portfolio } from "./portfolio-content";

const cases = portfolio.cases;
type CaseKey = keyof typeof cases;
type CursorKey = "moon" | "flower" | "leaf" | "acorn" | "cat" | "cloud" | "firefly" | "moth" | "tea" | "bird";

const cursorOptions: { id: CursorKey; name: string; mark: string }[] = [
  { id: "moon", name: "Moonlit Crescent", mark: "☾" },
  { id: "flower", name: "Wildflower", mark: "✿" },
  { id: "leaf", name: "Forest Leaf", mark: "❧" },
  { id: "acorn", name: "Pocket Acorn", mark: "♧" },
  { id: "cat", name: "Little Cat", mark: "⌁" },
  { id: "cloud", name: "Rain Cloud", mark: "☁" },
  { id: "firefly", name: "Golden Firefly", mark: "✧" },
  { id: "moth", name: "Night Moth", mark: "⋈" },
  { id: "tea", name: "Tea Steam", mark: "♨" },
  { id: "bird", name: "Paper Bird", mark: "⌁" },
];

function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 88 88" fill="none" aria-hidden="true">
      <path d="M44 5c1 24 8 32 35 38-26 5-34 13-35 39-2-26-10-34-36-39 26-5 34-13 36-38Z" />
      <path d="M70 8c0 8 3 11 11 13-8 1-11 4-11 12-1-8-4-11-12-12 8-2 11-5 12-13Z" />
    </svg>
  );
}

function Moon({ className = "" }: { className?: string }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M69 84C37 92 14 62 28 33 35 19 48 13 60 14 43 27 40 47 49 61c9 14 25 19 40 14-5 4-12 8-20 9Z" />
      <path d="m77 23 2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z" />
    </svg>
  );
}

function Cat({ className = "" }: { className?: string }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 150 105" fill="none" aria-hidden="true">
      <path d="M31 51 24 20l28 16c14-8 31-8 45 0l29-16-8 32c9 27-13 48-43 48S22 78 31 51Z" />
      <path d="M54 60c4-3 9-3 13 0m15 0c4-3 9-3 13 0M72 70l4 3 4-3m-4 3v7m-9 0c6 5 13 5 19 0M45 70l-28-5m28 13-29 5m94-13 27-5m-27 13 28 5" />
    </svg>
  );
}

function CursorArtwork({ kind, preview = false }: { kind: CursorKey; preview?: boolean }) {
  const className = `cursor-art cursor-art-${kind}${preview ? " is-preview" : ""}`;

  if (kind === "moon") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-glow" d="M50 58C27 64 10 44 18 24 23 12 34 8 44 10 32 18 28 31 34 42 39 51 49 55 58 51c-2 3-5 5-8 7Z" />
      <path className="art-cloud" d="M13 51c2-6 9-7 12-3 3-5 12-3 12 4 5 0 7 3 6 6H12c-2-2-1-5 1-7Z" />
      <path className="art-star" d="m54 15 1.5 5 5 1.5-5 1.5-1.5 5-1.5-5-5-1.5 5-1.5 1.5-5Z" />
      <circle className="art-star" cx="62" cy="34" r="1.5" />
    </svg>
  );
  if (kind === "flower") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-stem" d="M37 40c-1 10 2 18-2 25M36 54c-8-7-14-5-17-2 5 7 12 8 17 2Zm1 4c6-7 12-6 15-3-4 6-10 7-15 3Z" />
      <path className="art-petal" d="M36 34C22 33 20 21 27 17c6-3 10 5 9 17Zm0 0c-3-14 8-20 14-14 5 5-1 11-14 14Zm0 0c14-3 20 8 14 14-5 5-11-1-14-14Zm0 0c3 14-8 20-14 14-5-5 1-11 14-14Z" />
      <circle className="art-gold" cx="36" cy="34" r="5" />
    </svg>
  );
  if (kind === "leaf") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-leaf" d="M14 52C16 29 31 14 57 13c0 25-14 42-37 43" />
      <path className="art-ink" d="M19 58c9-16 20-27 34-39M31 43l-1-14m9 5 12 1" />
      <circle className="art-berry" cx="56" cy="52" r="5" /><circle className="art-berry" cx="63" cy="45" r="4" />
    </svg>
  );
  if (kind === "acorn") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-stem" d="M39 18c1-8 8-11 13-10" />
      <path className="art-acorn" d="M24 31c-4 12 3 28 17 32 13-8 16-25 8-34Z" />
      <path className="art-cap" d="M20 32c1-12 9-18 19-18 11 0 18 7 18 18-12-3-24-3-37 0Z" />
      <path className="art-ink" d="m28 22 5 7m5-11 4 10m6-7 2 8" />
    </svg>
  );
  if (kind === "cat") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-cat" d="M18 34 16 15l17 10c6-2 11-2 17 0l9-11 1 21c6 14-5 28-21 28-17 0-27-15-21-29Z" />
      <path className="art-ink" d="M27 39c2-2 5-2 7 0m10 0c2-2 5-2 7 0m-14 9 3 2 3-2m-3 2v4m-7 0c4 3 10 3 14 0M25 48 8 44m17 10L8 56m47-8 12-4m-12 10 12 2" />
    </svg>
  );
  if (kind === "cloud") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-cloud-big" d="M17 43c-8-1-8-12 0-14 1-10 15-14 21-6 8-7 21-1 19 10 9 2 8 13 0 14H18" />
      <path className="art-rain" d="m24 53-3 7m16-7-3 8m17-8-3 7" />
      <path className="art-star" d="m57 12 1 4 4 1-4 1-1 4-1-4-4-1 4-1 1-4Z" />
    </svg>
  );
  if (kind === "firefly") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <circle className="art-halo" cx="37" cy="39" r="22" />
      <path className="art-wing" d="M34 34C24 18 12 25 18 36c4 6 10 6 16 3m6-5c9-16 22-8 17 3-3 6-10 6-17 2" />
      <path className="art-ink" d="M35 29c-5 11-3 22 2 28 6-7 7-18 2-28m-3-1-5-7m8 7 6-7" />
      <circle className="art-gold" cx="37" cy="47" r="7" />
    </svg>
  );
  if (kind === "moth") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-moth-wing" d="M34 31C20 12 8 21 14 37c3 9 12 12 21 8m3-14c14-19 26-10 20 6-3 9-12 12-21 8" />
      <path className="art-ink" d="M35 27c-3 12-2 25 2 33 4-8 5-21 1-33m-3-1-6-8m9 8 7-8" />
      <circle className="art-eye" cx="24" cy="33" r="4" /><circle className="art-eye" cx="48" cy="33" r="4" />
    </svg>
  );
  if (kind === "tea") return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-steam" d="M29 25c-6-7 5-8 0-16m12 16c7-7-4-9 2-17" />
      <path className="art-cup" d="M18 30h36v12c0 13-7 20-18 20S18 55 18 42V30Z" />
      <path className="art-ink" d="M54 35h5c9 1 8 14-3 14h-3M20 35h32" />
      <path className="art-heart" d="M36 50c-7-4-8-10-3-11 2 0 3 1 4 3 1-2 3-3 5-3 4 2 2 7-6 11Z" />
    </svg>
  );
  return (
    <svg className={className} viewBox="0 0 72 72" aria-hidden="true">
      <path className="art-bird" d="M8 36 60 14 47 59 34 43 21 53l3-18Z" />
      <path className="art-ink" d="m24 35 36-21-26 29m0 0-13 10" />
      <path className="art-tail" d="m47 59 1-18 12-27" />
    </svg>
  );
}

export default function Home() {
  const [quickScan, setQuickScan] = useState(false);
  const [activeCase, setActiveCase] = useState<CaseKey | null>(null);
  const [progress, setProgress] = useState(0);
  const [cursorStyle, setCursorStyle] = useState<CursorKey>("moon");
  const [cursorStudio, setCursorStudio] = useState(false);
  const [cursorNotice, setCursorNotice] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("puja-cursor-v3") as CursorKey | null;
    if (saved && cursorOptions.some((option) => option.id === saved)) {
      setCursorStyle(saved);
      setCursorStudio(false);
    }
  }, []);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".site");
    const cursor = document.querySelector<HTMLElement>(".reading-cursor");
    if (!root || !cursor) return;

    const move = (event: PointerEvent) => {
      const radius = cursor.offsetWidth / 2;
      cursor.style.transform = `translate3d(${event.clientX - radius}px, ${event.clientY - radius}px, 0)`;
      cursor.classList.add("is-visible");
      const target = event.target as HTMLElement;
      cursor.classList.toggle("is-active", Boolean(target.closest("a, button")));
    };
    const enter = () => cursor.classList.add("is-visible");
    const leave = () => cursor.classList.remove("is-visible");
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerenter", enter);
    root.addEventListener("pointerleave", leave);
    return () => {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerenter", enter);
      root.removeEventListener("pointerleave", leave);
    };
  }, []);

  const chooseCursor = (style: CursorKey) => {
    setCursorStyle(style);
    window.localStorage.setItem("puja-cursor-v3", style);
    setCursorStudio(false);
    const selected = cursorOptions.find((option) => option.id === style)?.name ?? "Cursor";
    setCursorNotice(`${selected} selected`);
    window.setTimeout(() => setCursorNotice(""), 1800);
  };
  
  return (
    <main className="site">
      <div className="reading-cursor" data-cursor={cursorStyle} aria-hidden="true">
  <img
    src="/crow-cursor.webp"
    alt=""
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
      pointerEvents: "none",
    }}
  />
</div>
      <div className="progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />

      
      
      <header className="nav-shell">
        <a className="wordmark" href="#top">{portfolio.name}<span>✦</span></a>
        <nav aria-label="Portfolio navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#proof">Proof</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="scan-link" onClick={() => setQuickScan(true)}>30-second version ↗</button>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">{portfolio.hero.eyebrow}</p>
          <h1>{portfolio.hero.titleStart} <em>{portfolio.hero.titleEmphasis}</em></h1>
          <p className="hero-dek">{portfolio.hero.description}</p>
          <p className="nature-line" aria-label="Curious, observant and people-centred">
            {portfolio.hero.qualities.map((quality, index) => <span key={quality}>{index > 0 && <i>·</i>}{quality}</span>)}
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">Read the work <span>↓</span></a>
            <a className="text-link" href="#about">A letter from me →</a>
          </div>
        </div>

        <figure className="hero-portrait">
          <img src={portfolio.hero.photo} alt={portfolio.hero.photoAlt} />
          <figcaption><span>{portfolio.location}</span><span>{portfolio.hero.photoNote}</span></figcaption>
        </figure>

        <Star className="hero-star" />
        <p className="hero-side-note">{portfolio.hero.sideNote}</p>
      </section>

      <div className="proof-strip" aria-label="Highlights">
        <span>{portfolio.highlights.education}</span>
        <a href={portfolio.highlights.profileLink} target="_blank" rel="noreferrer">{portfolio.highlights.profileLabel}</a>
        <span>{portfolio.highlights.location}</span>
      </div>

      <section id="about" className="about section-wrap">
        <figure className="about-photo">
          <img src={portfolio.about.photo} alt={portfolio.about.photoAlt} />
          <figcaption>{portfolio.about.photoCaption}</figcaption>
          <Moon className="about-moon" />
        </figure>

        <article className="about-copy">
          <p className="section-kicker">A letter from me · 01</p>
          <h2>{portfolio.about.heading}</h2>
          <div className="about-text">
            {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="signature">{portfolio.about.signature}</p>
        </article>
      </section>

      <section id="work" className="work section-wrap">
        <header className="section-heading">
          <div>
            <p className="section-kicker">Selected work · 02</p>
            <h2>Selected published work.</h2>
          </div>
          <p>{portfolio.workIntro}</p>
        </header>

        <div className="project-list">
          {(Object.keys(cases) as CaseKey[]).map((key) => {
            const item = cases[key];
            return (
              <article className="project" key={key}>
                <div className="project-index">{item.number}</div>
                <div className="project-main">
                  <span>{item.kind}</span>
                  <h3>{item.title}</h3>
                  <p>{item.teaser}</p>
                </div>
                <div className="project-meta">
                  <p>{item.outcome}</p>
                  <div>
                    <a href={item.link} target="_blank" rel="noreferrer">Read live ↗</a>
                    <button onClick={() => setActiveCase(key)}>My role + context</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="proof" className="proof section-wrap">
        <div className="quote-block">
          <p className="section-kicker">Proof beyond a byline · 03</p>
          <blockquote>{portfolio.testimonial.quote}</blockquote>
          <div className="quote-meta">
            <p>{portfolio.testimonial.source}</p>
            <a href={portfolio.testimonial.link} target="_blank" rel="noreferrer">Read the original review ↗</a>
          </div>
        </div>

        <div className="strengths">
          {portfolio.strengths.map((strength) => <article key={strength.number}><span>{strength.number}</span><h3>{strength.title}</h3><p>{strength.text}</p></article>)}
        </div>
      </section>

      <section className="method section-wrap">
        <p className="section-kicker">How I work · 04</p>
        <h2>Listen. Understand.<br /><em>Make it clear.</em></h2>
        <div className="method-grid">
          {portfolio.method.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-inner">
          <p className="section-kicker">Get in touch · 05</p>
          <h2>{portfolio.contact.heading}</h2>
          <p>{portfolio.contact.description}</p>
          <div className="contact-email">
            <span className="mail-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="7" width="24" height="18" rx="1" /><path d="m5 9 11 9L27 9" /></svg>
            </span>
            <span className="contact-label">Email</span>
            <a href={`mailto:${portfolio.email}`}>{portfolio.email} ↗</a>
          </div>
          <div className="contact-foot">
            <span>{portfolio.location}</span>
          <a href="/Puja_Dahal_CV.pdf" download>Download CV ↓</a>
          </div>
        </div>
        <Cat className="contact-cat" />
      </section>

      <footer>
        <b>{portfolio.name}</b>
        <span>{portfolio.roleLine}</span>
        <a href="#top">Back to the beginning ↑</a>
      </footer>

      {quickScan && (
        <div className="overlay" onMouseDown={() => setQuickScan(false)}>
          <article className="modal" role="dialog" aria-modal="true" aria-labelledby="quick-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setQuickScan(false)}>Close ×</button>
           <span className="modal-label">The 30-second version</span>

<h2 id="quick-title">{portfolio.quickScan.heading}</h2>

<p className="quick-intro">
  The short version, if you are deciding whether to keep scrolling.
</p>

<div className="quick-cards">
  {portfolio.quickScan.items.map(([term, detail], index) => (
    <div className={`quick-card quick-card-${index + 1}`} key={term}>
      <span className="quick-card-number">0{index + 1}</span>
      <span className="quick-card-label">{term}</span>
      <p>{detail}</p>
    </div>
  ))}
</div>

<div className="modal-actions">
  <a href="#work" onClick={() => setQuickScan(false)}>
    See selected work ↓
  </a>
  <a href={`mailto:${portfolio.email}`}>Email Puja ↗</a>
</div>
          </article>
        </div>
      )}

      {activeCase && (
        <div className="overlay" onMouseDown={() => setActiveCase(null)}>
          <article className="modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveCase(null)}>Close ×</button>
            <span className="modal-label">{cases[activeCase].kind}</span>
            <h2 id="case-title">{cases[activeCase].title}</h2>
            <dl className="case-list">
              <div><dt>The brief</dt><dd>{cases[activeCase].brief}</dd></div>
              <div><dt>My contribution</dt><dd>{cases[activeCase].contribution}</dd></div>
              <div><dt>The outcome</dt><dd>{cases[activeCase].outcome}</dd></div>
            </dl>
            <a className="modal-primary" href={cases[activeCase].link} target="_blank" rel="noreferrer">Open the published work ↗</a>
          </article>
        </div>
      )}
    </main>
  );
}
