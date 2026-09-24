import type { Messages } from "../language";

export function Newsletter({ content }: { content: Messages["newsletter"] }) {
  return (
    <section
      className="newsletter section-muted"
      aria-labelledby="newsletter-title"
    >
      <div className="shell">
        <div className="newsletter-inner" data-reveal="scale">
          <h2 id="newsletter-title">{content.title}</h2>
          <p>{content.description}</p>
          <form action="#newsletter-success">
            <label className="sr-only" htmlFor="email">
              {content.placeholder}
            </label>
            <div className="newsletter-form">
              <input
                id="email"
                name="email"
                type="email"
                placeholder={content.placeholder}
                required
              />
              <button className="button" type="submit">
                {content.cta}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
