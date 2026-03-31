import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { homePage } from "@/data/site-content";

export default function HomePage() {
  return (
    <main>
      <PageHero hero={homePage.hero} />

      <section className="section-surface" id="services">
        <div className="shell">
          <SectionHeading
            eyebrow="What we do"
            title="Core Services & Operations"
            description="Comprehensive support for the modern agricultural landscape, from field production to capacity building."
          />
          <div className="service-grid">
            {homePage.services.map((service) => (
              <article className="feature-card" key={service.title}>
                <div className="feature-image">
                  <img alt={service.alt} loading="lazy" src={service.image} />
                </div>
                <span className="feature-kicker">{service.kicker}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="text-link" href={service.href}>
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-band" id="training">
        <div className="shell split-band">
          <div className="band-image-stack">
            <div className="band-image-frame">
              <img alt={homePage.trainingSpotlight.alt} loading="lazy" src={homePage.trainingSpotlight.image} />
            </div>
          </div>
          <div className="band-copy">
            <span className="eyebrow eyebrow-on-dark">Investing in people</span>
            <h2>{homePage.trainingSpotlight.title}</h2>
            <p>{homePage.trainingSpotlight.description}</p>
            <div className="bullet-list">
              {homePage.trainingSpotlight.points.map((point) => (
                <div className="bullet-item" key={point.title}>
                  <span className="bullet-badge">{point.badge}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="button button-light" href="/empowerment-training#application">
              Join our next intake
            </a>
          </div>
        </div>
      </section>

      <section className="section-light" id="timeline">
        <div className="shell">
          <SectionHeading
            centered
            eyebrow="Milestones"
            title="Our Growth Timeline"
            description="A steady expansion built around sustainable farming, shared knowledge, and commercial discipline."
          />
          <div className="timeline">
            {homePage.timeline.map((item) => (
              <article className="timeline-item" key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="shell">
          <div className="cta-panel">
            <span className="eyebrow eyebrow-on-dark">Let&apos;s grow together</span>
            <h2>Planning a new season, supply partnership, or training intake?</h2>
            <p>
              We help cooperatives, retailers, and emerging agropreneurs move from idea to reliable execution.
            </p>
            <div className="cta-actions">
              <a className="button button-light" href="/about-contact#contact">
                Start a conversation
              </a>
              <a className="button button-ghost-light" href="/farming-products">
                View product lines
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
