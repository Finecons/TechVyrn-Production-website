# TechVyrn — Applied AI Systems

A complete, state-of-the-art multi-page web application implemented faithfully from the Figma design (**TechVyrn.in**, File Key: `Z61IEMxsXa8kHWJFMVfD7l`).

## Pages Implemented

1. **`01 — Home` ([`index.html`](file:///e:/Company/Finecons/TechVyrn/index.html))**:
   - Hero with high-contrast gradient headline (*"Intelligence that works as hard as you do."*), announcement badge, and interactive 3D hero illustration.
   - Industries strip, 4-column key metrics, 4-product preview grid (*Vyrn Agents, Insight, Vision, Studio*), 4-step process timeline, *"The TechVyrn Promise"* quote, and CTA banner.
2. **`02 — Solutions` ([`solutions.html`](file:///e:/Company/Finecons/TechVyrn/solutions.html))**:
   - Hero header with quick jump filter pills (`Vyrn Agents`, `Vyrn Insight`, `Vyrn Vision`, `Vyrn Studio`).
   - Deep-dive alternating product sections with authentic vector graphics:
     - **Vyrn Agents**: Autonomous workflow automation & approval illustration.
     - **Vyrn Insight**: Forecasting & anomaly detection chart illustration.
     - **Vyrn Vision**: Industrial defect scanning & document AI visual feed.
     - **Vyrn Studio**: Custom LLM fine-tuning, guardrail evaluation & knowledge grounding.
   - 3x2 Industries Matrix (Fintech & BFSI, Healthcare, Retail & e-commerce, Logistics, Manufacturing, Education).
   - *"Not sure which product fits?"* CTA banner.
3. **`03 — About` ([`about.html`](file:///e:/Company/Finecons/TechVyrn/about.html))**:
   - Narrative hero with orbital team architecture graphic (Engineers, Data Scientists, Designers, Strategists).
   - Side-by-side Mission & Vision gradient cards.
   - 4-card core principles grid (*Clarity over hype*, *Ship, then sharpen*, *Responsible by default*, *Partners, not vendors*).
   - 4-point value proposition (*Senior team on every project*, *Outcome-based milestones*, *Your data and IP stay yours*, *Model-agnostic by design*).
   - Careers teaser banner with open job roles & direct application link.
4. **`04 — Contact` ([`contact.html`](file:///e:/Company/Finecons/TechVyrn/contact.html))**:
   - 2-column contact hub with direct enquiry channels (General, Partnerships, Careers, Location, Response time).
   - Interactive message form with interest pill selectors, timeline dropdown, and live submission confirmation.
   - Expandable FAQ accordion answering enterprise customer questions.

## Comprehensive Responsive Design System

The layout is engineered to look optimal across every screen dimension:

- **🖥️ Ultrawide Monitors & 4K Displays (>= 1440px)**:
  - Container scales proportionally up to `max-width: 1440px` at `width: 93%`.
  - Balanced side margins eliminating excessive empty space while preventing horizontal overstretching.
  - Typography scales cleanly with `clamp()` units.
- **💻 Laptops & Standard Desktops (1081px – 1439px)**:
  - Container set to `max-width: 1280px` (`width: 94%`).
  - Balanced multi-column layout with 4-column metrics, 2x2 cards, and alternating product rows.
- **📱 Landscape Tablets & Compact Laptops (901px – 1080px)**:
  - 2-column stacked grids for heroes and products.
  - 2x2 grids for stats, process steps, and values.
  - 2x3 grid for industries.
- **📱 Portrait Tablets (768px – 900px)**:
  - Centered hero illustration cards.
  - Full-width contact forms and centered FAQ accordion.
- **📱 Mobile Devices (320px – 767px)**:
  - Single-column fluid stack across all sections.
  - Slide-down mobile drawer navigation with animated `☰` / `✕` icon toggle and outside click closing.
  - Full-width touch-friendly buttons (`min-height: 48px`).
  - Fluid typography scale (`clamp(32px, 8vw, 44px)`).
  - Absolute zero horizontal overflow (`overflow-x: hidden`).

## Getting Started

### Local Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Multi-page Production Build
```bash
npm run build
```
Outputs optimized production bundle to `/dist`.
