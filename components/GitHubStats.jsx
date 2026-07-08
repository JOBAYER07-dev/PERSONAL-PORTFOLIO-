'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const USERNAME = 'JOBAYER07-dev';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then(r => r.json())
      .then(d => d?.login && setStats(d))
      .catch(() => {});

    fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`,
    )
      .then(r => r.json())
      .then(d => Array.isArray(d) && setRepos(d))
      .catch(() => {});
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 bg-base-200" ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="mb-8"
      >
        <span className="text-[#c8f04e] text-xs uppercase tracking-widest font-medium">
          Open Source
        </span>
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl tracking-tight mt-2">
          GitHub Activity
        </h2>
      </motion.div>

      {/* Stat number cards — always visible */}
      {stats && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
        >
          {[
            { label: 'Public Repos', value: stats.public_repos },
            { label: 'Followers', value: stats.followers },
            { label: 'Following', value: stats.following },
            { label: 'Contributions', value: '244+' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-base-300 border border-base-300 rounded-xl p-4 text-center"
            >
              <div className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#c8f04e]">
                {value}
              </div>
              <div className="text-base-content/40 text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Stats image cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="grid md:grid-cols-2 gap-3 mb-3"
      >
        <div className="bg-base-300 border border-base-300 rounded-xl overflow-hidden flex items-center justify-center p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&title_color=c8f04e&icon_color=c8f04e&text_color=888&border_color=444&hide_border=true&count_private=true&hide_title=false`}
            alt="GitHub Stats"
            className="w-full max-w-sm mx-auto"
            loading="lazy"
          />
        </div>
        <div className="bg-base-300 border border-base-300 rounded-xl overflow-hidden flex items-center justify-center p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&title_color=c8f04e&text_color=888&border_color=444&hide_border=true&langs_count=6`}
            alt="Top Languages"
            className="w-full max-w-xs mx-auto"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Recent repos */}
      {repos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid md:grid-cols-2 gap-3 mb-6"
        >
          {repos.slice(0, 4).map((repo, i) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-base-300 border border-base-300 rounded-xl p-4 hover:border-[#c8f04e]/30 transition-all hover:-translate-y-0.5"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm group-hover:text-[#c8f04e] transition-colors truncate mr-2">
                  {repo.name}
                </span>
                <span className="text-[#c8f04e] text-xs shrink-0">↗</span>
              </div>
              <p className="text-base-content/40 text-xs leading-relaxed mb-2 line-clamp-1">
                {repo.description || 'No description'}
              </p>
              <div className="flex gap-3 text-xs text-base-content/30">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8f04e]" />
                    {repo.language}
                  </span>
                )}
                <span>⭐ {repo.stargazers_count}</span>
              </div>
            </a>
          ))}
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm rounded-full hover:border-[#c8f04e]/50 hover:text-[#c8f04e]"
        >
          View All Repositories →
        </a>
      </motion.div>
    </section>
  );
}
