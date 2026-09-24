import Link from "next/link";
import type { Messages } from "../language";
import { DiscordIcon } from "./DiscordIcon";

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

// Fixed layout for the code tokens: hand-placed, not a grid, so it
// reads as a loose schematic rather than a repeating pattern. Lines
// connect a few of them to give it a circuit/constellation feel.
const TOKEN_POSITIONS = [
  { x: 60, y: 90 },
  { x: 340, y: 40 },
  { x: 620, y: 120 },
  { x: 900, y: 70 },
  { x: 1120, y: 160 },
  { x: 180, y: 260 },
  { x: 480, y: 320 },
  { x: 760, y: 300 },
  { x: 1040, y: 380 },
  { x: 260, y: 480 },
  { x: 600, y: 520 },
  { x: 940, y: 560 },
] as const;

const TOKEN_LINKS: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [6, 9],
  [9, 10],
  [10, 11],
];

function HeroBackground({ tokens }: { tokens?: readonly string[] }) {
  const safeTokens = tokens?.length ? tokens : ["</>"];
  return (
    <svg
      className="hero-bg-art"
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      {TOKEN_LINKS.map(([a, b], i) => {
        const from = TOKEN_POSITIONS[a];
        const to = TOKEN_POSITIONS[b];
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            className="hero-bg-line"
            style={{ animationDelay: `${i * 0.12}s, ${2.6 + i * 0.12}s` }}
          />
        );
      })}
      {TOKEN_POSITIONS.map((pos, i) => (
        <g key={i}>
          <circle
            cx={pos.x}
            cy={pos.y}
            r={3}
            className="hero-bg-dot"
            style={{ animationDelay: `${i * 0.28}s` }}
          />
          <text
            x={pos.x + 12}
            y={pos.y + 4}
            className="hero-bg-token"
            style={{ animationDelay: `${0.4 + i * 0.3}s` }}
          >
            {safeTokens[i % safeTokens.length]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Hero({ content }: { content: Messages["hero"] }) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <HeroBackground tokens={content.codeRain ?? []} />
      <div className="shell hero-content">
        <div className="hero-copy">
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
              <DiscordIcon size={18} />
              {content.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
