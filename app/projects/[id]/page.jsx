'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

const projects = [
  {
    id: 'ticketbari',
    num: '01',
    name: 'TicketBari',
    tagline: 'Full-Stack Transport Ticket Booking Platform',
    desc: 'TicketBari is a comprehensive transport ticket booking platform with three user roles — User, Vendor, and Admin. Users can search routes, book seats, and pay securely. Vendors manage their own routes and trips. Admins oversee the entire platform with revenue analytics.',
    stack: [
      'Next.js 15',
      'Express.js',
      'MongoDB Atlas',
      'JWT Authentication',
      'Stripe',
      'Tailwind CSS',
      'DaisyUI',
      'Framer Motion',
      'imgbb',
    ],
    live: 'https://ticket-bari-client-one.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/TICKET-BARI-CLIENT',
    challenges: [
      'Implementing role-based access control (User, Vendor, Admin) with JWT and secure route protection.',
      'Integrating Stripe Checkout with currency fixed to USD and handling webhook events for payment confirmation.',
      'Managing CORS configuration across Vercel (client) and Render (server) for production deployment.',
      'Building real-time countdown timers for trip departures and handling seat availability concurrently.',
    ],
    improvements: [
      'Add real-time seat locking to prevent double booking during simultaneous purchases.',
      'Implement push notifications for booking confirmations and trip reminders.',
      'Add mobile app version using React Native for on-the-go ticket management.',
      'Introduce a review and rating system for vendors and routes.',
    ],
  },
  {
    id: 'mediqueue',
    num: '02',
    name: 'MediQueue',
    tagline: 'Full-Stack Medical Appointment & Queue System',
    desc: 'MediQueue is a full-stack medical appointment and queue management system. It allows patients to book appointments with doctors, manage their queue position in real time, and receive seamless scheduling. Role-based access ensures doctors, patients, and admins each have tailored experiences.',
    stack: [
      'Next.js',
      'Firebase Auth',
      'MongoDB Atlas',
      'JWT Authentication',
      'Express.js',
      'Tailwind CSS',
      'DaisyUI',
    ],
    live: 'https://medi-queue-ecru.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/-MediQueue',
    challenges: [
      'Configuring Firebase Authentication with JWT for dual-layer security on protected API routes.',
      'Setting up CORS correctly for both local development and Vercel production URLs.',
      'Managing real-time queue state across multiple users without a WebSocket server.',
      'Handling time slot conflicts and preventing double-booking for the same doctor.',
    ],
    improvements: [
      'Add WebSocket-based real-time queue updates so patients see live position changes.',
      'Integrate SMS/email reminders for upcoming appointments.',
      'Build a doctor dashboard with analytics on patient visits and appointment trends.',
      'Add telemedicine support with video consultation integration.',
    ],
  },
  {
    id: 'skillsphere',
    num: '03',
    name: 'SkillSphere',
    tagline: 'Online Learning Platform with Google OAuth',
    desc: 'SkillSphere is a modern online learning platform built with Next.js App Router. It features Google OAuth via BetterAuth, course browsing, enrollment, and a clean dashboard for tracking learning progress. MongoDB Atlas powers the backend data layer.',
    stack: [
      'Next.js 16',
      'BetterAuth',
      'Google OAuth',
      'MongoDB Atlas',
      'Tailwind CSS v4',
      'DaisyUI v5',
    ],
    live: 'https://skill-sphere-sable.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/SkillSphere',
    challenges: [
      'Setting up BetterAuth with Google OAuth in Next.js App Router — handling session cookies and Suspense boundaries for useSearchParams.',
      'Configuring MongoDB Atlas IP whitelist for Vercel serverless deployment.',
      'Managing Google OAuth in production mode with verified redirect URIs.',
      'Handling Tailwind v4 and DaisyUI v5 configuration without a tailwind.config.js file.',
    ],
    improvements: [
      'Add video lesson support with progress tracking per chapter.',
      'Implement a quiz and certification system upon course completion.',
      'Add instructor dashboard for course creation and student management.',
      'Integrate Stripe for paid course subscriptions.',
    ],
  },
  {
    id: 'github-issues-tracker',
    num: '04',
    name: 'GitHub Issues Tracker',
    tagline: 'Vanilla JS GitHub Issues Browser',
    desc: 'A Vanilla JavaScript application that fetches and displays GitHub repository issues in real time. Features include search, priority tagging, status filtering (open/closed), and a detail modal for each issue — all without any framework.',
    stack: ['HTML5', 'Tailwind CSS', 'Vanilla JavaScript', 'GitHub REST API'],
    live: 'https://jobayer07-dev.github.io/GitHub_Issue_Tracker/',
    code: 'https://github.com/JOBAYER07-dev/GitHub_Issue_Tracker',
    challenges: [
      'Working with GitHub REST API pagination and rate limiting without a backend proxy.',
      'Building a dynamic search and filter system in pure JavaScript without React state.',
      'Creating a modal detail view that is accessible and keyboard-navigable.',
      'Handling API errors gracefully and showing meaningful user feedback.',
    ],
    improvements: [
      'Add authentication to increase GitHub API rate limit from 60 to 5000 requests/hour.',
      'Allow users to search any public GitHub repository dynamically.',
      'Add label color coding and milestone tracking.',
      'Convert to a React app for better state management.',
    ],
  },
  {
    id: 'english-janala',
    num: '05',
    name: 'English Janala',
    tagline: 'Vocabulary Learning App with Speech API',
    desc: 'English Janala is a vocabulary learning app that helps users learn and pronounce English words. It uses the Web Speech API for text-to-speech pronunciation and pulls word data from a REST API, making it an interactive and engaging learning tool.',
    stack: [
      'Vanilla JavaScript',
      'Web Speech API',
      'REST API',
      'HTML5',
      'CSS3',
    ],
    live: 'https://jobayer07-dev.github.io/english-janala-project/',
    code: 'https://github.com/JOBAYER07-dev/english-janala-project',
    challenges: [
      'Integrating the Web Speech API across different browsers with varying support levels.',
      'Handling async REST API calls and gracefully managing loading and error states.',
      'Designing an intuitive vocabulary card UI that works on both desktop and mobile.',
    ],
    improvements: [
      'Add a spaced repetition algorithm (SRS) to improve vocabulary retention.',
      'Allow users to save favorite words and track their learning history.',
      'Add multiple choice quiz mode for testing vocabulary knowledge.',
      'Migrate to React for better component management.',
    ],
  },
  {
    id: 'bpl-players',
    num: '06',
    name: 'BPL Players Selection',
    tagline: 'Cricket Players Selection App',
    desc: 'A cricket player selection app for the Bangladesh Premier League. Users can browse available players, filter by category, and select their dream team within a coin budget. Features search, filter, and a live coin balance tracker.',
    stack: ['React', 'Tailwind CSS', 'DaisyUI', 'REST API', 'React Toastify'],
    live: 'https://bpl-players-selection-from-world.netlify.app/',
    code: 'https://github.com/JOBAYER07-dev/bpl-project',
    challenges: [
      'Managing coin budget state across player selection and deselection actions.',
      'Implementing search and category filter simultaneously without performance issues.',
      'Preventing duplicate player selection and showing meaningful toast notifications.',
    ],
    improvements: [
      'Add player statistics and performance charts.',
      'Allow users to save and share their team selections.',
      'Add a comparison feature between two players.',
      'Introduce team rating based on selected players stats.',
    ],
  },
  {
    id: 'keen-keeper',
    num: '07',
    name: 'Keen Keeper',
    tagline: 'Friend Relationship Manager',
    desc: 'Keen Keeper is a friend relationship management app built with React. Users can add, view, and manage their friends list with lazy loading for performance. Features React Router v6 for navigation and Context API for global state.',
    stack: [
      'React',
      'React Router v6',
      'Context API',
      'DaisyUI',
      'Tailwind CSS',
    ],
    live: 'https://keenkeaper.netlify.app/',
    code: 'https://github.com/JOBAYER07-dev/KinKeeper',
    challenges: [
      'Implementing React Router v6 nested routes with lazy loading for performance optimization.',
      'Managing global state with Context API without prop drilling across deep component trees.',
      'Building a responsive card layout that works across all device sizes.',
    ],
    improvements: [
      'Add birthday reminders and relationship health tracking.',
      'Integrate a backend with MongoDB for persistent data storage.',
      'Add notes and interaction history per friend.',
      'Implement search and filter by relationship type.',
    ],
  },
  {
    id: 'digitools',
    num: '08',
    name: 'DigiTools',
    tagline: 'Digital Tools Marketplace',
    desc: 'DigiTools is a React-based digital tools marketplace where users can browse, add to cart, and purchase digital products. Features include cart management with quantity control, toast notifications for user feedback, and a smooth responsive UI.',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'DaisyUI', 'React Toastify'],
    live: 'https://jobayer-digitool.netlify.app',
    code: 'https://github.com/JOBAYER07-dev/DigiTools',
    challenges: [
      'Managing cart state with add, remove, and quantity update operations using React hooks.',
      'Ensuring smooth user feedback with toast notifications for every cart interaction.',
      'Optimizing Vite build configuration for fast production deployment.',
    ],
    improvements: [
      'Add user authentication and persistent cart with localStorage or a backend.',
      'Integrate a payment gateway for actual purchases.',
      'Add product search, filter by category, and sort by price.',
      'Build a seller dashboard for product listing management.',
    ],
  },
];

