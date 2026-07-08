'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TypedText from './TypedText';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 },
  }),
};

const socials = [
  { label: 'GitHub', href: 'https://github.com/JOBAYER07-dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jobayer-dev/' },
  { label: 'Facebook', href: 'https://www.facebook.com/jobayer.hosen.juba' },
  { label: 'Instagram', href: 'https://www.instagram.com/jobayer__4' },
];

const techIcons = [
  {
    label: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    x: -160,
    y: -60,
    delay: 0,
    duration: 3.5,
  },
  {
    label: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    x: 160,
    y: -80,
    delay: 0.5,
    duration: 4,
    invert: true,
  },
  {
    label: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    x: -170,
    y: 100,
    delay: 1,
    duration: 4.5,
  },
  {
    label: 'Tailwind',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    x: 165,
    y: 110,
    delay: 0.8,
    duration: 3.8,
  },
  {
    label: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    x: -30,
    y: -170,
    delay: 0.3,
    duration: 5,
  },
  {
    label: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    x: 20,
    y: 185,
    delay: 1.2,
    duration: 4.2,
  },
  {
    label: 'Express',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    x: 155,
    y: -10,
    delay: 0.6,
    duration: 3.6,
    invert: true,
  },
  {
    label: 'Firebase',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    x: -155,
    y: -10,
    delay: 1.5,
    duration: 4.8,
  },
];

function FloatingIcon({ icon }) {
  return (
    <motion.div
      className="absolute"
      style={{ x: icon.x, y: icon.y }}
      animate={{
        y: [icon.y, icon.y - 12, icon.y + 8, icon.y],
        x: [icon.x, icon.x + 5, icon.x - 4, icon.x],
      }}
      transition={{
        duration: icon.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: icon.delay,
      }}
      suppressHydrationWarning
    >
      <div
        className="w-11 h-11 rounded-xl bg-base-300/80 border border-base-300 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        title={icon.label}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon.src}
          alt={icon.label}
          width={26}
          height={26}
          style={{ filter: icon.invert ? 'invert(1)' : 'none' }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 pt-20 gap-12 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#c8f04e]/5 blur-[100px] top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* LEFT */}
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8f04e]/30 bg-[#c8f04e]/10 text-[#c8f04e] text-xs uppercase tracking-widest mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8f04e] animate-pulse" />
          Available for work
        </motion.div>

        {/* Heading with TypedText */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mb-6"
        >
          <p className="font-[family-name:var(--font-syne)] font-extrabold text-3xl md:text-4xl tracking-tight text-base-content/60 mb-5">
            Hi, I'm Jobayer —
          </p>
          {/* Fixed height prevents layout shift */}
          <div className="h-[80px] md:h-[90px] lg:h-[100px] flex items-center">
            <span className="font-[family-name:var(--font-syne)] font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
              <TypedText />
            </span>
          </div>
          <p className="font-[family-name:var(--font-syne)] font-extrabold text-2xl md:text-3xl tracking-tight text-base-content/50 mt-5">
            Based in Bangladesh 🇧🇩
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-base-content/60 text-lg max-w-md mb-10 leading-relaxed"
        >
          I build beautiful, fast, and user-friendly web experiences using React
          and Next.js. Based in Bangladesh, delivering globally.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-wrap gap-4 mb-10"
        >
          <Link
            href="/projects"
            className="btn rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85 px-8"
          >
            View Projects
          </Link>
          <Link href="/contact" className="btn btn-outline rounded-full px-8">
            Let's Talk →
          </Link>
          <a
            href="/Jobayer_MERN.pdf"
            download
            className="btn rounded-full border border-[#c8f04e] text-[#c8f04e] bg-transparent hover:bg-[#c8f04e]/10 px-8"
          >
            Download Resume ↓
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex flex-wrap gap-2 mb-10"
        >
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline rounded-full hover:border-[#c8f04e]/50 hover:text-[#c8f04e] transition-all"
            >
              {label}
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="flex gap-10 pt-8 border-t border-base-300"
        >
          {[
            { num: '7+', label: 'Projects Built' },
            { num: '1+', label: 'Years Learning' },
            { num: '20+', label: 'Tech Stack' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-[family-name:var(--font-syne)] text-3xl font-bold text-[#c8f04e]">
                {num}
              </div>
              <div className="text-base-content/50 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — Avatar + Floating Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="hidden md:flex justify-center items-center relative"
      >
        <div className="relative flex items-center justify-center w-[420px] h-[480px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {techIcons.map(icon => (
              <FloatingIcon key={icon.label} icon={icon} />
            ))}
          </div>

          <div className="absolute top-6 left-0 z-10 flex items-center gap-2 bg-base-200 border border-base-300 rounded-xl px-3 py-2 text-sm font-medium shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c8f04e]" />
            React Developer
          </div>

          <div
            className="relative z-10 rounded-3xl border border-base-300 overflow-hidden"
            style={{ width: '280px', height: '340px' }}
          >
            <Image
              src="/avatar.png"
              alt="Jobayer Hosen"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="absolute bottom-6 right-0 z-10 flex items-center gap-2 bg-base-200 border border-base-300 rounded-xl px-3 py-2 text-sm font-medium shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c8f04e] animate-pulse" />
            Next.js Developer
          </div>
        </div>
      </motion.div>
    </section>
  );
}
