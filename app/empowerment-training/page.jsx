import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { trainingPage } from "@/data/site-content";

export const metadata = {
  title: "Empowerment & Training",
};

export default function EmpowermentTrainingPage() {
  return (
    <main>
      <PageHero hero={trainingPage.hero} />

      <section className="section-surface" id="curriculum">
        <div className="shell">
          <SectionHeading
            eyebrow="Curriculum"
            title="Core Knowledge Pillars"
            description="Mastering the practical trio of modern agriculture: earth, strategy, and finance."
          />
          <div className="pillar-grid">
            {trainingPage.pillars.map((pillar) => (
              <article className={`pillar-card ${pillar.variant}`} key={pillar.title}>
                <span className="proof-mark">{pillar.badge}</span>
                <h3>{pillar.title}</h3>
                <ul className="mini-list">
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="shell split-layout split-layout-reverse">
          <div className="visual-panel visual-panel-stacked">
            <img alt={trainingPage.impact.alt} loading="lazy" src={trainingPage.impact.image} />
            <div className="quote-panel">
              <p>{trainingPage.impact.quote}</p>
              <strong>{trainingPage.impact.quoteAuthor}</strong>
            </div>
          </div>
          <div className="copy-panel">
            <span className="eyebrow">Success stories</span>
            <h2>{trainingPage.impact.title}</h2>
            <p>{trainingPage.impact.description}</p>
            <div className="metric-grid">
              {trainingPage.impact.metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="impact-band">
        <div className="shell">
          <SectionHeading
            centered
            eyebrow="Program flow"
            title="The Growth Journey"
            description="A paced pathway from discovery to market integration so new agropreneurs can build with confidence."
            theme="dark"
          />
          <div className="journey-grid">
            {trainingPage.journey.map((step) => (
              <article className="journey-card" key={step.step}>
                <span className="journey-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light" id="application">
        <div className="shell form-shell">
          <ContactForm
            description="Tell us a bit about your ambition and experience, and we’ll guide you toward the right intake or support pathway."
            submitLabel="Submit inquiry"
            title="Start Your Journey"
          />
        </div>
      </section>
    </main>
  );
}
