# Handoff: DP Metric — Marketing Homepage ("Deep Water")

## Overview
A full-dark marketing homepage for **DP Metric**, a predictive hull & propeller maintenance platform for ship operators. The page sells the core idea "clean on condition, not on the calendar": ML-driven fouling detection, a standardized Vessel Technical Index (VTI), a live fleet dashboard, a 4-step "how it works", per-vessel pricing, and a demo-request contact form. Single long-scroll page with a sticky nav and a footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior, **not production code to copy verbatim**. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, Svelte, etc.) using its established components, styling approach, and conventions. If no front-end environment exists yet, pick the most appropriate framework and implement there.

Two implementation notes specific to this prototype:
- The source is a "Design Component" (`.dc.html`). The only DC-specific machinery is: a `{{ mainClass }}` template hole on `<main>`, and a `class Component` with `renderVals()` / `componentDidMount()`. In a real app, `renderVals()` becomes the computed className and `componentDidMount()` becomes a `useEffect`/`onMounted` hook. Everything inside `<x-dc>…</x-dc>` is plain HTML.
- Inline styles are used throughout (a constraint of the prototype tool). **Convert these to the codebase's normal styling system** (CSS modules, Tailwind, styled-components, etc.). The design tokens below give you the values.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions. Recreate the UI pixel-accurately using the codebase's libraries, then wire the interactions described below.

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Background (page) | `#0A1A2E` | Body background, deepest navy |
| Surface 1 | `#0F2440` | Stats ribbon, "how it works" + pricing section bg, cards, form |
| Surface 2 (card) | `#0B1E38` | Chart/gauge cards, console frame |
| Footer bg | `#061320` | Footer only |
| Primary / brand teal | `#12AEBD` | CTAs, links-on-hover, accents, focus ring |
| Teal hover | `#15C3D4` | Primary button hover |
| Teal light | `#3FC6D2` | Eyebrow accents, success text, sonar lines |
| Teal dark (gauge) | `#0C95A3` | Gauge arc gradient start |
| Amber / alert | `#E89C12` | Fouling "detected" curve, gauge needle |
| Text primary | `#FFFFFF` | Headings, key copy |
| Text body | `rgba(255,255,255,0.52)` | Section body copy |
| Text muted | `rgba(255,255,255,0.45)` | Stat captions |
| Text faint | `rgba(255,255,255,0.35)` | Footer links, "new hardware" |
| Hairline border | `rgba(255,255,255,0.06–0.09)` | Section dividers, card borders |
| Input bg | `#0A1A2E` | Form fields |

### Typography
- **Display / headings:** `Space Grotesk` (400, 500, 700)
- **Body / UI:** `IBM Plex Sans` (400, 500, 600)
- **Mono / eyebrows / data labels:** `IBM Plex Mono` (400, 500)
- Google Fonts: `Space+Grotesk:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500`

Type scale (key values):
- Hero H1: `clamp(40px, 5.5vw, 72px)`, weight 700, line-height 1.05, letter-spacing -0.028em
- Section H2: `clamp(28px, 3.5vw, 46px)`, weight 700, line-height 1.08, letter-spacing -0.025em
- "How it works" / pricing H2: `clamp(30px, 4vw, 52–56px)`
- Eyebrow label: IBM Plex Mono, 11px, letter-spacing 0.1em, uppercase, color `#12AEBD`
- Body: 16px, line-height 1.65–1.7
- Stat numbers: IBM Plex Mono, 40px, weight 500, letter-spacing -0.03em
- Capability chips: IBM Plex Mono, 11px, uppercase, letter-spacing 0.06em

### Spacing / radius / shadow
- Content max-width: `1280px`, centered; section horizontal padding `48px` (→ `20px` under 860px)
- Section vertical padding: `100px` (hero `96px`, min-height `90vh`)
- Card radius: `16px`; button/input radius: `8px`; chips: `6px`; pills/badges: `999px`
- Card shadow: `0 40px 80px -28px rgba(0,0,0,0.6)`
- Nav height: `64px`, sticky, `rgba(10,26,46,0.92)` + `backdrop-filter: blur(16px)`

### Breakpoints
- `max-width: 900px` — CTA grid & pricing grid → single column
- `max-width: 860px` — nav links hide (mobile demo CTA shows), all 2-col grids → 1 col, console gets horizontal scroll
- `max-width: 480px` — stats ribbon → 1 col, full-width buttons

---

## Sections (top → bottom)

1. **Sticky nav** — Logo (inline SVG wordmark "DP Metric" with a teal sonar/heartbeat glyph + ship-hull outline). Right-aligned links: Product, How it works, Pricing, Blog, About + a teal "Request a demo" button. Under 860px links collapse to a single "Demo" button.

2. **Hero** — min-height 90vh. Left-aligned copy over a full-bleed ship photo anchored right (`assets/hero-ship.jpg`). Layered backgrounds: ocean-gradient fallback, a left→right navy scrim for legibility, a bottom fade into the stats ribbon, and a faint animated "sonar sweep" SVG (concentric circles, `sonar-breathe` 5s loop) low-left. Pill badge ("Predictive hull & propeller maintenance"), H1 "Clean on condition, / not on the calendar.", sub-paragraph, two CTAs (teal "Request a demo", ghost "See how it works").

3. **Stats ribbon** (`#0F2440`) — 4-column grid with vertical hairline dividers: `~40%`, `41 d`, `0.88`, `0 new hardware`, each with a caption. The first three numbers **count up** when scrolled into view (see Interactions). The `%` on `~40%` is sized to the full height of the number (40px); the `d` and `new hardware` units are smaller suffixes.

