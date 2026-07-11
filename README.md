# Internship_project_variant1
# IronCore — Variant 1: Elite Minimal

A premium, high-end website redesign for **IronCore**, a fictional strength and performance gym brand. This variant represents a refined, minimal design direction — clean structure, generous whitespace, and a confident, premium tone.

## 🎯 Project Context

This is **Variant 1 of 2** for the Brand Website Redesign Challenge (Internship Module 1). Both variants represent the same brand but use completely different layouts, visual styles, typography, and user experience.

## 🎨 Design Direction

**Theme:** Elite Minimal — premium, measured, results-driven

| Element | Choice |
|---|---|
| Background | Obsidian Black (`#0B0C0E`) |
| Primary Accent | Ember Gold (`#B8863B`) |
| Secondary Accent | Iron Red (`#7A1F1F`) |
| Headings Font | Syne (bold, geometric) |
| Body Font | Inter (clean, readable) |
| Layout Style | Symmetric grid, generous whitespace, structured sections |
| Animation | Subtle scroll-reveal fades, smooth hover transitions |

## 📄 Pages

- `index.html` — Home
- `about.html` — Brand story, mission & values, milestones
- `programs.html` — Training programs offered
- `membership.html` — Pricing tiers & FAQ
- `trainers.html` — Coach profiles
- `contact.html` — Contact form, location, map

## 🛠️ Tech Stack

- HTML5 (semantic markup)
- Tailwind CSS (via CDN)
- Custom CSS3 (design tokens, animations, reusable components)
- Vanilla JavaScript ES6+ (scroll animations, mobile menu, form validation)
- Fully responsive — mobile-first breakpoints (`sm`, `md`, `lg`)

## 📁 Folder Structure

```
variant-1/
├── index.html
├── about.html
├── programs.html
├── membership.html
├── trainers.html
├── contact.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
```

## ▶️ Running Locally

1. Clone or download this folder
2. Open `index.html` in a browser, or use the **Live Server** extension in VS Code for the best experience (handles relative paths correctly)

## ✨ Key Features

- Semantic HTML5 structure (`header`, `nav`, `section`, `footer`)
- Reusable CSS component classes (`.btn-primary`, `.card-panel`, `.eyebrow`)
- Scroll-triggered reveal animations via `IntersectionObserver`
- Client-side contact form validation (name, email format, message length)
- Sticky navbar with scroll-based background change
- Mobile hamburger menu
