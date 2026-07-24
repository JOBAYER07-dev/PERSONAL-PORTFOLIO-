'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogs = [
  {
    id: 'nextjs-15-app-router-best-practices',
    title: 'Mastering Next.js 15 App Router & Server Actions',
    date: 'Jul 20, 2026',
    readTime: '5 min read',
    category: 'Next.js',
    desc: 'An in-depth guide on optimizing server components, managing state, and structuring scalable Next.js 15 full-stack applications.',
    tags: ['Next.js 15', 'React', 'Full-Stack'],
  },
  {
    id: 'handling-cors-authentication-better-auth',
    title: 'Solving CORS & OAuth Challenges in Production',
    date: 'Jun 12, 2026',
    readTime: '7 min read',
    category: 'Backend & Security',
    desc: 'Practical solutions for configuring CORS across separated client (Vercel) and server (Render) deployments with BetterAuth & JWT.',
    tags: ['Security', 'OAuth', 'Express.js'],
  },
  {
    id: 'building-responsive-ui-tailwind-v4-daisyui',
    title: 'Modern UI Architecture with Tailwind CSS v4',
    date: 'May 28, 2026',
    readTime: '4 min read',
    category: 'Frontend',
    desc: 'How to build highly responsive, themeable, and performant web interfaces using Tailwind CSS v4 and DaisyUI v5 without clutter.',
    tags: ['Tailwind CSS', 'UI/UX', 'Design'],
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center max-w-2xl mx-auto"
      >
        <span className="text-[#c8f04e] text-xs uppercase tracking-[0.2em] font-semibold">
          MY ARTICLES
        </span>
        <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl tracking-tight mt-3 mb-4">
          Articles & Insights
        </h1>
        <p className="text-base-content/50 text-sm leading-relaxed">
          Sharing my learnings, web development tutorials, and solutions to
          real-world software engineering challenges.
        </p>
      </motion.div>

      {/* Blog Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="group relative bg-base-200 border border-base-300 rounded-2xl p-6 transition-all duration-300 hover:border-[#c8f04e]/40 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Top Hover Bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c8f04e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl z-10" />

            <div>
              {/* Category & Date */}
              <div className="flex items-center justify-between text-xs text-base-content/40 mb-4">
                <span className="text-[#c8f04e] font-medium uppercase tracking-wider text-[10px] bg-[#c8f04e]/10 px-2.5 py-1 rounded-full border border-[#c8f04e]/20">
                  {blog.category}
                </span>
                <span>
                  {blog.date} • {blog.readTime}
                </span>
              </div>

              {/* Title */}
              <Link href={`/blog/${blog.id}`}>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-3 text-base-content group-hover:text-[#c8f04e] transition-colors leading-snug cursor-pointer">
                  {blog.title}
                </h3>
              </Link>

              {/* Description */}
              <p className="text-sm text-base-content/50 leading-relaxed mb-6">
                {blog.desc}
              </p>
            </div>

            {/* Tags & Action Link */}
            <div className="pt-4 border-t border-base-300/60 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {blog.tags.map(t => (
                  <span
                    key={t}
                    className="text-[10px] bg-base-300 text-base-content/60 px-2 py-0.5 rounded"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Functional Clickable Link */}
              <Link
                href={`/blog/${blog.id}`}
                className="text-xs font-semibold text-[#c8f04e] flex items-center gap-1 hover:underline cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                Read Article →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
