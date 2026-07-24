'use client';

import Image from 'next/image';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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

// Stats Configuration
const statsData = [
  {
    target: 10,
    suffix: '+',
    label: 'PROJECTS BUILT',
    icon: (
      <svg
        className="w-5 h-5 text-[#c8f04e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    target: 500,
    suffix: '+',
    label: 'GIT COMMITS',
    icon: (
      <svg
        className="w-5 h-5 text-[#c8f04e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    target: 20,
    suffix: '+',
    label: 'TECH STACK',
    icon: (
      <svg
        className="w-5 h-5 text-[#c8f04e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    target: 1,
    suffix: '+ YEARS',
    label: 'LEARNING & DEV',
    icon: (
      <svg
        className="w-5 h-5 text-[#c8f04e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

// CountUp Component (0 to max Animation)
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: latest => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

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
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-16 pt-28 pb-12 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#c8f04e]/5 blur-[100px] top-1/3 left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* TOP: Main Hero Grid */}
      <div className="grid md:grid-cols-2 items-center gap-12 w-full max-w-7xl mx-auto">
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mb-6"
          >
            <p className="font-[family-name:var(--font-syne)] font-extrabold text-3xl md:text-4xl tracking-tight text-base-content/60 mb-5">
              Hi, I'm Jobayer
            </p>
            <div className="h-[80px] md:h-[90px] lg:h-[100px] flex items-center">
              <span className="font-[family-name:var(--font-syne)] font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
                <TypedText />
              </span>
            </div>
            <p className="font-[family-name:var(--font-syne)] font-extrabold text-2xl md:text-3xl tracking-tight text-base-content/50 mt-5">
              Based in Bangladesh
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-base-content/60 text-lg max-w-md mb-10 leading-relaxed"
          >
            I build beautiful, fast, and user-friendly web experiences using
            React and Next.js. Based in Bangladesh, delivering globally.
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
            className="flex flex-wrap gap-2"
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
      </div>

      {/* BOTTOM: Upgraded Animated Stats Section (2nd Image Style) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="mt-16 pt-10 border-t border-base-300/60 w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map(stat => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center mb-4 group-hover:border-[#c8f04e]/50 group-hover:scale-110 transition-all duration-300 shadow-sm">
                {stat.icon}
              </div>

              {/* Number with CountUp Animation */}
              <div className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-extrabold text-[#c8f04e] tracking-tight mb-1">
                <Counter target={stat.target} />
                {stat.suffix}
              </div>

              {/* Subtitle Label */}
              <div className="text-[11px] font-bold tracking-[0.18em] text-base-content/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
