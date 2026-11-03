import { HeroFilm } from "./components/hero-film";
import { Work } from "./components/work";
import { CONTACT_EMAIL, CONTACT_HREF } from "./contact";

const offers = [
  {
    name: "Brand films",
    detail:
      "A one-minute film built on one big idea, like the RS Q8 racing through history.",
  },
  {
    name: "Showroom reels",
    detail:
      "Vertical walkarounds for car dealers, captioned and ready for Instagram.",
  },
  {
    name: "Fashion drops",
    detail: "Short vertical reels that show off a new collection on the street.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <HeroFilm />

      <section className="idea" aria-label="What J10 Effect does">
        <p>
          That film has no location, no crew and no{" "}
          <span className="no-break">T-rex</span> handler. We write the idea,
          generate the footage and cut the film.
        </p>
      </section>

      <Work />

      <section className="offers" id="hire" aria-labelledby="offers-heading">
        <h2 id="offers-heading">What you can hire us for</h2>
        <dl>
          {offers.map((offer) => (
            <div key={offer.name}>
              <dt>{offer.name}</dt>
              <dd>{offer.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="contact" id="contact">
        <p className="contact-prompt">Got an idea that sounds impossible?</p>
        <a className="contact-email" href={CONTACT_HREF}>
          {CONTACT_EMAIL}
        </a>
        <div className="contact-small">
          <p>© 2026 J10 Effect</p>
          <p>
            Car and brand names belong to their owners. Showing a film here
            doesn&apos;t mean a manufacturer endorsed it.
          </p>
        </div>
      </footer>
    </main>
  );
}
