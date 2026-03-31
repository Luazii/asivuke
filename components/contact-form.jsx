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
            <input id="company" name="company" placeholder="Co-op, farm, retailer or NGO" type="text" />
          </div>
          <div className="field">
            <label htmlFor="interest">Inquiry type</label>
            <select defaultValue="Partnership opportunities" id="interest" name="interest">
              <option>Partnership opportunities</option>
              <option>Supply inquiry</option>
              <option>Empowerment &amp; training</option>
              <option>General support</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="How can we help you grow?" rows="5" />
        </div>
        <button className="button button-primary" type="submit">
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
