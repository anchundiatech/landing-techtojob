import Image from "next/image";
import Link from "next/link";
import type { Messages } from "../language";

const discordUrl = "https://discord.gg/h9FFgKdkRd";

export function Header({ content }: { content: Messages }) {
  const links = [
    ["#como-funciona", content.nav.howItWorks],
    ["#talento", content.nav.talent],
    ["#empresas", content.nav.companies],
    ["#torneos", content.nav.tournaments],
    ["#networking", content.nav.networking],
    ["#noticias", content.nav.news],
  ];

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          className="brand"
          href="#inicio"
          aria-label={`${content.brand.name}, ${content.accessibility.home}`}
        >
          <Image
            className="brand-logo"
            src="/SVG/v1Negativo.svg"
            alt={content.brand.logoAlt}
            width={150}
            height={23}
            style={{ width: "150px", height: "auto" }}
            priority
          />
        </Link>
        <nav aria-label={content.accessibility.mainNavigation}>
          <ul className="nav-list">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          className="button button-compact header-cta"
          href={discordUrl}
          target="_blank"
          rel="noreferrer"
        >
          {content.nav.discord}
        </Link>
      </div>
    </header>
  );
}
