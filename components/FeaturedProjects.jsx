'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const featured = [
  {
    id: 'constraction-client',
    num: '01',
    name: 'Construction Client',
    image: '/constraction.jpg',
    desc: 'A modern full-stack construction & building management client platform built for seamless project handling, service booking, and service showcase.',
    stack: ['Next.js 15', 'React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://constraction-client.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/CONSTRACTION_CLIENT',
  },
  {
    id: 'reez-wear',
    num: '02',
    name: 'REEZ Wear',
    image: '/reez.jpg',
    desc: "Modern men's fashion e-commerce platform with a minimalist UI, product filtering, order tracking, and dynamic admin dashboard.",
    stack: [
      'Next.js 15',
      'TypeScript',
      'Express.js',
      'MongoDB',
      'Better Auth',
      'Tailwind CSS',
    ],
    live: 'https://reez-wear.vercel.app/',
    code: 'https://github.com/JOBAYER07-dev/REEZ_WEAR_CLIENT',
  },
  {
    id: 'ticketbari',
    num: '03',
    name: 'TicketBari',
    image: '/ticketbari.jpg',
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
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 px-6 md:px-16" ref={ref}>
      <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c8f04e] text-xs uppercase tracking-widest font-medium">
            My Work
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl tracking-tight mt-3">
            Featured
            <br />
            Projects
          </h2>
        </motion.div>
        <Link href="/projects" className="btn btn-outline btn-sm rounded-full">
          All Projects →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featured.map(
          (
            { id, num, name, image, desc, stack, live, code, upcoming },
            i, // 👈 upcoming destructure kora hoyeche
          ) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-base-200 border border-base-300 rounded-2xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1 hover:border-[#c8f04e]/25"
            >
              {/* Top Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c8f04e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10" />

              {/* Project Image Box */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-base-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${name} preview`}
                  className={`w-full h-full object-cover object-top transition-transform duration-300 ${
                    upcoming ? 'opacity-60' : 'group-hover:scale-105'
                  }`}
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-base-content/30 tracking-widest mb-4">
                  {num}
                  <div className="flex-1 h-px bg-base-300" />
                </div>

                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-2">
                  {name}
                </h3>
                <p className="text-base-content/50 text-sm leading-relaxed mb-5 flex-1">
                  {desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {stack.map(t => (
                    <span
                      key={t}
                      className="text-xs bg-base-300 text-base-content/60 px-2.5 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 flex-wrap items-center mt-auto">
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
              </div>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
