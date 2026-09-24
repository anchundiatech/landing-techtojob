"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Messages } from "../language";
import { DiscordIcon } from "./DiscordIcon";

const discordUrl = "https://discord.gg/h9FFgKdkRd";

export function Header({ content }: { content: Messages }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["#como-funciona", content.nav.howItWorks],
    ["#talento", content.nav.talent],
    ["#empresas", content.nav.companies],
    ["#torneos", content.nav.tournaments],
    ["#networking", content.nav.networking],
    ["#noticias", content.nav.news],
  ];

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="#inicio" aria-label="TechToJob">
          <Image
            className="brand-logo"
            src="/SVG/v1Negativo.svg"
            alt="Logo de TechToJob"
            width={150}
            height={23}
            style={{ width: "150px", height: "auto" }}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
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
          <DiscordIcon />
          {content.nav.discord}
        </Link>

        <button
          className={`menu-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={
            open ? content.nav.menuClose : content.nav.menuOpen
          }
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          <ul className="mobile-nav-list">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={close}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          className="button button-compact mobile-nav-cta"
          href={discordUrl}
          target="_blank"
          rel="noreferrer"
          onClick={close}
        >
          <DiscordIcon />
          {content.nav.discord}
        </Link>
      </div>
    </header>
  );
}
