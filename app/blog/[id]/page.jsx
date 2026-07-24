'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

const blogDetails = [
  {
    id: 'nextjs-15-app-router-best-practices',
    title: 'Mastering Next.js 15 App Router & Server Actions',
    date: 'Jul 20, 2026',
    readTime: '5 min read',
    category: 'Next.js',
    tags: ['Next.js 15', 'React', 'Full-Stack'],
    content: [
      'Next.js 15 brings significant performance upgrades, enhanced caching controls, and seamless async request handling within the App Router architecture.',
      'When building modern full-stack web applications, separating client-side interactivity from server-side rendering is vital for web performance and SEO.',
      'Key takeaways include utilizing React Server Components (RSC) for data fetching, using Server Actions for form submissions, and optimizing suspense boundaries.',
    ],
  },
  {
    id: 'handling-cors-authentication-better-auth',
    title: 'Solving CORS & OAuth Challenges in Production',
    date: 'Jun 12, 2026',
    readTime: '7 min read',
    category: 'Backend & Security',
    tags: ['Security', 'OAuth', 'Express.js'],
    content: [
      'Deploying frontends on Vercel and backends on Render/Railway often leads to tricky Cross-Origin Resource Sharing (CORS) and HTTP-only cookie issues.',
      'To handle authentication smoothly across domains with BetterAuth or JWT, setting proper credentials, allowed headers, and SameSite cookie attributes is essential.',
      'In this article, we break down step-by-step Express CORS configuration and cookie domain setups for production environments.',
    ],
  },
  {
    id: 'building-responsive-ui-tailwind-v4-daisyui',
    title: 'Modern UI Architecture with Tailwind CSS v4',
    date: 'May 28, 2026',
    readTime: '4 min read',
    category: 'Frontend',
    tags: ['Tailwind CSS', 'UI/UX', 'Design'],
    content: [
      'Tailwind CSS v4 simplifies configuration with CSS-first directives, replacing JavaScript-based tailwind.config files for a leaner build pipeline.',
      'Pairing Tailwind CSS with DaisyUI v5 allows developers to rapidly compose dark/light themeable components without bloated utility classes.',
      'We discuss clean component composition, layout structures, and fluid typography techniques for multi-device responsive web design.',
    ],
  },
];

export default function BlogDetailPage({ params }) {
  const { id } = use(params);
  const article = blogDetails.find(b => b.id === id);

  if (!article) notFound();

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <Link
          href="/blog"
          className="flex items-center gap-2 text-base-content/40 hover:text-[#c8f04e] text-sm transition-colors"
        >
          ← Back to Articles
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 text-xs mb-4">
          <span className="text-[#c8f04e] font-medium uppercase tracking-wider text-[10px] bg-[#c8f04e]/10 px-3 py-1 rounded-full border border-[#c8f04e]/20">
            {article.category}
          </span>
          <span className="text-base-content/40">
            {article.date} • {article.readTime}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-6">
          {article.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {article.tags.map(t => (
            <span
              key={t}
              className="text-xs bg-base-200 border border-base-300 text-base-content/60 px-3 py-1 rounded-full"
            >
              #{t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-base-200 border border-base-300 rounded-3xl p-8 md:p-12 space-y-6 text-base-content/70 leading-relaxed text-base md:text-lg"
      >
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </motion.div>

      {/* Bottom Footer Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 pt-8 border-t border-base-300 flex justify-between items-center"
      >
        <Link href="/blog" className="btn btn-outline btn-sm rounded-full">
          ← All Articles
        </Link>
        <Link
          href="/contact"
          className="btn btn-sm rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85"
        >
          Let's Talk →
        </Link>
      </motion.div>
    </section>
  );
}
