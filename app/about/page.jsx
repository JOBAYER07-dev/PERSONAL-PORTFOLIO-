'use client';

import { motion } from 'framer-motion';

const info = [
  { label: 'Name', value: 'Jobayer Hosen' },
  { label: 'Location', value: 'Dhaka, Bangladesh' },
  { label: 'Institute', value: 'Bhola Polytechnic Institute' },
  { label: 'Focus', value: 'Frontend / Full-Stack Dev' },
  { label: 'Currently Learning', value: 'Next.js + MongoDB', accent: true },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jobayer-dev',
    link: 'https://www.linkedin.com/in/jobayer-dev/',
  },
];

const education = [
  {
    year: '2022 — Present',
    degree: 'Diploma in Engineering (Web Technology)',
    school: 'Bhola Polytechnic Institute',
  },
  {
    year: '2025',
    degree: 'MERN Stack Web Development',
    school: 'BD Calling Academy',
  },
  {
    year: '2026 — running',
    degree: 'Frontend & Full-Stack Development',
    school: 'Programming Hero',
  },
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
            I'm Jobayer Hosen — a passionate React & Next.js developer from
            Bhola, Bangladesh. My journey into web development started with a
            simple curiosity about how websites are built, and that curiosity
            quickly turned into a full-on passion.
          </p>
          <p>
            I completed a full MERN Stack Web Development course at{' '}
            <span className="text-base-content font-medium">
              BD Calling Academy
            </span>
            , followed by a structured Frontend & Full-Stack program at{' '}
            <span className="text-base-content font-medium">
              Programming Hero
            </span>
            . I'm currently studying Web Technology at Bhola Polytechnic
            Institute and continue to build real-world projects to sharpen my
            skills.
          </p>
          <p>
            I enjoy building things that live on the internet — clean UI
            components, smooth animations, and full-stack applications that
            solve real problems. I love turning ideas into working products.
          </p>
          <p>
            Outside of programming, I run{' '}
            <span className="text-base-content font-medium">REEZ_WEAR</span> — a
            men's clothing brand where I handle design, marketing, and customer
            communication. I'm also into football, photography, and exploring
            new ideas.
          </p>
          <p>
            My goal is to become a skilled full-stack developer and eventually
            build products that make a real difference in people's lives.
          </p>

          {/* Education */}
          <div className="mt-10">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-base-content mb-6">
              Education
            </h3>
            <div className="space-y-3">
              {education.map(e => (
                <div
                  key={e.degree}
                  className="flex gap-4 p-4 bg-base-200 rounded-xl border border-base-300"
                >
                  <span className="text-[#c8f04e] text-xs mt-0.5 whitespace-nowrap font-medium">
                    {e.year}
                  </span>
                  <div>
                    <div className="font-medium text-sm text-base-content">
                      {e.degree}
                    </div>
                    <div className="text-base-content/40 text-xs mt-0.5">
                      {e.school}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

          {/* Experience */}
          <div className="pt-6">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-base-content mb-4">
              Experience
            </h3>
            <div className="p-4 bg-base-200 rounded-xl border border-base-300">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm">Founder & Manager</span>
                <span className="text-[#c8f04e] text-xs">2025 — Present</span>
              </div>
              <div className="text-base-content/40 text-xs mb-2">
                REEZ — Men's Clothing Brand
              </div>
              <p className="text-base-content/50 text-xs leading-relaxed">
                Managing brand design, Facebook & Instagram marketing, customer
                communication, and ad campaign strategy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
