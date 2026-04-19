# Harsh Yadav — Portfolio

Personal portfolio website showcasing my work as a Full Stack Developer. Built with Next.js 15, deployed on AWS via an automated CI/CD pipeline.

**Live:** https://d2oat8oeneh958.cloudfront.net

---

## Tech stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS with dark mode
- **Animations:** Framer Motion (`motion/react`)
- **Carousel:** Swiper.js (mobile sliders)
- **Typewriter effect:** `react-type-animation`
- **Icons:** `react-icons` (Simple Icons, FontAwesome)
- **Contact form:** Web3Forms
- **Hosting:** AWS S3 + CloudFront
- **CI/CD:** GitHub Actions

---

## Features

- Responsive layout with mobile-first carousels for Work, Services, Education, and Skills
- Dark mode with OS preference + `localStorage` persistence
- Animated hero with cycling role titles
- Contact form with toast notifications (Web3Forms integration)
- Downloadable resume
- Centralized content in `assets/assets.js` for easy updates
- Fully static output — deployed to S3 + CloudFront CDN

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.js          Root layout (fonts, metadata)
│   ├── page.js            Homepage — renders all sections
│   └── globals.css        Tailwind + global styles
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Services.jsx
│   ├── Experience.jsx
│   ├── Work.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── assets/
│   └── assets.js          Central content/data file
├── public/                Static files (resume, images)
├── .github/workflows/
│   └── deploy.yml         CI/CD pipeline
├── next.config.mjs        Static export config
└── tailwind.config.mjs    Theme + dark mode config
```

---

## Local setup

```bash
# 1. Clone
git clone https://github.com/harshy1620/NextJS-Portfolio.git
cd NextJS-Portfolio

# 2. Install dependencies
npm install

# 3. Environment variables
# Create .env.local with:
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & deploy

### Local build

```bash
npm run build     # Produces static output in out/
```

### Production deployment (automated)

Every push to `main` triggers the CI/CD pipeline:

```
push to main
    ↓
GitHub Actions
    ├── Checkout code
    ├── Setup Node 20
    ├── npm ci
    ├── npm run lint
    ├── npm run build  (env vars injected from secrets)
    ├── Configure AWS credentials
    ├── aws s3 sync ./out s3://bucket --delete
    └── aws cloudfront create-invalidation --paths "/*"
    ↓
Live on CloudFront (~2 min end-to-end)
```

### Required GitHub Actions secrets

| Secret | Purpose |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `AWS_REGION` | `ap-south-1` |
| `AWS_S3_BUCKET_NAME` | Target S3 bucket |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution for cache invalidation |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Baked into build for contact form |

---

## Infrastructure

```
User → CloudFront (HTTPS, 450+ edges, cached)
              ↓ OAC
       Private S3 bucket (origin)
```

- **S3 bucket** is private — direct access blocked
- **CloudFront Origin Access Control (OAC)** is the only way content is accessed
- **ACM certificate** provides free HTTPS via the default `*.cloudfront.net` domain

---

## Scripts

```bash
npm run dev       # Dev server with Turbopack
npm run build     # Production static export → out/
npm run start     # Serve production build locally
npm run lint      # ESLint check
```

---

## License

Personal project — not licensed for redistribution.
