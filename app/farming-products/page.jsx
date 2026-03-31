import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { farmingPage } from "@/data/site-content";

export const metadata = {
  title: "Farming & Products",
};

export default function FarmingProductsPage() {
  return (
    <main>
      <PageHero hero={farmingPage.hero} />

      <section className="section-surface">
        <div className="shell">
          <SectionHeading
            eyebrow="Our bounty"
            title="Crop Production Portfolio"
            description="Essential food-security crops grown with disciplined soil management, predictable harvest cycles, and wholesale readiness."
          />
          <div className="product-grid">
            {farmingPage.products.map((product) => (
              <article className={`product-card ${product.variant}`} key={product.title}>
                <div className="product-copy">
                  <span className="feature-kicker">{product.kicker}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  {product.details ? (
                    <ul className="mini-list">
                      {product.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="product-media">
                  <img alt={product.alt} loading="lazy" src={product.image} />
                </div>
                <span className="availability">{product.availability}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="shell split-layout">
          <div className="visual-panel">
            <img alt={farmingPage.poultry.alt} loading="lazy" src={farmingPage.poultry.image} />
          </div>
          <div className="copy-panel">
            <span className="eyebrow">Livestock management</span>
            <h2>{farmingPage.poultry.title}</h2>
            <p>{farmingPage.poultry.description}</p>
            <div className="proof-grid">
              {farmingPage.poultry.points.map((point) => (
                <article className="proof-card" key={point.title}>
                  <span className="proof-mark">{point.badge}</span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="shell">
          <div className="cta-panel cta-panel-center">
            <span className="eyebrow eyebrow-on-dark">Wholesale ready</span>
            <h2>Ready to partner with Asivuke APN?</h2>
            <p>
              Whether you need seasonal produce, poultry supply, or long-term fulfilment support, our team can scope the right fit quickly.
            </p>
            <div className="cta-actions">
              <a className="button button-light" href="/about-contact#contact">
                Price schedule
              </a>
              <a className="button button-ghost-light" href="/empowerment-training">
                Support farmer training
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
