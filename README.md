# Whistle Aligners — Frontend Assessment

A fully responsive React landing page for Whistle, a dental aligners brand, built as part of the Unbundl Frontend Developer Assessment.

## Setup & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- **React 18** with functional components and hooks
- **Vite** for fast development
- **Plain CSS** (no UI libraries) — organized per component
- **Inter** font from Google Fonts

## APIs Used

- **DummyJSON** (`https://dummyjson.com/products`) — used in the **Product Showcase** section to fetch product data dynamically, and in **Happy Smilers** (`/users`) to fetch testimonial user data.
- **DummyJSON** (`https://dummyjson.com/users`) — used for the Happy Smilers testimonial cards.

All API calls use `useEffect` + `useState` with visible loading (skeleton UI) and graceful error states.

## Sections Built

1. **Navbar** — sticky, responsive with hamburger menu
2. **Hero** — offer banner, headline, lead capture form, Clove Dental CTA
3. **Marquee** — animated scrolling offer banner
4. **Product Showcase** — dynamic product card via DummyJSON API
5. **Results You'll Love** — before/after cards with **filter tabs interaction**
6. **Why Whistle?** — 4 feature cards with hover effects
7. **The Whistle Difference** — 3 USP points with image
8. **Comparison Table** — Whistle vs Other Brands with expand/collapse rows
9. **How It Works** — 4-step process with video thumbnail
10. **Doctor-Led** — trust-building section with CTA
11. **Happy Smilers** — dynamic testimonial cards via DummyJSON API
12. **FAQ** — accordion expand/collapse
13. **Footer** — links, contact, social icons

## Interactions

- **Filter tabs** on Results section (filter by concern type)
- **FAQ accordion** expand/collapse
- **Comparison row** expand for details
- **Hover states** on all cards and buttons

## Approach

I replicated the Figma design (Whistle Aligners website) as closely as possible using the screenshots provided. The layout uses CSS Grid and Flexbox for responsiveness across all screen sizes. Dynamic data is fetched from DummyJSON and mapped to fit the design's content structure. All loading states use skeleton UI that matches the card shapes, and errors display friendly messages without breaking the layout.

## What I Would Improve Given More Time

- Add smooth scroll-triggered reveal animations for each section
- Implement a proper image carousel/slider for Happy Smilers
- Add form validation with real-time feedback on the hero form
- Deploy to Vercel for a live preview link
