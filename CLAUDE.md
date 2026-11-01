@AGENTS.md

# PrintPeak Sublimation — sample website

A sample (demo) site for a full sublimation printing business in the Philippines. Name, contact details and
products are placeholders chosen for the demo. Look and feel inspired by a local print shop site; no code,
copy or images were copied.

## Business facts (placeholders, see `src/content/site.ts`)
- Name: PrintPeak Sublimation · Tagline: "Full-color prints that never fade."
- Products: team jerseys, cycling and esports wear, hoodies and long sleeves, mugs and tumblers, lanyards and caps, banners and flags
- Area: Philippines, ships nationwide · Main action: Get a Quote (`site.quotePath` = `/#contact`)
- Domain: printpeak.example (placeholder)

## Voice
- Bold and energetic, but plain English. Short sentences, everyday words, one idea per sentence.
- Explain sublimation like you would to a friend: "heat turns ink into a gas that soaks into the fabric".
- Never invent numbers, years in business, reviews, prices or speed claims.

## Brand
- Colors in `src/styles/tokens.css` only (hex mirror for OG images in `src/lib/brand.ts`). Accent royal blue `#1e40d8`, off-white `#f6f3ee`, ink `#14161c`, dark `#0f172a`, amber highlight `#f5b700`.
- Fonts in `src/lib/fonts.ts` only: Archivo Black (headings), Inter (body), JetBrains Mono (labels).
- Theme presets: `peak` (default), `crimson`, `lime`, `mono`. Switch in `src/config/features.ts`.

## Keyword register
| Page | Focus keyphrase | Intent | Pyramid |
|---|---|---|---|
| `/` | custom sublimation printing Philippines | Commercial | Top, cornerstone |

Related phrases used in copy: sublimated jerseys, custom mugs, personalized lanyards, all-over print hoodies.

## How to change things
- Reorder or remove home sections: `src/config/sections.ts`
- Add a nav link or page: `src/content/navigation.ts` (also feeds footer and sitemap)
- Copy: `src/content/home.ts` and `src/content/site.ts`
- Modules on/off: `src/config/features.ts`
- Quote form embed: `src/components/FormEmbed.tsx`

## Commands
- `npm run dev` · `npm run build` · `npm run start` · `npm run lint`
- `npm run todos` lists placeholders left · `npm run check:assets` checks image slots

## Rules
- New work goes on a branch, never straight to `main`. Ask before pushing, merging or deploying.
- Static site only: no database, no API routes.