4. **Fouling detection** (`#fouling`) — 2-col split (0.88fr / 1.12fr). Left: eyebrow + H2 "ML that catches fouling before your fuel bill does" + body + capability chips (Random forest, LSTM, Change-point detection, Weather normalized, ISO 19030). Right: a card with an **inline-SVG line chart** — teal dashed clean-hull baseline, amber power-ratio curve rising after a dashed "DETECTED / Day 61" marker, shaded detection region, legend.

5. **Vessel Technical Index** (`#vti`) — 2-col split (gauge left, copy right). Left: card with an **inline-SVG semicircular gauge** reading "87 / VTI SCORE" (teal gradient arc, amber needle) + a "GOOD CONDITION" pill. Right: eyebrow + H2 "A standardized score for every hull in your fleet" + body + chips (ISO 19030, Hull/propeller separated, Weather corrected, Fleet benchmarking, EEDI reference).

6. **Features / Digital twin dashboard** (`#product`) — 2-col (0.82fr / 1.18fr). Left: eyebrow + H2 "Your entire fleet's performance, continuously" + body + pill chips. Right: a **live console carousel** — an `<iframe>` embedding the real DP Metric console UI (`ui_kits/console/index.html`) scaled to fit, cycling 3 views (Fleet overview, Alerts & worklist, Vessel detail) via `postMessage({dpmView})`, with prev/next arrows, dot tabs, and a play/pause button. Auto-advances every 4.2s, only while in view. *In a real app, replace this with the actual product screenshots or an embedded live demo.*

7. **How it works** (`#how-it-works`, `#0F2440`) — eyebrow + H2 + a 4-column numbered list (01 Ingest, 02 Process, 03 Analyze, 04 Alert) with left dividers. Hover/focus a step → its big number lights up teal with a glow.

8. **Pricing** (`#pricing`) — eyebrow + H2 + 3-card grid sharing 1px hairline gaps: **Starter $390/vessel/mo**, **Fleet $290** (featured: teal inset ring + "Most popular" badge), **Enterprise Custom**. Each: tier label, price, blurb, 4 checkmarked features, CTA button.

9. **CTA + contact** (`#demo`) — 2-col. Left: eyebrow + H2 "Ready to clean on condition?" + body + 3 checkmark bullets. Right: a contact form (Name + Company row, Work email, Fleet size `<select>`, message `<textarea>`, submit). Teal focus ring on fields; on submit it validates, disables fields, hides the button, and shows an inline success message.

10. **Footer** (`#061320`) — small logo, footer nav links, `© 2025 DP Metric`.

---

## Interactions & Behavior

- **Scroll reveal** — Content blocks tagged `.reveal` start hidden (`opacity:0`, transform offset) and animate in when they enter the viewport (rect-based check on scroll/resize; reveals what's already on screen at load). Transition: `opacity .7s` + `transform .7s` `cubic-bezier(.2,.7,.2,1)`. Each block reveals once. Respect `prefers-reduced-motion` (skip → show immediately). The default style is **Rise (fade-up)**, i.e. fade + 30px upward translate. Variants available: Fade (opacity only), Slide-in (from left -34px), Zoom (scale 0.955→1). These were exposed as tweaks `scrollAnimation` (on/off) and `animationStyle` (Rise/Fade/Slide in/Zoom) — implement as props/config if useful, otherwise hardcode Rise.
- **Stat count-up** — `~40%`, `41 d`, `0.88` count from 0 to target over 1400ms with an ease-out-cubic, triggered once at 50% visibility (IntersectionObserver). `0.88` keeps 2 decimals. Reduced-motion → show final value immediately.
- **How-it-works hover** — step number → `#12AEBD` + `text-shadow: 0 0 28px rgba(18,174,189,0.55)`, 0.3s.
- **Console carousel** — auto-advance 4.2s while in view; arrows/dots navigate; play-pause toggles; iframe content switched via `postMessage`; iframe scaled to container width from a fixed 1320×760 base.
- **Contact form** — `preventDefault`, `reportValidity()`, then disable fields + swap submit button for a success line. (No real backend in the prototype — wire to your endpoint.)
- **Smooth scroll** — `html { scroll-behavior: smooth }`; nav anchors jump to section ids.

## State / Logic to port
- `mainClass` = `anim-on <eff>` or `anim-off`, derived from the two animation props — controls which reveal variant is active.
- Mount logic (→ `useEffect`): scroll-reveal observer, stat count-up observer, console carousel controller, contact-form submit handler. All currently in `componentDidMount()`.

## Assets
- `assets/hero-ship.jpg` — hero background photo (anchored right; an ocean gradient shows as fallback). Included in this bundle.
- **Console iframe** — the Features section embeds `ui_kits/console/index.html` (the separate DP Metric console UI kit, **not** included here). In production, swap for real product screenshots, a video, or an embedded live demo.
- Logo, chart, gauge, sonar, and all icons are **inline SVG** in the markup — copy them directly (no image files needed).
- Fonts load from Google Fonts (see Typography).

## Files in this bundle
- `MarketingDark.dc.html` — the full design (markup + styles + interaction logic). Everything inside `<x-dc>…</x-dc>` is the page; the trailing `<script>` holds the count-up / carousel / reveal / form logic to port.
- `assets/hero-ship.jpg` — hero photo.
- `screenshots/` — reference renders of each section:
  - `01-hero.png`, `02-fouling-detection.png`, `03-vti.png`, `04-features-dashboard.png`, `05-how-it-works.png`, `06-pricing.png`, `07-cta-contact.png`
  - Note: the Features screenshot shows an empty console frame — the embedded console UI kit is intentionally **not** part of this handoff (replace with real product screens).
