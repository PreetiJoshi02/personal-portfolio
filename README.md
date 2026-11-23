# Preeti Joshi — Developer Portfolio

A professional, modern, and fully responsive personal portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🚀 Tech Stack

- **React.js** — Component-based UI
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Icons** — Icon library

## ✨ Features

- 🌙 Dark theme with purple/blue accents
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Glassmorphism cards & subtle gradients
- ⚡ Framer Motion animations
- 🧭 Sticky navbar with active section highlighting
- 📧 Functional contact form (opens email client)
- 📄 Resume download button
- 🔝 Scroll-to-top button
- 🔍 SEO-friendly meta tags
- 🎯 Custom favicon

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky navigation with mobile menu
│   ├── Hero.jsx           # Landing section with animated visuals
│   ├── About.jsx          # About me & CGPA card
│   ├── Skills.jsx         # Categorized skill cards with icons
│   ├── Projects.jsx       # Project cards with detail modal
│   ├── Education.jsx      # Education timeline
│   ├── Certifications.jsx # Certification cards
│   ├── Contact.jsx        # Contact form + info
│   ├── Footer.jsx         # Footer with quick links
│   ├── ScrollToTop.jsx    # Floating scroll-to-top button
│   └── SectionWrapper.jsx # Layout wrapper utility
├── data/
│   └── portfolioData.js   # All portfolio data (edit this!)
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts — it auto-detects Vite
```

### Option 2: Vercel Dashboard (Recommended)

1. Push your code to **GitHub** (create a new repo)
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Your site is live! 🎉

## ✏️ Customization

All portfolio content is in **`src/data/portfolioData.js`**:

| What to update | Variable |
|---|---|
| Personal info, bio, links | `personalInfo` |
| Skills list | `skills` |
| Projects | `projects` |
| Education | `education` |
| Certifications | `certifications` |

### 🔗 Update placeholder links

Search for `// Placeholder` in `portfolioData.js` and replace with real URLs.

### 📄 Add your Resume PDF

Place your resume file at `public/Preeti_Joshi_Resume.pdf` to enable the download button.

## 📄 License

Personal portfolio — feel free to use as a template.
