import Image from "next/image";
import Link from "next/link";
import type { Messages } from "../language";

export function Footer({
  content,
  brand,
  accessibility,
}: {
  content: Messages["footer"];
  brand: Messages["brand"];
  accessibility: Messages["accessibility"];
}) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <Link
            className="brand"
            href="#inicio"
            aria-label={`${brand.name}, ${accessibility.home}`}
          >
            <Image
              className="brand-logo"
              src="/SVG/v1Negativo.svg"
              alt={brand.logoAlt}
              width={150}
              height={23}
              style={{ width: "150px", height: "auto" }}
            />
          </Link>
          <p>{content.description}</p>
          <div className="footer-socials">
            {content.social.map((social) => (
              <a
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-groups">
          {content.groups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <strong>{group.title}</strong>
              {group.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-legal">
          <small>{content.copyright}</small>
          <small>{content.legalNote}</small>
        </div>
      </div>
    </footer>
  );
}
