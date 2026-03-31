# Design System Specification: The Organic Authority

## 1. Overview & Creative North Star
**Creative North Star: "The Grounded Architect"**

This design system moves away from the "industrial-tech" aesthetic of modern agriculture and leans into a "High-End Editorial" experience. It treats business development and farming as a sophisticated craft. We break the "template" look by utilizing **intentional asymmetry**—where imagery and text containers overlap slightly—and a **tonal-first architecture**. 

The system rejects the rigid, boxed-in nature of standard dashboards. Instead, it utilizes high-contrast typography scales (massive `display-lg` headers paired with delicate `label-md` metadata) to create a sense of professional authority and "white-glove" service.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the earth but polished for the boardroom. We use **Deep Earth Greens** (`primary`) for authority and **Warm Soil Browns** (`secondary`) for human-centric groundedness.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. 
Boundaries must be defined solely through background color shifts. To separate a testimonial section from a feature grid, transition from `surface` to `surface-container-low`. This creates a seamless, "molded" look rather than a fragmented one.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of organic material.
*   **Base:** `surface` (#fafaf5) – The canvas.
*   **Elevated Containers:** Use `surface-container-low` for large content blocks and `surface-container-lowest` (#ffffff) for high-focus cards.
*   **Nesting:** An inner element (like a quote) should use a tier *higher* than its parent container to create "soft depth."

### The "Glass & Gradient" Rule
To elevate the "Innovative" aspect of the brand:
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface-variant` with a 60% opacity and a `24px` backdrop-blur. 
*   **Signature Gradients:** For primary CTAs, use a subtle linear gradient from `primary` (#154212) to `primary_container` (#2d5a27) at a 135° angle. This adds a "living" quality to the growth-oriented theme.

---

## 3. Typography: The Editorial Voice
We pair **Manrope** (Headlines) for its geometric precision with **Work Sans** (Body) for its humanist, approachable readability.

*   **Display (Manrope):** Use `display-lg` (3.5rem) for hero statements. Tighten letter-spacing to `-0.02em` to create a bold, "stamped" look.
*   **Headlines (Manrope):** `headline-lg` should be used for section titles to command respect.
*   **Body (Work Sans):** `body-lg` (1rem) is the workhorse. Use `on_surface_variant` (#42493e) for secondary body text to reduce visual vibration and increase "warmth."
*   **Labels (Work Sans):** `label-md` (0.75rem) should always be in All-Caps with `+0.05em` letter spacing when used for categories or tags to maintain a professional, "ledger-like" feel.

---

## 4. Elevation & Depth
Traditional drop shadows are too "digital." We use **Tonal Layering** and **Ambient Light.**

*   **The Layering Principle:** Depth is achieved by stacking. A card in `surface-container-lowest` sitting on a `surface-container` background provides all the "lift" needed.
*   **Ambient Shadows:** If a floating element is required (e.g., a FAB), use a shadow tinted with `surface_tint` (#3b6934) at 5% opacity, with a 32px blur and 8px Y-offset. It should feel like a soft shadow on a field, not a shadow on a screen.
*   **The "Ghost Border" Fallback:** If a divider is functionally required, use `outline_variant` at **15% opacity**. It should be felt, not seen.
*   **Subtle Textures:** Incorporate a 5% opacity grain overlay or a micro-topographic map pattern (using `outline_variant`) on `surface-container-high` sections to mimic the tactile feel of soil and paper.

---

## 5. Components

### Buttons
*   **Primary:** High-contrast `primary` background with `on_primary` text. Use `xl` (0.75rem) roundedness for a modern, approachable feel.
*   **Secondary:** `secondary_container` background. No border.
*   **Tertiary:** Text only using `primary` color, with a 2px underline that appears on hover.

### Cards & Lists
*   **Forbid Divider Lines:** Use `16` (4rem) vertical spacing or a shift to `surface-container-low` to separate items.
*   **Asymmetric Cards:** Use `lg` (0.5rem) roundedness but occasionally break the grid by allowing images to bleed 20px outside the card boundary for a custom, "scrapbook-professional" feel.

### Input Fields
*   **Style:** Minimalist. No bottom line or full box. Use `surface-container-high` as a solid background fill with a `sm` (0.125rem) rounded bottom edge.
*   **States:** On focus, transition the background to `surface-container-highest` and add a 2px `primary` bottom-accent.

### Signature Component: The "Growth Progressor"
*   A custom stepper component for business development tracking. Instead of dots, use an organic leaf-vein line style using `primary_fixed` to connect stages, symbolizing sustainable growth.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text blocks are offset from images.
*   **Do** use large amounts of "White Space" (or "Cream Space" using `surface`). Use the `20` (5rem) and `24` (6rem) spacing tokens liberally between sections.
*   **Do** mix `tertiary` (#393c00) accents into data visualizations to reflect different stages of harvest/growth.

### Don’t:
*   **Don't** use pure black (#000000) for text. Always use `on_surface` (#1a1c19) to maintain the "Earth" tonal quality.
*   **Don't** use 1px dividers to separate list items; let the `body-md` line height and `4` (1rem) spacing create the rhythm.
*   **Don't** use sharp 90-degree corners. Even the most "professional" element should have at least the `DEFAULT` (0.25rem) roundedness to feel grounded and organic.