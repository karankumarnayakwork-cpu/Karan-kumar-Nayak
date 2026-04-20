# Karan Kumar Nayak — Portfolio ✳

> *"I build things that live at the edge of AI & design."*

A personal portfolio website built with HTML, CSS, and JavaScript — featuring a cinematic site loader, custom cursor, animated page transitions, and a Formspree-powered contact form.

---

## 🌐 Live Sections

| # | Section | Description |
|---|---------|-------------|
| 00 | **Home** | Bio, disciplines, and key stats |
| 01 | **Works** | Selected projects with GitHub links |
| 02 | **About** | Skills, certifications, and background |
| 03 | **Experience** | Internships and open-source contributions |
| 04 | **Contact** | Contact form + direct links |

---

## ✨ Features

- **Cinematic Site Loader** — Animated progress bar with percentage counter and a video reveal at 94%, shown only on first visit (tracked via `sessionStorage`)
- **Custom Cursor** — Magnetic dot + lagging ring cursor with hover scaling on interactive elements
- **Page Transition Overlay** — Smooth full-screen loading overlay between section switches
- **Single-Page Architecture** — All sections managed in JS, no page reloads
- **Dynamic Hero Title** — Title in the chrome header updates per page
- **Contact Form** — Wired to Formspree with async submission and live button feedback
- **Looping Video Banners** — Ambient background videos on each section

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, animations) |
| Logic | Vanilla JavaScript (IIFE, no frameworks) |
| Fonts | Google Fonts — Playfair Display, DM Sans |
| Form Backend | [Formspree](https://formspree.io/) |
| Hosting | Vercel / Netlify / GitHub Pages |

---

## 📁 Project Structure

```
portfolio/
├── index.html          # All pages and chrome layout
├── style.css           # All styles, animations, and layout
├── script.js           # Loader, cursor, navigation, form logic
└── src/
    ├── site-loader.mp4 # Loader video (plays at 94%)
    ├── download1.mp4   # Home banner video
    ├── download2.mp4   # Works banner video
    ├── download4.mp4   # Experience banner video
    └── contact image.png
```

---

## 🚀 Getting Started

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/karankumarnayakwork-cpu/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # No build step needed — open index.html directly
   open index.html
   ```

   > ⚠️ Videos in `/src/` must be present locally for the loader animation and banners to work.

---

## ⚙️ Customization Guide

### Update Personal Info
Edit `index.html`:
- Name, bio, tagline → `#page-home > .home-bio`
- Stats (semester, focus area) → `.home-bio-stat` blocks

### Add / Edit Projects
In `#page-works`, duplicate a `.work-card` block and update:
- `.work-title` — Project name
- `.work-desc` — Short description
- `.work-tag` — Category label
- `.work-footer > .work-arrow > a[href]` — GitHub / live link

### Update Skills & Certifications
Edit the `.chip` tags under each `skills-lbl` group and the `.cert-card` blocks inside `.cert-section` in `#page-about`.

### Add Experience
In `#page-experience`, duplicate an `.exp-card` block and fill in role, company, period, and description.

### Swap Videos
Replace files in `/src/` keeping the same filenames, or update the `src` attribute on each `<video>` tag in `index.html`.

### Change the Contact Form Endpoint
In `script.js`, replace the Formspree URL:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... });
```
Get a free endpoint at [formspree.io](https://formspree.io).

---

## 🧠 JavaScript Architecture

All logic lives in a single IIFE in `script.js` with four responsibilities:

```
script.js
├── Site Loader    → runLoader()   — progress bar, video at 94%, sessionStorage flag
├── Custom Cursor  → mousemove     — RAF animation loop for lagging ring effect
├── Navigation     → goTo()        — overlay transition + DOM page switch
└── Contact Form   → fetch()       — async POST to Formspree, button state updates
```

---

## 🔖 Featured Projects

| Project | Category | Link |
|---------|----------|------|
| **Mr. Clarke's Office** | IIITB Hackathon — Document Intelligence + CV Surveillance | [GitHub ↗](https://github.com/karankumarnayakwork-cpu/IIIT_Hackathon_prorject) |
| **Silent Siren** | ML — Gesture Detection | [GitHub ↗](https://github.com/karankumarnayakwork-cpu/Silent-Siren) |

---

## 🏅 Certifications

- IBM — *Fundamentals of AI Agents Using RAG and LangChain* (2026)
- IBM — *Python for Data Science, AI & Development* (2026)
- GFG — *Mastering Generative AI and ChatGPT* (2025)
- Apna College — *Fullstack Web Development* (2025)
- Apna College — *AI/ML Engineer* (2026)

All credentials → [LinkedIn Certifications ↗](https://www.linkedin.com/in/karankumarnayak/details/certifications/)

---

## 💼 Experience

| Period | Role | Organization |
|--------|------|--------------|
| Apr – Jul 2025 | Google Cloud Arcade Facilitator | Google Cloud |
| Jun – Aug 2025 | AIML Intern | Internselite |
| Jul – Aug 2025 | Data Analytics Intern | CTTC Bhubaneswar |
| Jul – Oct 2025 | Open Source Contributor | GirlScript Summer of Code |

---

## 📬 Contact

**Karan Kumar Nayak** — B.Tech CSE, 6th Semester | Bhubaneswar, India

- 📧 [karankumarnayakwork@gmail.com](mailto:karankumarnayakwork@gmail.com)
- 💼 [linkedin.com/in/karankumarnayak](https://www.linkedin.com/in/karankumarnayak)
- 🐙 [github.com/karankumarnayakwork-cpu](https://github.com/karankumarnayakwork-cpu)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by Karan Kumar Nayak — Bhubaneswar © 2026
