import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Asterisk, Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "J10 Effect — AI Advertising Studio",
  description:
    "J10 Effect is an AI advertising company creating impossible campaigns, films, and brand worlds.",
};

const services = ["Campaigns", "AI Films", "Visual Worlds", "Creative Systems"];

function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="J10 Effect home">
      J<span>10</span>
      <sup>®</sup>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-background">
      <nav className="site-nav">
        <BrandMark />
        <div className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Capabilities</a>
          <a href="#about">Studio</a>
        </div>
        <a className="nav-cta" href="mailto:hello@j10effect.com">
          Start a project <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="menu-button" href="#services" aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </a>
      </nav>

      <section className="hero-shell" aria-labelledby="hero-heading">
        <video
          className="hero-image"
          src="/hero-akshay.mp4"
          poster="/hero-akshay-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Akshaya Motors cinematic brand film by J10 Effect"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-kicker">
            <span /> AI advertising · Worldwide
          </div>
          <h1 id="hero-heading">
            Make the
            <br />
            impossible
            <br />
            <em>sell.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              We combine human taste and artificial intelligence to build
              advertising that moves at culture speed.
            </p>
            <a href="#work" className="round-link" aria-label="Explore selected work">
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-index">J10 / 001</div>
      </section>

      <section className="manifesto" id="about">
        <div className="section-label">
          <Asterisk aria-hidden="true" /> What we do
        </div>
        <p className="manifesto-copy">
          The old production model was built for limits. We weren&apos;t. J10
          Effect is an independent AI advertising company creating{" "}
          <span>
            films, images, and brand worlds without the usual ceiling.
          </span>
        </p>
        <div className="manifesto-meta">
          <p>
            Built by creatives.
            <br />
            Accelerated by machines.
          </p>
          <p>London · Dubai · Everywhere</p>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-heading">
          <div className="section-label section-label-light">
            <Asterisk aria-hidden="true" /> Selected work
          </div>
          <h2>Proof, not prompts.</h2>
          <p>
            Campaign worlds engineered to stop thumbs, shift perception, and
            sell.
          </p>
        </div>
        <div className="work-grid">
          <article className="project project-featured">
            <video
              src="/work-audi-rsq8.mp4"
              poster="/work-audi-rsq8-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Audi RSQ8 AI brand film by J10 Effect"
            />
            <div className="project-caption">
              <div>
                <strong>Audi RSQ8 / 2026</strong>
                <span>Automotive · AI Brand Film</span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </article>
          <article className="project project-reel">
            <video
              src="/work-cla-eq.mp4"
              poster="/work-cla-eq-poster.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Mercedes-Benz CLA showroom film by J10 Effect"
            />
            <div className="project-caption">
              <div>
                <strong>Mercedes-Benz CLA / 2026</strong>
                <span>Automotive · Showroom Film</span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </article>
          <article className="project project-reel">
            <video
              src="/work-eqs-showroom.mp4"
              poster="/work-eqs-showroom-poster.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Mercedes-Benz EQS launch film by J10 Effect"
            />
            <div className="project-caption">
              <div>
                <strong>Mercedes-Benz EQS / 2026</strong>
                <span>Automotive · Launch Film</span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </article>
          <article className="project project-reel">
            <video
              src="/work-amg-e53.mp4"
              poster="/work-amg-e53-poster.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Mercedes-AMG E53 customer story by J10 Effect"
            />
            <div className="project-caption">
              <div>
                <strong>Mercedes-AMG E53 / 2026</strong>
                <span>Automotive · Customer Story</span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </article>
          <article className="project project-reel">
            <video
              src="/work-tshirt-drop.mp4"
              poster="/work-tshirt-drop-poster.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Streetwear t-shirt drop campaign cutdown by J10 Effect"
            />
            <div className="project-caption">
              <div>
                <strong>T-Shirt Drop / 2026</strong>
                <span>Fashion · AI Campaign Cutdown</span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </article>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-top">
          <div className="section-label">
            <Asterisk aria-hidden="true" /> Capabilities
          </div>
          <p>One studio. From the first strange idea to the final frame.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <a href="mailto:hello@j10effect.com" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service}</strong>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-topline">
          <span>Have an impossible brief?</span>
          <span>hello@j10effect.com</span>
        </div>
        <a className="footer-cta" href="mailto:hello@j10effect.com">
          Let&apos;s make it <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer-brand">J10 EFFECT</div>
        <div className="footer-bottom">
          <span>Independent AI advertising company</span>
          <span>© 2026 J10 Effect</span>
        </div>
      </footer>
    </main>
  );
}
