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
            title="Core Crop Lines"
            description="A focused crop portfolio built around disciplined field management, quality control, and dependable harvest timing."
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

      <section className="impact-band" id="production">
        <div className="shell split-band">
          <div className="band-image-stack">
            <div className="band-image-frame">
              <img alt={homePage.productionSpotlight.alt} loading="lazy" src={homePage.productionSpotlight.image} />
            </div>
          </div>
          <div className="band-copy">
            <span className="eyebrow eyebrow-on-dark">How we grow</span>
            <h2>{homePage.productionSpotlight.title}</h2>
            <p>{homePage.productionSpotlight.description}</p>
            <div className="bullet-list">
              {homePage.productionSpotlight.points.map((point) => (
                <div className="bullet-item" key={point.title}>
                  <span className="bullet-badge">{point.badge}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="button button-light" href="/farming-products">
              View crop portfolio
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
            <h2>Planning a seasonal order or checking crop availability?</h2>
            <p>
              We work with buyers who need dependable crop supply, clear timing, and a direct line to the farm.
            </p>
            <div className="cta-actions">
              <a className="button button-light" href="/contact">
                Request availability
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
