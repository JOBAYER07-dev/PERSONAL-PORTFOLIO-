"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML & CSS", pct: 90 },
  { name: "JavaScript", pct: 75 },
  { name: "React", pct: 80 },
  { name: "Tailwind CSS", pct: 85 },
  { name: "Next.js", pct: 60 },
  { name: "Node.js / MongoDB", pct: 50 },
];

const tags = [
  { label: "React", accent: true },
  { label: "Next.js", accent: true },
  { label: "Tailwind CSS", accent: true },
  { label: "JavaScript" },
  { label: "HTML & CSS" },
  { label: "DaisyUI" },
  { label: "Node.js" },
  { label: "MongoDB" },
  { label: "Firebase" },
  { label: "Git & GitHub" },
  { label: "Vite" },
  { label: "REST API" },
];

function SkillBar({ name, pct, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-base-content/50">{pct}%</span>
      </div>
      <div className="h-1 rounded-full bg-base-300 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[#c8f04e]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 md:px-16 bg-base-200" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#c8f04e] text-xs uppercase tracking-widest font-medium">
          What I know
        </span>
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl tracking-tight mt-3 mb-12">
          My Skills &<br />
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — desc + tags */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-base-content/60 leading-relaxed mb-8">
            "I specialize in frontend development, building responsive and
            performant web apps using modern tools. Currently, I am learning
            Next.js and full-stack development."
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map(({ label, accent }) => (
              <span
                key={label}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  accent
                    ? 'bg-[#c8f04e]/10 border-[#c8f04e]/30 text-[#c8f04e]'
                    : 'bg-base-300 border-base-300 text-base-content/70 hover:border-[#c8f04e]/30 hover:text-[#c8f04e]'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — skill bars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
