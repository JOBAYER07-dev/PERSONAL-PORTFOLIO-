'use client';

import { motion } from 'framer-motion';

const techStack = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'REACT',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'NEXT.JS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        invert: true,
      },
      {
        name: 'JAVASCRIPT',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TYPESCRIPT',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'TAILWIND',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'NODE.JS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'EXPRESS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        invert: true,
      },
      {
        name: 'MONGODB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'FIREBASE',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      {
        name: 'POSTMAN',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      },
      {
        name: 'DOCKER',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'BETTER AUTH',
        icon: 'https://svgl.app/library/better-auth_dark.svg',
      },
    ],
  },
  {
    category: 'Tools',
    items: [
      {
        name: 'GIT',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GITHUB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'VSCODE',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'VERCEL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      },
      {
        name: 'NETLIFY',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
      },
      {
        name: 'FIGMA',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
    ],
  },
];

const skillsBars = [
  { name: 'HTML & CSS', pct: 90 },
  { name: 'JavaScript', pct: 75 },
  { name: 'React', pct: 80 },
  { name: 'Tailwind CSS', pct: 85 },
  { name: 'Next.js', pct: 60 },
  { name: 'Node.js / MongoDB', pct: 50 },
  { name: 'TypeScript', pct: 40 },
  { name: 'Firebase', pct: 50 },
  { name: 'Better Auth', pct: 50 },
  { name: 'Git & GitHub', pct: 70 },
];

function SkillBar({ name, pct, index }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-base-content/80">{name}</span>
        <span className="text-base-content/50">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-base-300 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[#c8f04e]"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-16 bg-base-200/50" id="skills">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[#c8f04e] text-xs uppercase tracking-[0.25em] font-semibold">
          EXPERTISE
        </span>
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl tracking-tight mt-3">
          Technical Arsenal.
        </h2>
      </motion.div>

      {/* Icon Cards Grid — grouped by category */}
      <div className="max-w-6xl mx-auto mb-20 space-y-12">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: gi * 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-base-content/40 mb-5">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.items.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-base-100 border border-base-300 hover:border-[#c8f04e]/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                      style={{ filter: tech.invert ? 'invert(1)' : 'none' }}
                    />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-base-content/60 group-hover:text-[#c8f04e] transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bars Section */}
      <div className="max-w-4xl mx-auto pt-10 border-t border-base-300/60">
        <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-8 text-center text-base-content/70">
          Proficiency Levels
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skillsBars.map((s, i) => (
            <SkillBar key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
