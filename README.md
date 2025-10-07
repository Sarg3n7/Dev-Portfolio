<div align="center">

# ⚡ Shashwat Shivam — Portfolio

<a href="https://shashwat-shivam-devportfolio.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-success?style=for-the-badge" alt="Live Demo" />
</a>

<br/><br/>

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=121212)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88D000?logo=greensock&logoColor=121212)](https://greensock.com/scrolltrigger/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Enabled-FF6A6A)](https://www.emailjs.com/)
[![License](https://img.shields.io/badge/License-MIT-000000.svg)](#-license)

Interactive portfolio with smooth animations, project highlights, skills grid with real logos, and direct contact to my inbox.

</div>

---

## ✨ Features

- 🎯 **Hero + About** with tasteful typography and motion  
- 🧱 **Projects** with scroll-aware counter, hover preview, and “View Others” CTA  
- 🧠 **Skills** grid using self-hosted SVG logos (`/public/icons`)  
- 🚀 **Preloader**: custom GIF + 0→100% progress bar  
- 📫 **Contact**: EmailJS sends messages straight to my email  
- 🎨 **Design tokens** via CSS variables (HSL) + Tailwind v4 utilities  

---

## 🗂 Project Structure

```text
portfolio-project
├─ public/
│  ├─ gifs/
│  │  ├─ dev.gif
│  │  └─ MJ.gif
│  ├─ profile/
│  │  └─ me.jpg
│  ├─ project_screenshots/
│  │  ├─ AI Powered Interview.png
│  │  ├─ Home.png
│  │  └─ Virtual-Assistant.png
│  ├─ resume/resume.pdf
│  ├─ favicon.ico
│  ├─ offline.html
│  ├─ placeholder.svg
│  ├─ robots.txt
│  └─ sw.js
├─ src/
│  ├─ components/
│  │  ├─ ui/… (shadcn)
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Education.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Menu.jsx
│  │  ├─ Preloader.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Services.jsx
│  │  └─ Skills.jsx
│  ├─ hooks/…
│  ├─ lib/utils.js
│  ├─ pages/{Home.jsx, NotFound.jsx}
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ vite-env.d.ts
├─ .env
├─ .env.example
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.js
```

> 📝 Using TypeScript configs for editor intelligence is fine even in a JSX project.  
> If you want to remove TS entirely, see **FAQ → Remove TypeScript** below.

---

## 🚀 Quick Start

<details>
<summary><b>1) Clone & Install</b></summary>

```bash
git clone https://github.com/<your-username>/portfolio-project.git
cd portfolio-project
npm install
```
</details>

<details>
<summary><b>2) Environment Variables (.env)</b></summary>

Duplicate `.env.example` → `.env`:

**macOS/Linux**
```bash
cp .env.example .env
```

**Windows (PowerShell)**
```powershell
Copy-Item -Path .env.example -Destination .env
```

Open `.env` and fill with your EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_yyyyyy
VITE_EMAILJS_PUBLIC_KEY=QHjkP_abcdef123456
```

**Where to find them**
- `VITE_EMAILJS_SERVICE_ID`: EmailJS → **Email Services** (e.g., Gmail/SMTP)
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS → **Email Templates**
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS → **Account → API Keys**

**Important**
- Add `http://localhost:5173` to EmailJS → **Account → Domains**
- In your EmailJS template, include variables you send from the app:
  ```text
  From: {{from_email}}
  Message:
  {{message}}
  ```
</details>

<details>
<summary><b>3) Run Dev Server</b></summary>

```bash
npm run dev
```

App runs at **http://localhost:5173**.
</details>

<details>
<summary><b>4) Build & Preview</b></summary>

```bash
npm run build
npm run preview
```
</details>

---

## 🔗 Live Demo

- 🌐 Live: **https://shashwat-shivam-devportfolio.vercel.app/**

---

## 🧪 Tech Stack

- **React 18** + **Vite 5** (SWC)  
- **Tailwind CSS v4** with custom tokens  
- **GSAP** (ScrollTrigger)  
- **shadcn/ui**, **lucide-react**  
- **EmailJS** + **Sonner** toasts  

---

## 🛠️ Customization

- **Resume file**: replace `public/resume/resume.pdf`  
- **Preloader GIF**: put your GIF in `public/gifs` and update `Preloader.jsx`  
- **Skills icons**: self-host under `public/icons/*.svg` and map in `Skills.jsx`  
- **Brand initials**: edit the small “SS” badge in `Menu.jsx`  

---

## 🐞 Troubleshooting

- **EmailJS error**: “Gmail_API: Request had insufficient authentication scopes.”  
  → Re-connect Gmail in EmailJS (Email Services → Gmail → Reauthorize).  
  → Or use SMTP service with an app password (no OAuth expiry).

- **Message sent but still see an error toast**  
  → EmailJS sometimes returns `"OK"` without `status: 200`. In `Contact.jsx`, treat success when `res.status === 200 || res.text === "OK"`.

- **Image not showing from `/public`**  
  → Use absolute path from `/public`, e.g. `<img src="/gifs/dev.gif" />`, and restart dev server after adding new files.

---

## ❓ FAQ

<details>
<summary><b>How do I change the color theme?</b></summary>

All colors are HSL variables in `src/index.css` under `:root`. Update tokens like `--primary`, `--background`, etc., and Tailwind classes will reflect them automatically.
</details>

<details>
<summary><b>Where do I add new projects?</b></summary>

Open `src/components/Projects.jsx` and extend the `projectsData` array. Each project supports `name`, `tech`, `description`, `images`, and `tags`.
</details>

<details>
<summary><b>How do I remove TypeScript completely?</b></summary>

If you’re not using TS at all:

1) Uninstall TS-related packages  
```bash
npm remove typescript @types/node @types/react @types/react-dom typescript-eslint
```

2) Delete files  
```
tsconfig.json
tsconfig.app.json
tsconfig.node.json
src/vite-env.d.ts
```

3) Ensure your ESLint config doesn’t expect TS project references.  
Your tree becomes:

```text
portfolio-project
├─ public/…
├─ src/…
├─ .env
├─ .env.example
├─ eslint.config.js
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ README.md
```
</details>

---

## 🔐 Environment Reference (`.env.example`)

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

> Copy `.env.example` → `.env` and fill values before running the app.

---

## 📜 License

Released under the **MIT License**. See `LICENSE` for details.
