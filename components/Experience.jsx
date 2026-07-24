'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2025 - Present',
    role: 'Founder & Manager',
    company: "REEZ - Men's Clothing Brand",
    description:
      'Managing brand design, Facebook & Instagram ad marketing, customer communication, and operations.',
    skills: ['E-Commerce', 'Brand Design', 'Marketing', 'UI/UX'],
  },
  {
    period: '2026 - Running',
    role: 'Full-Stack Web Development',
    company: 'Programming Hero',
    description:
      'Specializing in Next.js 15, BetterAuth, Prisma, MongoDB, and modern React Ecosystem.',
    skills: ['Next.js 15', 'MongoDB', 'BetterAuth', 'Tailwind v4'],
  },
  {
    period: '2025',
    role: 'MERN Stack Developer Trainee',
    company: 'BD Calling Academy',
    description:
      'Built multiple MERN stack web applications with JWT authentication and payment gateways.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#c8f04e] text-xs uppercase tracking-[0.25em] font-semibold">
          CAREER PATH
        </span>
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl tracking-tight mt-3">
          Experience & Journey
        </h2>
      </div>

      <div className="relative border-l-2 border-base-300 ml-4 md:ml-32 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-base-100 border-2 border-[#c8f04e] group-hover:scale-125 group-hover:bg-[#c8f04e] transition-all" />

            {/* Date Tag */}
            <span className="md:absolute md:-left-32 md:top-1 text-xs font-bold text-[#c8f04e] uppercase tracking-wider block mb-1 md:mb-0">
              {exp.period}
            </span>

            {/* Card Content */}
            <div className="bg-base-200 border border-base-300 rounded-2xl p-6 group-hover:border-[#c8f04e]/40 transition-all">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-base-content">
                {exp.role}
              </h3>
              <div className="text-xs text-base-content/50 font-medium mb-3">
                {exp.company}
              </div>
              <p className="text-sm text-base-content/60 leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-[10px] bg-base-300 text-base-content/70 px-2.5 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
