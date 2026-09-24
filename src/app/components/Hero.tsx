import Link from "next/link";
import type { Messages } from "../language";

const discordUrl = "https://discord.gg/h9FFgKdkRd";

function HeroTitle({ title, accent }: { title: string; accent: string }) {
  if (!accent || !title.includes(accent)) {
    return title;
  }

  const [before, after] = title.split(accent);

  return (
    <>
      {before}
      <span className="hero-title-accent">{accent}</span>
      {after}
    </>
  );
}

export function Hero({ content }: { content: Messages["hero"] }) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="shell hero-content">
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">
            <HeroTitle title={content.title} accent={content.titleAccent} />
          </h1>
          <p className="hero-description">{content.description}</p>
          <div className="hero-actions">
            <Link
              className="button button-large"
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
            >
              {content.cta}
            </Link>
          </div>
        </div>

        <div className="hero-art" aria-label={content.caption}>
          <div className="hero-glow" aria-hidden="true" />
          <article className="hero-card hero-card-code">
            <div className="hero-card-chrome" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <code>{content.code}</code>
            </pre>
            <p>{content.codeNote}</p>
          </article>
          <article className="hero-card hero-card-message">
            <header>
              <span className="hero-avatar" aria-hidden="true">
                TL
              </span>
              <div>
                <strong>{content.messageTitle}</strong>
                <p>{content.messageNote}</p>
              </div>
            </header>
            <p>{content.message}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
