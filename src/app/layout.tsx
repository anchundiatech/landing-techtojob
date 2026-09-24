import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techtojob.com"),
  title: {
    default: "TechToJob | Comunidad y oportunidades tech",
    template: "%s | TechToJob",
  },
  description:
    "La comunidad donde desarrolladores y empresas se conocen construyendo proyectos reales.",
  applicationName: "TechToJob",
  keywords: [
    "empleo tech",
    "comunidad desarrolladores",
    "torneos programación",
    "talento tecnológico",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://techtojob.com",
    siteName: "TechToJob",
    title: "TechToJob | Comunidad y oportunidades tech",
    description:
      "Construye proyectos reales y conecta con empresas que valoran cómo trabajas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechToJob | Comunidad y oportunidades tech",
    description:
      "La comunidad donde desarrolladores y empresas se conocen construyendo.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sora.variable} h-full antialiased`}>
      <body className={`${sora.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
