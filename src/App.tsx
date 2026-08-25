"use client";

import { useEffect, useState } from "react";
import { portfolio } from "./portfolio-content";

export default function Home() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".micro-sparkle-cursor");
    if (!cursor) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const move = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      document.body.classList.add("custom-cursor-active");
      cursor.classList.add("is-visible");
      cursor.style.transform = `translate3d(${event.clientX - 4}px, ${event.clientY - 4}px, 0)`;
    };

    const leave = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <main className="site" id="top">
      <div className="micro-sparkle-cursor" aria-hidden="true">
        <svg viewBox="0 0 34 34">
          <g transform="translate(-1.5 -1.2) scale(1.2)">
            <path
              d="M6 5 L7.5 9 L11.5 10.5 L7.5 12 L6 16 L4.5 12 L.5 10.5 L4.5 9 Z"
              fill="#a70f2b"
            />
            <circle cx="6" cy="5" r="1.4" fill="#ffffff" />
            <path
              d="M18 8 L19 10.6 L21.8 11.6 L19 12.6 L18 15.2 L17 12.6 L14.2 11.6 L17 10.6 Z"
              fill="#a70f2b"
              opacity=".8"
            />
            <path
              d="M12 18 L12.8 20 L15 20.8 L12.8 21.6 L12 23.6 L11.2 21.6 L9 20.8 L11.2 20 Z"
              fill="#a70f2b"
              opacity=".55"
            />
          </g>
        </svg>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top">Puja Dahal</a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#practice">Experience</a>
            <a href="#how">How I work</a>
            <a href="#about">About</a>
            <a className="nav-cv" href="/Puja_Dahal_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="#contact">Contact</a>
          </nav>

          <details className="mobile-menu">
            <summary>Menu +</summary>
            <nav aria-label="Mobile navigation">
              <a href="#work">Work</a>
              <a href="#practice">Experience</a>
              <a href="#how">How I work</a>
              <a href="#about">About</a>
              <a href="/Puja_Dahal_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="shell">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Communications · Content · Cultural Engagement</p>
              <h1>The audience changes.<br />So should the explanation.</h1>
              <p className="hero-lead">
                My work has moved between travel articles, client email, Kathmandu heritage sites
                and one-to-one learning support. Different setting, same question: what does this
                person need to understand, and what is the clearest way to get them there?
              </p>

              <div className="hero-actions">
                <a className="text-action" href="#work">View selected work <span>↓</span></a>
                <a className="text-action" href="/Puja_Dahal_CV.pdf" target="_blank" rel="noopener noreferrer">
                  View CV <span>↗</span>
                </a>
              </div>
            </div>

            <figure className="hero-portrait">
              <img src={portfolio.hero.photo} alt={portfolio.hero.photoAlt} />
            </figure>
          </div>

          <div className="evidence-strip" aria-label="Evidence at a glance">
            <div><b>3 published pieces</b><span>travel & cultural web content</span></div>
            <div><b>Client correspondence</b><span>enquiries · itineraries · follow-ups</span></div>
            <div><b>Kathmandu Valley</b><span>independent English-language guiding</span></div>
            <div><b>MA English · 3.76</b><span>CGPA / 4.00</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="shell">
          <div className="section-head">
            <div className="section-index">01 / Selected work</div>
            <h2>Three pieces. Three different reader needs.</h2>
            <p className="section-intro">
              Three published pieces for Global Eco Trails. I chose them because they show different
              communication problems: helping a beginner prepare, adding cultural context to a familiar
              route, and making several local traditions easier to navigate.
            </p>
            <p className="disclosure">
              I wrote these pieces for Global Eco Trails; the company website publishes them under the owner’s byline.
            </p>
          </div>

          <article className="project">
            <div className="project-no">01</div>
            <div>
              <p className="project-type">Practical + destination writing</p>
              <h3>A Practical Guide for First-Time Trekkers</h3>
            </div>
            <div>
              <p className="project-summary">
                A beginner-focused piece that turns broad trekking concerns into practical guidance
                on preparation, pace, comfort and difficulty.
              </p>
              <dl className="case-grid">
                <div><dt>Reader</dt><dd>Someone considering an early trek and trying to judge what preparation will actually matter.</dd></div>
                <div><dt>Communication task</dt><dd>Make practical information useful before the reader is already on the trail.</dd></div>
                <div><dt>My contribution</dt><dd>Research, information selection, structure and draft writing.</dd></div>
              </dl>
              <p className="published-note">Published on Global Eco Trails under the company owner’s byline.</p>
              <a className="live-link" href="https://globalecotrails.com/blog/beginner-friendly-treks-khopra-trekking-tips" target="_blank" rel="noreferrer">
                View published page ↗
              </a>
            </div>
          </article>

          <article className="project">
            <div className="project-no">02</div>
            <div>
              <p className="project-type">Cultural + research-based writing</p>
              <h3>Monasteries Along the Everest Base Camp Trail</h3>
            </div>
            <div>
              <p className="project-summary">
                A cultural guide written to help travellers encounter monasteries along the route as
                living religious and community spaces, rather than only scenic stops.
              </p>
              <dl className="case-grid">
                <div><dt>Reader</dt><dd>Travellers likely to reach these places with limited cultural or religious context.</dd></div>
                <div><dt>Communication task</dt><dd>Add useful context without turning a travel article into an academic explanation.</dd></div>
                <div><dt>My contribution</dt><dd>Research, cultural context, organisation and draft writing.</dd></div>
              </dl>
              <p className="published-note">Published on Global Eco Trails under the company owner’s byline.</p>
              <a className="live-link" href="https://globalecotrails.com/blog/exploring-the-monasteries-of-the-ebc-trek" target="_blank" rel="noreferrer">
                View published page ↗
              </a>
            </div>
          </article>

          <article className="project">
            <div className="project-no">03</div>
            <div>
              <p className="project-type">Research + destination writing</p>
              <h3>A Guide to Festivals in Upper Mustang</h3>
            </div>
            <div>
              <p className="project-summary">
                A destination guide that brings several festivals, rituals and community practices
                into one clear structure for readers preparing to visit Upper Mustang.
              </p>
              <dl className="case-grid">
                <div><dt>Reader</dt><dd>Travellers trying to understand which festivals take place in Upper Mustang and what they mean locally.</dd></div>
                <div><dt>Communication task</dt><dd>Organise several traditions without flattening them into a generic list of “culture”.</dd></div>
                <div><dt>My contribution</dt><dd>Research, information grouping, structure and draft writing.</dd></div>
              </dl>
              <p className="published-note">Published on Global Eco Trails under the company owner’s byline.</p>
              <a className="live-link" href="https://globalecotrails.com/blog/festival-in-upper-mustang" target="_blank" rel="noreferrer">
                View published page ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="practice">
        <div className="shell">
          <div className="section-head">
            <div className="section-index">02 / Work in practice</div>
            <h2>What changes when the audience can answer back.</h2>
            <p className="section-intro">
              Articles let me plan the explanation. Email, guiding and tutoring are less predictable:
              the next question can change what happens next.
            </p>
          </div>

          <div className="practice-list">
            <article className="practice-row">
              <div className="date">Dec 2024—Present<br />Intermittent / project-based</div>
              <div>
                <h3>Content Contributor &amp; Correspondence Support</h3>
                <p className="org">Global Eco Trails · Kathmandu, Nepal</p>
              </div>
              <div className="practice-copy-wrap">
                <p className="practice-copy">
                  Alongside the published work above, I handle client enquiries, itinerary questions,
                  booking communication and follow-ups—drafting and revising replies for clarity and
                  appropriate professional tone.
                </p>
              </div>
            </article>

            <article className="practice-row">
              <div className="date">Aug 2024—Present<br />Seasonal / independent</div>
              <div>
                <h3>Independent City Guide</h3>
                <p className="org">Kathmandu Valley, Nepal</p>
              </div>
              <div className="practice-copy-wrap">
                <p className="practice-copy">
                  I conduct personalised English-language tours at Kathmandu Valley heritage sites,
                  adapting explanations of history, religion, architecture and cultural practices to
                  visitors’ questions, interests and prior knowledge.
                </p>
                <a
                  className="review"
                  href="https://www.tripadvisor.com/Attraction_Review-g293890-d27502246-Reviews-Global_Eco_Trails-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  “Our guides, Netra and Puja, were fantastic.”
                  <small>Global Eco Trails client review · view source ↗</small>
                </a>
              </div>
            </article>

            <article className="practice-row">
              <div className="date">Mar 2023—Oct 2024<br />Private / one-to-one</div>
              <div>
                <h3>Private Tutor &amp; Learning Support</h3>
                <p className="org">Kathmandu, Nepal</p>
              </div>
              <div className="practice-copy-wrap">
                <p className="practice-copy">
                  I supported a visually impaired Grades 11–12 learner across six subjects in English
                  and Nepali, and later worked with two young adult learners building foundational
                  English from alphabet and phonics toward basic reading. The practical lesson was
                  simple: if an explanation is not reaching the learner, the explanation has to change.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="shell">
          <div className="section-head">
            <div className="section-index">03 / How I work</div>
            <h2>What happens before the final sentence.</h2>
            <p className="section-intro">
              The finished article, email, tour or lesson is the visible part. The work underneath it
              is usually some version of research, organisation and adaptation.
            </p>
          </div>

          <div className="how-grid">
            <article className="how-card">
              <span className="micro">01 / Research</span>
              <h3>Know what needs checking.</h3>
              <p>I start with the audience and purpose, then identify the facts, context and unfamiliar terms that need reliable background work.</p>
            </article>
            <article className="how-card">
              <span className="micro">02 / Organise</span>
              <h3>Decide what deserves space.</h3>
              <p>I group related information, cut repetition and choose an order that helps the reader or listener understand what matters first.</p>
            </article>
            <article className="how-card">
              <span className="micro">03 / Adapt</span>
              <h3>Do not explain everyone the same way.</h3>
              <p>I change tone, depth, examples and pace according to the reader, client, visitor or learner in front of me.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="section-index">04 / About me</div>
          <div>
            <div className="about-title">
              <h2>The part a CV leaves out.</h2>
              <p>My work explains what I can do. This is a little more about what keeps my attention in the first place.</p>
            </div>

            <div className="about-copy">
              <p className="about-opening">
                I like walking where there are more trees. Lately, I have been learning to recognise
                birds—where they live, how they behave, and how many I had probably passed without really seeing.
              </p>

              <p>
                I also notice the small ways culture places people beside other lives: offering food
                to birds in the name of <em>pitri</em>, or leaving water outside so they do not become
                <em> kakakul</em>. I am interested in what ordinary gestures can carry—belief, memory,
                care, habit, story.
              </p>

              <p>
                Not every small observation needs a big conclusion. I mostly keep the question and come
                back to it later. Looking back, that probably explains part of the path so far:
                literature, an ecocritical thesis, writing about places, guiding visitors through
                Kathmandu, and wanting to work where culture, environment and communication overlap.
              </p>

              <p className="about-note">
                At work, I am much more practical about it. A reader may need the useful detail first.
                A visitor may need context rather than a long history lesson. A learner may need the
                explanation rebuilt from the beginning. I like working out which version is actually useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="background">
        <div className="shell">
          <div className="section-head">
            <div className="section-index">05 / Background</div>
            <h2>The background behind the work.</h2>
            <p className="section-intro">
              Literature, journalism and tourism training sit behind different parts of the work above.
              The full chronology and skills list are in my CV.
            </p>
          </div>

          <div className="credentials">
            <article className="credential">
              <div className="micro">2020—2023 · Passed 2025</div>
              <h3>Master of Arts in English</h3>
              <p>Tribhuvan University · Ratna Rajya Laxmi Campus · CGPA 3.76/4.00 · Final grade A−</p>
              <p className="credential-detail">
                <strong>Thesis:</strong> <em>Ethical Clash in Olga Tokarczuk’s Drive Your Plow Over the Bones of the Dead</em>
                {" "}— ecocritical literary analysis of anthropocentric institutions, nonhuman life and competing ideas of justice.
              </p>
            </article>

            <article className="credential">
              <div className="micro">2017—2019</div>
              <h3>Bachelor of Arts</h3>
              <p>Tribhuvan University · Ratna Rajya Laxmi Campus · English, Journalism and Mass Communication · First Division, 61.36%</p>
              <p className="credential-detail">
                <strong>2018 academic project:</strong> collaborative arts magazine · editing, page layout, visual design and print preparation.
              </p>
            </article>

            <article className="credential">
              <div className="micro">16 Apr—30 Jun 2024</div>
              <h3>Tourist Guide Training</h3>
              <p>Nepal Academy of Tourism and Hotel Management (NATHM) · Grade A</p>
            </article>

            <article className="credential">
              <div className="micro">16 Aug 2024</div>
              <h3>Environmentally Sustainable Tourism Practices</h3>
              <p>Tourism-related Environmental Crime Prevention and Control · Trekking Agencies’ Association of Nepal (TAAN) · support from USAID Biodiversity (Jal Jangal)</p>
            </article>
          </div>
        </div>
      </section>

      <section className="short-section" id="quick">
        <div className="shell short-grid">
          <div className="short-index">06 / 30 seconds</div>

          <div className="receipt-wrap">
            <button
              className={`receipt-flip${flipped ? " is-flipped" : ""}`}
              type="button"
              aria-label="Flip the short version card"
              aria-pressed={flipped}
              onClick={() => setFlipped((value) => !value)}
            >
              <span className="receipt-card receipt-front">
                <span className="receipt-kicker">PUJA DAHAL · QUICK RECEIPT</span>
                <span className="receipt-rule" />
                <span className="receipt-title">The short version</span>

                <span className="receipt-line"><span>CONTENT</span><span>✓</span></span>
                <span className="receipt-line"><span>CORRESPONDENCE</span><span>✓</span></span>
                <span className="receipt-line"><span>CULTURAL COMMUNICATION</span><span>✓</span></span>

                <span className="receipt-rule" />
                <span className="receipt-total"><span>TIME NEEDED</span><strong>30 SEC</strong></span>
                <span className="receipt-hint">CLICK / TAP TO FLIP ↻</span>
              </span>

              <span className="receipt-card receipt-back">
                <span className="receipt-kicker">PUJA DAHAL · QUICK RECEIPT</span>
                <span className="receipt-rule" />
                <span className="receipt-back-copy">
                  I work across <em>content, correspondence and cultural communication</em>. I have
                  written three published travel and cultural pieces, handled client email communication,
                  guided visitors in Kathmandu Valley and adapted one-to-one learning support. I am most
                  useful when information needs research, structure and a clearer version for a particular audience.
                </span>
                <span className="receipt-rule" />
                <span className="receipt-hint">CLICK / TAP TO FLIP BACK ↻</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell">
          <h2>Have something that needs careful communication?</h2>
          <p className="contact-copy">
            I am open to communications, content, documentation and cultural-engagement opportunities,
            particularly across education, tourism, environment and social-impact work.
          </p>

          <div className="contact-actions">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=workwithpuzz@gmail.com" target="_blank" rel="noopener noreferrer"><span>Email</span><span>↗</span></a>
            <a href="/Puja_Dahal_CV.pdf" target="_blank" rel="noopener noreferrer"><span>CV</span><span>↗</span></a>
            <a href="https://pujadahal.com.np/" target="_blank" rel="noopener noreferrer"><span>Portfolio</span><span>↗</span></a>
          </div>

          <div className="site-footer">
            <span>
              Puja Dahal · Kathmandu, Nepal ·{" "}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=workwithpuzz@gmail.com" target="_blank" rel="noopener noreferrer">workwithpuzz@gmail.com</a>
            </span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </section>
    </main>
  );
}

