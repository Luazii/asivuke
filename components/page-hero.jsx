export function PageHero({ hero }) {
  return (
    <section className="page-hero">
      <div className="shell hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            {hero.titleLines.map((line, index) => (
              <span className={`title-line ${hero.accentLines?.includes(index) ? "accent" : ""}`} key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p>{hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <img alt={hero.image.alt} src={hero.image.src} />
          </div>
          {hero.note ? (
            <div className="hero-note">
              <span>{hero.note.label}</span>
              <strong>{hero.note.title}</strong>
              <p>{hero.note.description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