export default function ProjectDetailPage({ params }) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 text-base-content/40 hover:text-[#c8f04e] text-sm transition-colors"
        >
          ← Back to Projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 text-xs text-base-content/30 tracking-widest mb-4">
          {project.num}
          <div className="w-12 h-px bg-base-300" />
        </div>
        <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl tracking-tight mb-3">
          {project.name}
        </h1>
        <p className="text-[#c8f04e] text-sm font-medium uppercase tracking-widest">
          {project.tagline}
        </p>
      </motion.div>

      {/* Project image placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full h-56 md:h-72 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center mb-12 overflow-hidden relative"
      >
        <div className="text-center">
          <div className="font-[family-name:var(--font-syne)] font-bold text-6xl text-[#c8f04e]/20 mb-2">
            {project.num}
          </div>
          <p className="text-base-content/20 text-sm">Project Preview</p>
        </div>
        {/* CTA overlay */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85"
          >
            Live Site →
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline rounded-full"
          >
            GitHub →
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left — main content */}
        <div className="md:col-span-2 space-y-10">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-4">
              About the Project
            </h2>
            <p className="text-base-content/60 leading-relaxed">
              {project.desc}
            </p>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-4">
              Challenges Faced
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-base-content/60 text-sm leading-relaxed"
                >
                  <span className="text-[#c8f04e] mt-0.5 shrink-0">→</span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Improvements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-4">
              Future Improvements
            </h2>
            <ul className="space-y-3">
              {project.improvements.map((imp, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-base-content/60 text-sm leading-relaxed"
                >
                  <span className="text-[#c8f04e] mt-0.5 shrink-0">✦</span>
                  {imp}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right — sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Tech Stack */}
          <div className="bg-base-200 border border-base-300 rounded-2xl p-5">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest mb-4 text-base-content/50">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(t => (
                <span
                  key={t}
                  className="text-xs bg-base-300 text-base-content/70 px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="bg-base-200 border border-base-300 rounded-2xl p-5 space-y-3">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest mb-4 text-base-content/50">
              Links
            </h3>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full text-sm text-[#c8f04e] hover:underline"
            >
              Live Site <span>↗</span>
            </a>
            <div className="h-px bg-base-300" />
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full text-sm text-base-content/60 hover:text-base-content transition-colors"
            >
              GitHub Repository <span>↗</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 pt-8 border-t border-base-300 flex justify-between items-center"
      >
        <Link href="/projects" className="btn btn-outline btn-sm rounded-full">
          ← All Projects
        </Link>
        <Link
          href="/contact"
          className="btn btn-sm rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85"
        >
          Hire Me →
        </Link>
      </motion.div>
    </section>
  );
}
