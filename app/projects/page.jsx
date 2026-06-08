"use client";

import { motion } from "framer-motion";

const projects = [
  {
    num: '01',
    name: '-MediQueue ',
    desc: 'A full-stack medical appointment & queue management system with real-time scheduling, role-based access, and seamless patient flow.',
    stack: [
      'NEXT JS',
      'Firebase ',
      'React Router',
      'Context API',
      'MongoDB',
      'JWT Authentication',
      'Tailwind CSS',
    ],
    live: 'medi-queue-ecru.vercel.app',
    code: 'https://github.com/JOBAYER07-dev/-MediQueue',
  },
  {
    num: '02',
    name: 'SkillSphere',
    desc: 'Online learning platform with Next.js App Router, BetterAuth (Google OAuth), and MongoDB Atlas.',
    stack: ['Next.js', 'BetterAuth', 'MongoDB Atlas', 'DaisyUI'],
    live: 'https://skill-sphere-sable.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/SkillSphere',
  },
  {
    num: '03',
    name: 'GitHub Issues Tracker',
    desc: 'Vanilla JS app with real-time search, priority tags, status filter and issue detail modal।',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript', 'REST API'],
    live: '#',
    code: 'https://github.com/',
  },
  {
    num: '04',
    name: 'English Janala',
    desc: 'Vocabulary learning app with Web Speech API pronunciation feature and REST API integration।',
    stack: ['JavaScript', 'Web Speech API', 'REST API'],
    live: '#',
    code: 'https://github.com/',
  },
  {
    num: '05',
    name: 'Tea House',
    desc: 'Elegant tea brand website with modern layout and responsive design।',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
    live: '#',
    code: 'https://github.com/',
  },
  {
    num: '06',
    name: 'Keen Keeper',
    desc: 'Friend relationship manager with React Router v6, Context API and lazy loading।',
    stack: ['React', 'React Router v6', 'Context API', 'DaisyUI'],
    live: 'https://keenkeaper.netlify.app/',
    code: 'https://github.com/JOBAYER07-dev/KinKeeper',
  },
  {
    num: '07',
    name: 'DigiTools',
    desc: 'React-based digital tools marketplace with cart management, toast notifications and smooth UX।',
    stack: ['React 19', 'Tailwind CSS', 'DaisyUI', 'Vite'],
    live: 'https://jobayer-digitool.netlify.app',
    code: 'https://github.com/JOBAYER07-dev/DigiTools',
  },
  {
    num: '08',
    name: 'Coming Soon...',
    desc: 'I’m currently working on a full-stack project using Next.js',
    stack: ['Next.js', 'MongoDB', 'Auth'],
    live: null,
    code: null,
    upcoming: true,
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-[#c8f04e] text-xs uppercase tracking-widest font-medium">
          My Work
        </span>
        <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl tracking-tight mt-3">
          All Projects
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ num, name, desc, stack, live, code, upcoming }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className={`group relative bg-base-200 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
              upcoming
                ? "border border-dashed border-base-300"
                : "border border-base-300 hover:border-[#c8f04e]/25"
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c8f04e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

            <div className="flex items-center gap-3 text-xs text-base-content/30 tracking-widest mb-5">
              {num}
              <div className="flex-1 h-px bg-base-300" />
            </div>

            <h3
              className={`font-[family-name:var(--font-syne)] font-bold text-xl mb-2 ${
                upcoming ? "text-base-content/40" : ""
              }`}
            >
              {name}
            </h3>
            <p
              className={`text-sm leading-relaxed mb-5 ${
                upcoming ? "text-base-content/30" : "text-base-content/50"
              }`}
            >
              {desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {stack.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-base-300 text-base-content/60 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {!upcoming && (
              <div className="flex gap-4">
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#c8f04e] flex items-center gap-1"
                >
                  Live →
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base-content/50 hover:text-base-content transition-colors"
                >
                  Code →
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
