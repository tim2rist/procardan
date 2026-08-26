<h1 align="center">
  🔧 ProCardan
</h1>

<p align="center">
  <strong>Kompleksowa Regeneracja i Produkcja Wałów Napędowych</strong>
</p>

<p align="center">
  <a href="https://walynapedowe.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-walynapedowe.vercel.app-22c55e?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  A modern, high-performance landing page for a specialized drive shaft regeneration, production, and dynamic balancing service operating across Poland. Built for speed, SEO, and conversion — every section is crafted to build trust and generate leads.
</p>

---

## ✨ Key Highlights & Features

| Feature | Detail |
|---|---|
| ⚡ **Express Response** | 1–4h express turnaround; 24–48h standard service window |
| ⚖️ **High-Precision Balancing** | Dynamic balancing diagnostics at **3200 RPM** with tolerance **< 0.1 g** |
| 🚚 **Nationwide Pickup** | 24/7 client dispatch and logistics coverage across all of Poland |
| 🗂️ **Service Catalog** | Interactive, filterable service catalog with full-detail cards |
| 🖼️ **Dynamic Gallery** | Category-filtered photo gallery showcasing real repair cases |
| 📬 **Contact Forms** | Integrated multi-channel contact with form validation & email dispatch |
| 🍪 **GDPR Compliant** | Cookie consent banner with granular category control |
| 📱 **Mobile-First CTA** | Persistent mobile call-to-action for instant quote requests |
| 🔍 **SEO Optimized** | Semantic HTML5, structured keyword section, and meta tags |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Role |
|---|---|---|
| [React](https://react.dev/) | `^19.2.7` | UI component library |
| [Vite](https://vite.dev/) | `^8.1.1` | Build tool & dev server |
| Vanilla CSS | — | Styling & animations (custom design system in `index.css`) |

### UI & Icons
| Technology | Version | Role |
|---|---|---|
| [Lucide React](https://lucide.dev/) | `^1.23.0` | Icon system |

### Quality & Tooling
| Technology | Role |
|---|---|
| [oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Fast Rust-based linter |
| [Vercel](https://vercel.com/) | Hosting & CI/CD (auto-deploy on push to `main`) |

---

## 📁 Project Structure

```
ProCardan/
├── public/                    # Static assets (images, favicons, etc.)
├── src/
│   ├── assets/                # Imported assets (processed by Vite)
│   ├── components/
│   │   ├── Header.jsx         # Sticky navigation bar with mobile menu
│   │   ├── Hero.jsx           # Full-screen hero section with CTA
│   │   ├── Features.jsx       # Key service features / USP grid
│   │   ├── AboutUs.jsx        # Company background & trust signals
│   │   ├── Services.jsx       # Interactive service catalog
│   │   ├── Gallery.jsx        # Filterable photo gallery
│   │   ├── Contact.jsx        # Contact form + map + details
│   │   ├── SEOKeywords.jsx    # Semantic SEO keyword section
│   │   ├── Footer.jsx         # Footer with links & legal info
│   │   ├── CookieBanner.jsx   # GDPR cookie consent banner
│   │   ├── CookieModal.jsx    # Granular cookie preferences modal
│   │   └── MobileCTA.jsx      # Sticky mobile call-to-action button
│   ├── App.jsx                # Root component — page assembly
│   ├── App.css                # Component-scoped styles
│   ├── index.css              # Global design system & custom properties
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell with meta tags & fonts
├── mail.php                   # Server-side email handler (contact form)
├── polityka-prywatnosci.html  # Privacy policy page (standalone)
├── vite.config.js             # Vite build configuration
├── .oxlintrc.json             # Linter rules configuration
└── package.json               # Project manifest & scripts
```

---

## 🚀 Local Development Setup

### Prerequisites

- **Node.js** `>= 18.x` — [Download](https://nodejs.org/)
- **npm** `>= 9.x` (bundled with Node.js)

### Installation & Dev Server

```bash
# 1. Clone the repository
git clone https://github.com/tim2rist/procardan.git

# 2. Navigate to the project folder
cd procardan

# 3. Install dependencies
npm install

# 4. Start the development server (http://localhost:5173)
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR at `localhost:5173` |
| `npm run build` | Compile & optimise production bundle to `dist/` |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Run oxlint static analysis |

### Production Build

```bash
# Build the optimised production bundle
npm run build

# Preview the production build locally before deploying
npm run preview
```

> The `dist/` directory contains the fully optimised, deployable static site. Vercel automatically runs `npm run build` on every push to `main`.

---

## 🌐 Deployment

The project is deployed on **[Vercel](https://vercel.com/)** with CI/CD connected to the `main` branch.

- **Live URL:** [https://walynapedowe.vercel.app/](https://walynapedowe.vercel.app/)
- Every push to `main` triggers an automatic production deployment.
- Pull requests generate ephemeral preview deployments.

---

## 📄 License

This project is proprietary. All rights reserved by **ProCardan**.

---

<p align="center">Built with ❤️ for precision engineering specialists across Poland.</p>
