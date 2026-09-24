import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { languages, type Language } from "../language";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const locales = Object.keys(languages) as Language[];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Params = { lang: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!locales.includes(lang as Language)) {
    notFound();
  }

  const content = languages[lang as Language];
  const path = lang === "es" ? "/" : `/${lang}`;
  const ogLocale = lang === "es" ? "es_ES" : "en_US";

  return {
    metadataBase: new URL("https://landing-techtojob.vercel.app/"),

    title: {
      default: content.metadata.title,
      template: `%s | TechToJob`,
    },

    description: content.metadata.description,

    applicationName: "TechToJob",

    alternates: {
      canonical: path,
      languages: {
        es: "/",
        en: "/en",
        "x-default": "/",
      },
    },

    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/SVG/SímboloNegativo.svg", type: "image/svg+xml" },
      ],
    },

    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `https://landing-techtojob.vercel.app${path}`,
      siteName: "TechToJob",
      title: content.metadata.title,
      description: content.metadata.description,
    },

    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechToJob",
  url: "https://landing-techtojob.vercel.app/",
  logo: "https://landing-techtojob.vercel.app/SVG/v1Negativo.svg",
  sameAs: [
    "https://discord.gg/h9FFgKdkRd",
    "https://www.linkedin.com/company/techtojob/",
    "https://x.com/techtojob",
    "https://www.instagram.com/techtojob",
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Language)) notFound();

  return (
    <html lang={lang} className={`${sora.variable} h-full antialiased`}>
      <body className={`${sora.className} min-h-full flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
