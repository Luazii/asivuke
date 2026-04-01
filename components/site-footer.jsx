import Link from "next/link";
import { siteMeta } from "@/data/site-content";

export function SiteFooter({ navigation }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer-inner">
          <div className="footer-copy">
            <div className="footer-brand">
              <strong>{siteMeta.brand}</strong>
              <span>{siteMeta.tagline}</span>
            </div>
            <p>{siteMeta.description}</p>
          </div>

          <div>
            <h3 className="footer-links">Navigate</h3>
            <nav className="footer-nav">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>{siteMeta.address}</p>
            <p>{siteMeta.phone}</p>
            <p>{siteMeta.email}</p>
          </div>
        </div>

        <p className="footer-note">© 2026 Asivuke APN Trading and Projects. Sustainable Growth, Rooted in Excellence.</p>
      </div>
    </footer>
  );
}
