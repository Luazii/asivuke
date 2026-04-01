import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contactPage } from "@/data/site-content";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero hero={contactPage.hero} />

      <section className="section-surface" id="contact-form">
        <div className="shell contact-layout">
          <ContactForm
            description="Tell us which crop, quantity, or season you are interested in and we will come back to you with current availability."
            submitLabel="Send inquiry"
            title="Request Crop Availability"
          />
          <aside className="contact-card">
            <div>
              <span className="eyebrow">Contact information</span>
              <h2>{contactPage.intro.title}</h2>
              <p>{contactPage.intro.description}</p>
            </div>
            <div className="contact-list">
              {contactPage.contactDetails.map((detail) => (
                <article className="contact-item" key={detail.label}>
                  <span className="proof-mark">{detail.badge}</span>
                  <div>
                    <strong>{detail.label}</strong>
                    <p>{detail.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
