# Hopereno Design System

**Hopereno（好日子室內裝修）** is a Taipei residential renovation studio. The brand promise is calm competence:
natural light, pale timber, cement-grey walls, real construction photography, and a lot of empty space.
The design language is **Japandi / wabi-sabi with MUJI as the north star** — warm, professional, trustworthy;
never luxurious, never salesy.

> 自然、溫暖、專業、舒適、有質感 — 而不是豪華或商業感過重。

## Sources given to me

| Source | Status |
|---|---|
| Brand visual-rules document (colours, type, photography, icons, buttons, cards, layout) — pasted in the brief | ✅ the ground truth for everything here |
| `uploads/manrope-*.otf` (7 weights) | ✅ copied to `assets/fonts/` |
| `uploads/Inter_*.ttf` (Inter 18/24/28pt + variable) | ✅ 18pt Regular/Medium/SemiBold/Italic copied to `assets/fonts/` |
| `uploads/._Final Logo.ai`, `uploads/._Hopereno Logo mockup 1.jpg`, `…mockup 2.jpg` | ❌ **unusable** — these are macOS AppleDouble metadata stubs (`._` prefix), not the real files. No logo artwork reached the project. |
| Codebase / Figma | none provided |

**No logo was recoverable, so none was drawn.** Everywhere a mark would go, the wordmark **HOPERENO** is set in
Manrope Bold with 0.14–0.16em tracking (see the *Wordmark (placeholder)* brand card). Please re-upload
`Final Logo.ai` (or an SVG/PNG export) — zip it first so macOS doesn't strip it to a `._` stub.

No product photography was supplied either; the UI kit uses neutral material-gradient placeholders labelled with
what the real photo should be.

---

## Content fundamentals

**Language.** Traditional Chinese (Taiwan) is primary; English appears only as section overlines
(`OUR WORK`, `PROCESS`, `CONTACT`) and the wordmark. Never translate body copy into English on the
Chinese site — English is decoration and rhythm, not information.

**Voice.** Quiet, first-person plural, concrete. "我們" for the studio, "您" for the client — polite but not stiff.
The brand never boasts; it states what it does and what it costs.

- Good: 「先聊聊，再談預算」·「免費現場丈量與需求訪談，我們會給您一份誠實的預算區間。」
- Good: 「我們不趕工，也不讓您猜進度。」
- Avoid: 「頂級奢華」「業界第一」「限時優惠」「打造夢想豪宅！」

**Headlines** are short and human — 6–14 characters, often two lines, no punctuation at the end
(「把家還給／安靜的日常」). **Body** is 1–3 sentences, full-width sentences ending in 。

**Numbers are specific and verifiable**: 92 工作天, NT$ 380–420 萬, 防水五年, 回覆 ≤ 1 天. Never "many", never "up to".

**Casing.** English overlines are UPPERCASE with 0.16em tracking. English sentences are sentence case. No ALL-CAPS
headlines, no Title Case Everywhere.

**Punctuation.** Full-width 、。（） in Chinese; a space either side of Latin/numerals inside Chinese runs
(「32 坪」, 「NT$ 380 萬」). Em-dashes are used sparingly, 「──」 in Chinese.

**No emoji. Ever.** Not in UI, not in marketing copy, not as bullets. Icons carry that job.

**CTAs** are verbs with an object: 「預約免費丈量」「看完工案例」「詢問這項服務」. Never 「立即點擊」 or 「Learn more」 alone.

---

## Visual foundations

**Colour.** Four brand values do the heavy lifting — Ivory White `#F8F6F2` (page), Light Wood `#E8E1D5`
(sections & cards), Warm Beige `#D3CBBC` (brand blocks), Charcoal `#3B3936` (type, buttons, icons), with
Warm Gray `#8B8478` for secondary text. Everything else in `tokens/colors.css` is a derived step in the same
warm neutral ramp. Status hues are desaturated naturals — sage, ochre, terracotta — and are **derived, not
brand-specified**; they never appear in marketing surfaces, only in UI feedback. Saturated blue/red/green is banned.
Backgrounds alternate ivory → light wood → ivory; a page uses at most two background tones plus one charcoal panel.

**Type.** Manrope for display and headings (Bold 700 / SemiBold 600, tracking −0.02em), Inter for body and UI
(Regular/Medium, line-height 1.7). Chinese falls back to Noto Sans SC / HarmonyOS Sans / MiSans — neutral and
modern, never calligraphic or rounded. Scale: 64 / 48 / 40 / 32 / 24 / 20 headings, 18 / 16 / 14 body, 12 overline.
Measure caps at ~56ch.

