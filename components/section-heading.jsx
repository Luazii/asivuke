export function SectionHeading({ centered = false, description, eyebrow, theme, title }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""} ${theme === "dark" ? "theme-dark" : ""}`}>
      <span className={`eyebrow ${theme === "dark" ? "eyebrow-on-dark" : ""}`}>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
