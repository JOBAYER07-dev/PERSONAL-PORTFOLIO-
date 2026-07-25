import Link from 'next/link';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/JOBAYER07-dev',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jobayer-dev/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/JOBAYER_DEV',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/jobayer.hosen.juba',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jobayer__4',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100/60 pt-16 pb-8 px-6 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-base-300/60">
        {/* Column 1: Brand & Intro (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-syne)] font-extrabold text-2xl tracking-tight text-base-content inline-block"
          >
            JOBAYER<span className="text-[#c8f04e]">.</span>
          </Link>
          <div className="font-medium text-base-content/80 text-sm">
            Frontend & Full-Stack Developer
          </div>
          <p className="text-xs text-base-content/50 leading-relaxed max-w-sm">
            Building fast, responsive, and user-friendly web applications using
            React & Next.js. Always learning, always creating.
          </p>
        </div>

        {/* Column 2: Navigation Links (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <span className="text-[11px] font-bold tracking-[0.2em] text-base-content/40 uppercase block">
            NAVIGATION
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-base-content/70">
            <Link
              href="/"
              className="hover:text-[#c8f04e] transition-colors py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#c8f04e] transition-colors py-1"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#c8f04e] transition-colors py-1"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#c8f04e] transition-colors py-1"
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="hover:text-[#c8f04e] transition-colors py-1"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#c8f04e] transition-colors py-1"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Column 3: Direct Contact Details (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <span className="text-[11px] font-bold tracking-[0.2em] text-base-content/40 uppercase block">
            CONTACT
          </span>
          <div className="space-y-3 text-xs">
            {/* Email */}
            <a
              href="mailto:jobayerhosen045@gmail.com"
              className="flex items-center gap-3 text-base-content/70 hover:text-[#c8f04e] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-base-200 border border-base-300 flex items-center justify-center shrink-0 group-hover:border-[#c8f04e]/50">
                <svg
                  className="w-3.5 h-3.5 text-[#c8f04e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="truncate">jobayerhosen045@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801861961550"
              className="flex items-center gap-3 text-base-content/70 hover:text-[#c8f04e] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-base-200 border border-base-300 flex items-center justify-center shrink-0 group-hover:border-[#c8f04e]/50">
                <svg
                  className="w-3.5 h-3.5 text-[#c8f04e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span>+880 1861961550</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 text-base-content/70">
              <div className="w-8 h-8 rounded-lg bg-base-200 border border-base-300 flex items-center justify-center shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-[#c8f04e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Column 4: Socials & Availability (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <span className="text-[11px] font-bold tracking-[0.2em] text-base-content/40 uppercase block">
            CONNECT
          </span>

          {/* Social Icons Grid */}
          <div className="flex gap-2">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-9 h-9 rounded-xl bg-base-200 border border-base-300 flex items-center justify-center text-base-content/60 hover:text-[#c8f04e] hover:border-[#c8f04e]/50 hover:-translate-y-0.5 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Available for Hire Status Badge */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c8f04e]/30 bg-[#c8f04e]/10 text-[#c8f04e] text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8f04e] animate-pulse" />
              Available For Hire
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-base-content/40">
        <span>
          © {new Date().getFullYear()} Jobayer Hosen. All rights reserved.
        </span>
        <span>Designed & Built with by Jobayer</span>
      </div>
    </footer>
  );
}
