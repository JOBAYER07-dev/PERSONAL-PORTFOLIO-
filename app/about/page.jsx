"use client";

import { motion } from "framer-motion";

const info = [
  { label: "Name", value: "JOBAYER HOSEN" },
  { label: "Location", value: "DHAKA, BANGLADESH" },
  { label: "Institute", value: "Bhola Polytechnic Institute" },
  { label: "Focus", value: "Frontend / Full-Stack Dev" },
  { label: "Currently Learning", value: "Next.js + MongoDB", accent: true },
  { label: "LinkedIn", value: "linkedin.com/in/jobayer", link: "https://linkedin.com/in/" },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-[#c8f04e] text-xs uppercase tracking-widest font-medium">
          Who I am
        </span>
        <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl tracking-tight mt-3">
          About Me
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-5 text-base-content/60 leading-relaxed"
        >
          <p>
            I’m Jobayer — from Bhola, Bangladesh. I’m studying Web Development
            at Bhola Polytechnic Institute.
          </p>
          <p>
            I’ve followed Programming Hero’s structured curriculum, starting
            from HTML/CSS and progressing to React and Next.js. I’m gaining
            practical experience by building real projects.
          </p>
          <p>
            Besides tech, I…{' '}
            <span className="text-base-content font-medium">REEZ</span>I also
            run a men’s clothing brand, where I handle design, marketing, and
            customer communication.
          </p>
          <p>
            My goal is to become a skilled full-stack developer and build
            meaningful products.
          </p>
        </motion.div>

        {/* Right — info table */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          {info.map(({ label, value, accent, link }) => (
            <div
              key={label}
              className="flex justify-between items-center py-4 border-b border-base-300 text-sm"
            >
              <span className="text-base-content/40">{label}</span>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8f04e] hover:underline"
                >
                  {value}
                </a>
              ) : (
                <span
                  className={
                    accent ? 'text-[#c8f04e] font-medium' : 'font-medium'
                  }
                >
                  {value}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
