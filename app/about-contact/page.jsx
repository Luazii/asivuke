import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutPage } from "@/data/site-content";

export const metadata = {
  title: "About & Contact",
};

export default function AboutContactPage() {
  return (
    <main>
      <PageHero hero={aboutPage.hero} />

      <section className="section-surface">
        <div className="shell">
          <SectionHeading
            eyebrow="Our legacy"
            title="Milestones & Impact"
            description="Measured growth across sustainable stewardship, supply chains, and community partnership."
          />
          <div className="impact-grid">
            {aboutPage.impact.map((item) => (
              <article className={`impact-card ${item.variant}`} key={item.title}>
                <span className="proof-mark">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.stats ? (
                  <div className="stats-inline">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="shell">
          <SectionHeading
            centered
            eyebrow="Values"
            title="What Guides Us"
            description="The principles that shape how Asivuke APN farms, partners, and develops people."
          />
          <div className="values-grid">
            {aboutPage.values.map((value) => (
              <article className="value-card" key={value.title}>
                <span className="proof-mark">{value.badge}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface" id="contact">
        <div className="shell contact-layout">
          <ContactForm
            description="Whether you are a supplier, a distributor, or looking for training, our door is always open."
            submitLabel="Send message"
            title="Start a Partnership"
          />
          <aside className="contact-card">
            <div>
              <span className="eyebrow">Contact information</span>
              <h2>Let&apos;s talk growth</h2>
            </div>
            <div className="contact-list">
              {aboutPage.contactDetails.map((detail) => (
                <article className="contact-item" key={detail.label}>
                  <span className="proof-mark">{detail.badge}</span>
                  <div>
                    <strong>{detail.label}</strong>
                    <p>{detail.value}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="map-card">
              <img alt={aboutPage.map.alt} loading="lazy" src={aboutPage.map.image} />
              <div className="map-overlay">
                <span>Visit our operations</span>
                <strong>{aboutPage.map.caption}</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
