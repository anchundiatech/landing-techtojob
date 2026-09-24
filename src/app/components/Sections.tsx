import Link from "next/link";
import type { Messages } from "../language";

const discordUrl = "https://discord.gg/h9FFgKdkRd";
function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function HowItWorks({ content }: { content: Messages["howItWorks"] }) {
  return (
    <section
      className="section section-muted"
      id="como-funciona"
      aria-labelledby="how-title"
    >
      <div className="shell">
        <div id="how-title">
          <Heading {...content} />
        </div>
        <div className="steps-grid">
          {content.steps.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Talent({ content }: { content: Messages["talent"] }) {
  return (
    <section className="section" id="talento" aria-labelledby="talent-title">
      <div className="shell split-layout">
        <div>
          <div id="talent-title">
            <Heading {...content} />
          </div>
          <ul className="check-list">
            {content.points.map((point) => (
              <li key={point}>
                <span aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <ProfileCard content={content.profile} tags={content.tags} />
      </div>
    </section>
  );
}

function ProfileCard({
  content,
  tags,
}: {
  content: Messages["talent"]["profile"];
  tags: Messages["talent"]["tags"];
}) {
  return (
    <article className="profile-card">
      <header>
        <div className="avatar">{content.initials}</div>
        <div>
          <h3>{content.name}</h3>
          <p>{content.role}</p>
        </div>
        <span className="status">{content.status}</span>
      </header>
      <p className="card-label">{content.stack}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project">
        <div>
          <strong>{content.project}</strong>
          <span>{content.result}</span>
        </div>
        <p>{content.projectNote}</p>
      </div>
      <footer>{content.stats}</footer>
    </article>
  );
}

export function Companies({ content }: { content: Messages["companies"] }) {
  return (
    <section
      className="section section-muted"
      id="empresas"
      aria-labelledby="companies-title"
    >
      <div className="shell split-layout reverse">
        <div className="comparison">
          <article>
            <span className="comparison-label">{content.traditional}</span>
            <p>{content.traditionalText}</p>
          </article>
          <article className="comparison-highlight">
            <span className="comparison-label">{content.approach}</span>
            <p>{content.approachText}</p>
          </article>
        </div>
        <div id="companies-title">
          <Heading {...content} />
          <div className="benefits">
            {content.benefits.map((benefit) => (
              <article key={benefit}>
                <strong>{benefit}</strong>
                <p>{content.benefitDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Tournaments({ content }: { content: Messages["tournaments"] }) {
  return (
    <section
      className="section"
      id="torneos"
      aria-labelledby="tournaments-title"
    >
      <div className="shell">
        <div className="section-top">
          <div id="tournaments-title">
            <Heading {...content} />
          </div>
          <p>{content.description}</p>
        </div>
        <article className="tournament-card">
          <div>
            <span className="live-dot" />{" "}
            <span className="eyebrow">{content.active}</span>
            <h3>{content.challenge}</h3>
          </div>
          <Link
            className="button button-compact"
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            {content.cta}
          </Link>
          <div className="tournament-features">
            {content.features.map((feature) => (
              <div key={feature}>
                <strong>{feature}</strong>
                <p>{content.featureDescription}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function Networking({ content }: { content: Messages["networking"] }) {
  return (
    <section
      className="section section-muted"
      id="networking"
      aria-labelledby="networking-title"
    >
      <div className="shell">
        <div id="networking-title">
          <Heading {...content} />
        </div>
        <div className="feature-grid">
          {content.cards.map((card, index) => (
            <article key={card}>
              <span className="feature-index">0{index + 1}</span>
              <h3>{card}</h3>
              <p>{content.description}</p>
              <span className="feature-note">{content.cardNote}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function News({ content }: { content: Messages["news"] }) {
  return (
    <section className="section" id="noticias" aria-labelledby="news-title">
      <div className="shell">
        <div id="news-title">
          <Heading {...content} />
        </div>
        <div className="news-grid">
          {content.items.map((item) => (
            <article key={item}>
              <div className="news-meta">
                <span className="eyebrow">{item.category}</span>
                <time>{item.date}</time>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href="#inicio">{content.readMore}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing({ content }: { content: Messages["closing"] }) {
  return (
    <section className="closing section" aria-labelledby="closing-title">
      <div className="shell closing-inner">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="closing-title">{content.title}</h2>
        <p>{content.description}</p>
        <Link
          className="button button-large"
          href={discordUrl}
          target="_blank"
          rel="noreferrer"
        >
          {content.cta}
        </Link>
      </div>
    </section>
  );
}
