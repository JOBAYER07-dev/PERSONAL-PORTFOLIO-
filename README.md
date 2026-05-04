# Jobayer Ahmed — Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 15**, **Tailwind CSS v4**, **DaisyUI v5**, and **Framer Motion**. Features dark/light mode, smooth animations, and a functional contact form powered by EmailJS.

🌐 **Live Site:** [https://jobayerhosen-portfolio.vercel.app/](https://jobayer-dev.vercel.app)

---

## About Me

I'm Jobayer Hosen, a passionate Frontend & Full-Stack Web Developer from Bhola, Bangladesh. I specialize in building beautiful, performant, and user-friendly web applications using modern technologies.

- 🎓 Studying Web Development at **Bhola Polytechnic Institute**, Lalmohon, Bhola
- 🏆 Completed **MERN Stack Web Development** at **BD Calling Academy**
- 📚 Completed **Frontend & Full-Stack Development** program at **Programming Hero**
- 💼 Running **REEZ** — a men's clothing brand ([@reez_wear](https://www.facebook.com/reezzbd29))

---

## Tech Stack

**Frontend**
- React 19
- Next.js 15 (App Router)
- Tailwind CSS v4
- DaisyUI v5
- Framer Motion

**Backend & Database**
- Node.js
- Express.js
- MongoDB
- Firebase

**Tools & Workflow**
- Git & GitHub
- Vercel (Deployment)
- EmailJS (Contact Form)
- VS Code

---

## Features

- ⚡ Built with Next.js 15 App Router & Turbopack
- 🌙 Dark / Light mode toggle (persisted via localStorage)
- 🎞️ Smooth page & scroll animations with Framer Motion
- 📬 Functional contact form via EmailJS
- 📱 Fully responsive — mobile, tablet, desktop
- 🖼️ Optimized images with Next.js `<Image />`
- 🔗 Separate pages — Home, Projects, About, Contact

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Hero section, skills, and featured projects |
| `/projects` | Full project showcase grid |
| `/about` | Background, education, and personal info |
| `/contact` | EmailJS-powered contact form |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/JOBAYER07-dev/portfolio.git

# 2. Navigate into the project
cd portfolio

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## EmailJS Setup

To enable the contact form:

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Connect your email service (Gmail recommended)
3. Create an email template with these variables: `from_name`, `reply_to`, `subject`, `message`
4. Open `app/contact/page.jsx` and update the following constants:

```js
const EMAILJS_SERVICE_ID  = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY  = "your_public_key";
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx           # Root layout — fonts, navbar, footer
│   ├── page.jsx             # Home page
│   ├── projects/page.jsx    # All projects
│   ├── about/page.jsx       # About me
│   ├── contact/page.jsx     # Contact form
│   └── globals.css          # Tailwind v4 + DaisyUI config
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   └── FeaturedProjects.jsx
├── public/
│   └── avatar.png           # Profile photo
├── jsconfig.json
├── next.config.mjs
└── package.json
```

---

## Featured Projects

| Project | Tech Stack | Live |
|---------|-----------|------|
| **DigiTools** | React, Tailwind, DaisyUI | [jobayer-digitool.netlify.app](https://jobayer-digitool.netlify.app) |
| **Keen Keeper** | React, React Router v6, Context API | — |
| **GitHub Issues Tracker** | HTML, Tailwind, JavaScript, REST API | — |
| **English Janala** | JavaScript, Web Speech API | — |
| **Tea House** | HTML, Tailwind CSS | — |

---

## Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JOBAYER07-dev)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/reez_wear)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & Built by <strong>Jobayer Ahmed</strong> 🇧🇩</p>