**Layout.** 12-column grid, 1280px container, 1200px content, 24px gutters. Sections breathe at 96px (standard)
or 120px (hero/feature). Imagery outweighs text on every page. One idea per section. Header is sticky, 80px tall,
translucent ivory with a 12px backdrop blur — the only fixed element and the only use of blur outside the
dialog scrim.

**Backgrounds & imagery.** Flat colour fields, never gradients-as-decoration. Photography is the only imagery:
natural daylight, warm-white balance, pale timber, cement, ivory rooms, real sites — no HDR, no heavy grading,
no filters, no stock-looking interiors. Material textures (timber grain, cement, linen, plaster) may appear as
large full-bleed surfaces, never as repeating patterns behind text.

**Corners & borders.** Buttons 14px, inputs 12px, images 16px, cards 18px, modals 20px, pills 999px.
Borders are 1px hairlines in `--border-subtle` `#E4DED4`; a charcoal 1px border only marks a secondary button or a
focused field. Content is separated by whitespace first, hairline second, border last.

**Shadow.** Barely there: `0 2px 8px rgba(59,57,54,.05)` at rest, `0 6px 20px rgba(59,57,54,.06)` on a hovered card,
`0 16px 40px rgba(59,57,54,.08)` for modals. No coloured, no inner shadows. Focus is a `3px rgba(59,57,54,.18)` ring.

**Motion.** One easing curve, `cubic-bezier(.2,.6,.3,1)`. 120ms hover tints, 200ms buttons/borders/fades,
320ms cards and accordions, 600ms photo reveals. Fades and small translates only — no bounce, no spring,
no parallax, no scale-in.

**States.** Hover deepens fill (charcoal → `#514E49`) or drops a warm tint (`--clay-200`) behind a ghost control;
links lose 18% opacity and gain a charcoal underline. Press goes one step darker (`#2A2926`), never scales.
Cards lift 2px on hover and only when they navigate somewhere. Disabled is 40–45% opacity, never a grey re-colour.

**Transparency & blur** are reserved for exactly two places: the sticky header (86% ivory + 12px blur) and the
dialog scrim (`rgba(42,41,38,.32)` + 3px blur).

---

## Iconography

**Lucide, 2px stroke, rounded caps, monochrome charcoal** — this matches the brand rule
（2px 線性圖標、圓角、簡潔幾何、Monochrome）exactly. No icon set was supplied with the brand materials, so Lucide is a
**flagged substitution**: it is loaded from CDN, `https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js`, and wrapped by
the `Icon` component. If Hopereno owns a custom icon set, send it and I will swap the wrapper's source.

- Default size 20px in UI, 28px for service/feature glyphs, 16px inside small buttons and captions.
- Colour is always `currentColor` resolving to charcoal, warm gray, or ivory on dark. Icons are never brand beige.
- Never filled, never duotone, never 3D, never gradient. No emoji and no Unicode dingbats as icons.
- Common glyphs in this brand: `ruler`, `hammer`, `paint-roller`, `pencil-ruler`, `file-signature`, `search-check`,
  `key-round`, `sofa`, `leaf`, `phone`, `mail`, `map-pin`, `calendar-check`, `arrow-right`, `arrow-up-right`.

---

## Index

| Path | What |
|---|---|
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/` | `fonts.css` `colors.css` `typography.css` `spacing.css` `radius.css` `elevation.css` `motion.css` `base.css` |
| `assets/fonts/` | Manrope (6 weights, OTF) + Inter (Regular/Medium/SemiBold/Italic, TTF) |
| `guidelines/*.card.html` | 18 foundation specimen cards — Colors, Type, Spacing, Brand |
| `components/` | React primitives, grouped by concern (below) |
| `ui_kits/website/` | Clickable 5-screen recreation of the marketing site |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skills entry point |

### Components

- **core/** — `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Tag`, `Divider`
- **forms/** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **navigation/** — `Tabs`, `Breadcrumb`, `Accordion`
- **feedback/** — `Dialog`, `Tooltip`, `Toast`
- **layout/** — `SectionHeader`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (when & how to use).

#### Intentional additions

No component inventory was supplied — the brand document specifies only Buttons and Cards — so the set above is a
standard primitive kit sized to what the site actually needs. Two entries are explicit additions:

- `Icon` — a wrapper so every glyph inherits the 2px Lucide standard instead of being hand-placed.
- `SectionHeader` — the overline/heading/lede pattern recurs on every section of the site; codifying it keeps the
  96–120px rhythm consistent.

### Known gaps

1. **No logo file.** Wordmark placeholder in use.
2. **No photography.** UI kit uses labelled material placeholders.
3. **Status colours, the neutral ramp between the four brand values, spacing/radius/shadow/motion scales** are
   derived by me from the brand rules, not supplied. They are marked "derived" in `tokens/colors.css`.
4. **Icon set substituted** (Lucide) — see Iconography.
