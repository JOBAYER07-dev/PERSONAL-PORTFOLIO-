'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  {
    name: 'REACT',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'NEXT.JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    invert: true, // Dark mode visibility-er jonno
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
    name: 'MONGODB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
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
    name: 'FIREBASE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'GIT',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
];

const skillsBars = [
  { name: 'HTML & CSS', pct: 90 },
  { name: 'JavaScript', pct: 75 },
  { name: 'React', pct: 80 },
  { name: 'Tailwind CSS', pct: 85 },
  { name: 'Next.js', pct: 60 },
  { name: 'Node.js / MongoDB', pct: 50 },
];

function SkillBar({ name, pct, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-base-content/80">{name}</span>
        <span className="text-base-content/50">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-base-300 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[#c8f04e]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 px-6 md:px-16 bg-base-200/50" ref={ref}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
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

      {/* 2nd Image-er moto Icon Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-20"
      >
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
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
      </motion.div>

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
