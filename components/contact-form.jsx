export function ContactForm({ description, submitLabel, title }) {
  return (
    <div className="contact-form">
      <h2>{title}</h2>
      <p>{description}</p>
      <form>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" placeholder="John Doe" type="text" />
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" placeholder="john@example.com" type="email" />
          </div>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="company">Organisation</label>
            <input id="company" name="company" placeholder="Buyer, distributor, retailer or co-op" type="text" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" placeholder="+27..." type="tel" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Which crops or volumes are you looking for?" rows="5" />
        </div>
        <button className="button button-primary" type="submit">
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
