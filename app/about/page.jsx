import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutPage } from "@/data/site-content";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero hero={aboutPage.hero} />

      <section className="section-surface">
        <div className="shell">
          <SectionHeading
            eyebrow="Our legacy"
            title="Milestones & Impact"
            description="Measured growth across field stewardship, crop planning, and dependable harvest output."
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
            description="The principles that shape how Asivuke APN farms, plans, and delivers crop production."
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
    </main>
  );
}
