# SARVESH//SINGH — AI Systems Portfolio

One-page portfolio of the July 2026 build month. Pearl-white monochrome, no boxes:
the centerpiece is a scroll-driven 3D processor package (CSS `preserve-3d`, no WebGL)
that decomposes as you scroll — lid off → CPU die raised → NPU core grid exposed →
eleven cores (one per shipped system) deploy outward into the index.

## Stack

- **Next.js 16** (App Router, TypeScript, Tailwind v4) — fully static output
- **motion** (motion.dev, MIT) — scroll-sync (`useScroll` + springs), layout expand/collapse, drag strip, hover physics
- **anime.js v4** — staggered reveals, count-up counters (`components/fx/`)
- **kokonutui** — ShimmerText, ParticleButton (`components/kokonutui/`, patched: `onClick` passthrough + Base-UI button typing)
- **bklit-ui** — area / bar / ring charts (`components/charts/`, shadcn registry)

## Layout

- `components/sections/decomposition.tsx` — the CPU→NPU scroll rig (520vh track, sticky stage)
- `components/sections/systems.tsx` — typographic project index, tap to expand
- `components/sections/impact.tsx` — measured-numbers-only charts (honest-data rule)
- `lib/data.ts` — all content: 11 projects, stats, arsenal

## Data honesty

Every chart number is real: shipped test counts at their merge dates
(GT-Code 553 · GT Assure 105 · Stride 65 · Glassbox 63) and live-measured
GT Assure runs. Chart grays validated with the dataviz six-checks
(CVD ΔE 18.0, contrast ≥ 3:1 on the pearl surface).

## Run

```bash
npm run dev        # dev server
npm run build      # static production build
npm run start      # serve the build
```
