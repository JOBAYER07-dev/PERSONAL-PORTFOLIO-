'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 pt-20 gap-12 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#c8f04e]/5 blur-[100px] top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* LEFT */}
      <div>
        {/* eyebrow */}
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

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-[family-name:var(--font-syne)] font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight mb-6"
        >
          React &
          <br />
          <span className="text-accent-lime">Next.js</span>
          <br />
          Developer
        </motion.h1>

        {/* Desc */}
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

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Link
            href="/projects"
            className="btn rounded-full bg-accent-lime text-black border-none hover:opacity-85 px-8"
          >
            View Projects
          </Link>
          <Link href="/contact" className="btn btn-outline rounded-full px-8">
            Let's Talk →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex gap-10 pt-8 border-t border-base-300"
        >
          {[
            { num: '5+', label: 'Projects Built' },
            { num: '2+', label: 'Years Learning' },
            { num: '10+', label: 'Tech Stack' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-[family-name:var(--font-syne)] text-3xl font-bold text-accent-lime">
                {num}
              </div>
              <div className="text-base-content/50 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — Avatar card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="hidden md:flex justify-center items-center relative"
      >
        {/* Badge top-left */}
        <div className="absolute -top-3 -left-8 z-10 flex items-center gap-2 bg-base-200 border border-base-300 rounded-xl px-3 py-2 text-sm font-medium shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#c8f04e]" />
          React Developer
        </div>

        {/* Avatar with photo */}
        <div className="w-80 h-96 rounded-3xl border border-base-300 relative overflow-hidden">
          <Image
            src="/avatar.png"
            alt="Jobayer Ahmed"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Badge bottom-right */}
        <div className="absolute -bottom-3 -right-8 flex items-center gap-2 bg-base-200 border border-base-300 rounded-xl px-3 py-2 text-sm font-medium shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#c8f04e] animate-pulse" />
          Next.js Developer
        </div>
      </motion.div>
    </section>
  );
}
