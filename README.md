# Landing TechToJob

Landing page de **TechToJob**: comunidad de desarrolladores y empresas tech con torneos, networking y oportunidades laborales.

**Web:** https://landing-techtojob.vercel.app
**Repo:** https://github.com/anchundiatech/landing-techtojob

## Stack

| Capa       | Tecnología                                    |
| ---------- | --------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router) |
| UI         | React 19 + TypeScript                         |
| Estilos    | Tailwind CSS 4 + CSS custom properties        |
| Tipografía | Sora (`next/font`)                            |
| Paquete    | pnpm                                          |
| Deploy     | Vercel                                        |

## Características

- **Diseño responsive** con header sticky y menú hamburguesa en móvil
- **i18n**: español (`/`) e inglés (`/en`) con contenido en JSON
- **Animaciones**: entrada del hero, scroll reveal (IntersectionObserver), hover en tarjetas y micro-interacciones
- **Accesibilidad**: landmarks, `aria-*`, foco visible y soporte de `prefers-reduced-motion`
- **SEO**: metadata por locale, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt` y JSON-LD (Organization)
- **Favicon** con el símbolo de la marca (SVG)

## Estructura

```
src/
├── app/
│   ├── [lang]/          # Rutas por idioma (es | en)
│   │   ├── layout.tsx   # Layout, fonts y metadata
│   │   ├── page.tsx     # Página principal
│   │   ├── opengraph-image.tsx
│   │   └── twitter-image.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Sections.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollReveal.tsx
│   ├── language/        # es.json, en.json y helper de mensajes
│   ├── globals.css      # Estilos globales y animaciones
│   ├── icon.svg
│   ├── robots.ts
│   └── sitemap.ts
├── proxy.ts             # Rewrite de / → /es
public/
└── SVG/                 # Logos y símbolos
```

## Secciones de la landing

1. Hero
2. Cómo funciona
3. Talento
4. Empresas
5. Torneos
6. Networking
7. Noticias
8. Newsletter
9. Cierre (CTA)
10. Footer

## Requisitos

- Node.js 20+
- [pnpm](https://pnpm.io) 11+

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) (es) o [http://localhost:3000/en](http://localhost:3000/en).

## Scripts

| Comando      | Descripción                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Servidor de desarrollo       |
| `pnpm build` | Build de producción          |
| `pnpm start` | Sirve el build de producción |
| `pnpm lint`  | ESLint                       |

## Idiomas

| Locale  | Ruta                  |
| ------- | --------------------- |
| Español | `/` (rewrite a `/es`) |
| English | `/en`                 |

El contenido vive en:

- `src/app/language/es.json`
- `src/app/language/en.json`

Para añadir un idioma: crea el JSON, expórtalo en `languages` (`src/app/language/index.ts`) y se genera la ruta estática correspondiente.

## SEO y despliegue

- **Canonical** y **hreflang** por locale
- **Sitemap:** `/sitemap.xml`
- **Robots:** `/robots.txt`
- **Base URL:** `https://landing-techtojob.vercel.app`

En Vercel: importa el repo y usa `pnpm build` como build command (o la detección automática de Next.js).
