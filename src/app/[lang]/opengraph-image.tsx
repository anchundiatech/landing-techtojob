import { ImageResponse } from "next/og";
import { getMessages, languages, type Language } from "../language";

export const alt = "TechToJob";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const locales = Object.keys(languages) as Language[];

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = getMessages(
    locales.includes(lang as Language) ? (lang as Language) : "es",
  );
  const { hero, brand } = content;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#2f3436",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 4,
              background: "#84c0bf",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -1 }}>
            {brand.name}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            {hero.title}
          </span>
          <span style={{ fontSize: 26, color: "#c4cbcc", maxWidth: 820 }}>
            {hero.description}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
