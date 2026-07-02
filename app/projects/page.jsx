'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 'ticketbari',
    num: '01',
    name: 'TicketBari',
    desc: 'A full-stack transport ticket booking platform with role-based access control, secure payments, and real-time seat management for Users, Vendors, and Admins.',
    stack: [
      'Next.js 15',
      'Express.js',
      'MongoDB Atlas',
      'JWT',
      'Stripe',
      'Tailwind CSS',
    ],
    live: 'https://ticket-bari-client-one.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/TICKET-BARI-CLIENT',
  },
  {
    id: 'mediqueue',
    num: '02',
    name: 'MediQueue',
    desc: 'A full-stack medical appointment & queue management system with real-time scheduling, role-based access, and seamless patient flow.',
    stack: ['Next.js', 'Firebase', 'MongoDB', 'JWT', 'Tailwind CSS'],
    live: 'https://medi-queue-ecru.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/-MediQueue',
  },
  {
    id: 'skillsphere',
    num: '03',
    name: 'SkillSphere',
    desc: 'Online learning platform with Next.js App Router, BetterAuth (Google OAuth), and MongoDB Atlas.',
    stack: ['Next.js', 'BetterAuth', 'MongoDB Atlas', 'DaisyUI'],
    live: 'https://skill-sphere-sable.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/SkillSphere',
  },
  {
    id: 'github-issues-tracker',
    num: '04',
    name: 'GitHub Issues Tracker',
    desc: 'Vanilla JS app with real-time search, priority tags, status filter and issue detail modal.',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript', 'REST API'],
    live: 'https://jobayer07-dev.github.io/GitHub_Issue_Tracker/',
    code: 'https://github.com/JOBAYER07-dev/GitHub_Issue_Tracker',
  },
  {
    id: 'english-janala',
    num: '05',
    name: 'English Janala',
    desc: 'Vocabulary learning app with Web Speech API pronunciation feature and REST API integration.',
    stack: ['JavaScript', 'Web Speech API', 'REST API'],
    live: 'https://jobayer07-dev.github.io/english-janala-project/',
    code: 'https://github.com/JOBAYER07-dev/english-janala-project',
  },
  {
    id: 'bpl-players',
    num: '06',
    name: 'BPL Players Selection',
    desc: 'A cricket players selection app with REST API integration, search, and filter functionalities.',
    stack: ['React', 'Tailwind CSS', 'DaisyUI', 'REST API'],
    live: 'https://bpl-players-selection-from-world.netlify.app/',
    code: 'https://github.com/JOBAYER07-dev/bpl-project',
  },
  {
    id: 'keen-keeper',
    num: '07',
    name: 'Keen Keeper',
    desc: 'Friend relationship manager with React Router v6, Context API and lazy loading.',
    stack: ['React', 'React Router v6', 'Context API', 'DaisyUI'],
    live: 'https://keenkeaper.netlify.app/',
    code: 'https://github.com/JOBAYER07-dev/KinKeeper',
  },
  {
    id: 'digitools',
    num: '08',
    name: 'DigiTools',
    desc: 'React-based digital tools marketplace with cart management, toast notifications and smooth UX.',
    stack: ['React 19', 'Tailwind CSS', 'DaisyUI', 'Vite'],
    live: 'https://jobayer-digitool.netlify.app',
    code: 'https://github.com/JOBAYER07-dev/DigiTools',
  },
  {
    id: null,
    num: '09',
    name: 'Coming Soon...',
    desc: "I'm currently working on a full-stack project using Next.js.",
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
        {projects.map(
          ({ id, num, name, desc, stack, live, code, upcoming }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`group relative bg-base-200 rounded-2xl p-6 transition-all duration-300 overflow-hidden flex flex-col ${
                upcoming
                  ? 'border border-dashed border-base-300'
                  : 'border border-base-300 hover:border-[#c8f04e]/25 hover:-translate-y-1'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c8f04e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-center gap-3 text-xs text-base-content/30 tracking-widest mb-5">
                {num}
                <div className="flex-1 h-px bg-base-300" />
              </div>

              <h3
                className={`font-[family-name:var(--font-syne)] font-bold text-xl mb-2 ${
                  upcoming ? 'text-base-content/40' : ''
                }`}
              >
                {name}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 flex-1 ${
                  upcoming ? 'text-base-content/30' : 'text-base-content/50'
                }`}
              >
                {desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {stack.map(t => (
                  <span
                    key={t}
                    className="text-xs bg-base-300 text-base-content/60 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {!upcoming && (
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={`/projects/${id}`}
                    className="btn btn-sm rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85"
                  >
                    View Details →
                  </Link>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline rounded-full text-[#c8f04e] border-[#c8f04e]/30 hover:border-[#c8f04e]"
                  >
                    Live
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline rounded-full"
                  >
                    Code
                  </a>
                </div>
              )}
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
