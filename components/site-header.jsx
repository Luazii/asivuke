"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader({ navigation }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell">
        <div className="site-header-inner">
          <Link className="brand-lockup" href="/" onClick={() => setIsOpen(false)}>
            <strong>Asivuke APN</strong>
            <span>Sustainable growth</span>
          </Link>

          <nav aria-label="Primary" className="desktop-nav">
            {navigation.map((item) => (
              <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="button button-primary header-cta" href="/about-contact#contact">
            Consultation
          </Link>

          <button
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="mobile-toggle"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? "×" : "≡"}
          </button>
        </div>

        {isOpen ? (
          <nav aria-label="Mobile" className="mobile-nav">
            {navigation.map((item) => (
              <Link
                className={pathname === item.href ? "active" : ""}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link className="button button-primary" href="/about-contact#contact" onClick={() => setIsOpen(false)}>
              Consultation
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
