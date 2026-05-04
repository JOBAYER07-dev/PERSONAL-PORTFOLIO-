# Jobayer Ahmed — Portfolio

Personal portfolio built with **Next.js 15**, **Tailwind CSS v4**, **DaisyUI v5**, and **Framer Motion**.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## EmailJS Setup (Contact Form)

1. [emailjs.com](https://emailjs.com) এ account খোলো
2. Email service connect করো (Gmail works)
3. Template তৈরি করো — variables: `from_name`, `reply_to`, `subject`, `message`
4. `app/contact/page.jsx` এ এই 3টা value বসাও:

```js
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
```

## File Structure

```
app/
  layout.jsx          ← Root layout (fonts, navbar, footer)
  page.jsx            ← Home (Hero + Skills + Featured Projects)
  projects/page.jsx   ← All projects
  about/page.jsx      ← About me
  contact/page.jsx    ← Contact form (EmailJS)
components/
  Navbar.jsx
  Footer.jsx
  ThemeToggle.jsx     ← Dark/Light toggle
  Hero.jsx
  Skills.jsx
  FeaturedProjects.jsx
```

## Customization

- **Projects** → `app/projects/page.jsx` এর `projects` array update করো
- **Skills** → `components/Skills.jsx` এর `skills` ও `tags` array
- **Photo** → `components/Hero.jsx` এ `<Image>` দিয়ে replace করো
- **Links** → সব `href="#"` গুলো real link দিয়ে replace করো
