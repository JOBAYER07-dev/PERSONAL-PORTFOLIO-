'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactLinks = [
  {
    label: 'jobayerhosen045@gmail.com',
    href: 'mailto:jobayerhosen045@gmail.com',
    icon: '✉',
  },
  { label: '+880 1861961550', href: 'tel:+8801861961550', icon: '📞' },
  { label: 'GitHub', href: 'https://github.com/JOBAYER07-dev', icon: 'GH' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jobayer-dev/',
    icon: 'LI',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/jobayer.hosen.juba',
    icon: 'FB',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jobayer__4',
    icon: 'IG',
  },
];

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-14"
      >
        <span className="text-[#c8f04e] text-xs uppercase tracking-widest font-medium">
          Get in touch
        </span>
        <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl tracking-tight mt-3 mb-4">
          Let's Build
          <br />
          Something <span className="text-[#c8f04e]">Great</span>
        </h1>
        <p className="text-base-content/50">
          Want to collaborate on a project? Have a job opportunity? Feel free to
          connect for any reason.
        </p>
      </motion.div>

      {/* Contact links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center gap-3 flex-wrap mb-14"
      >
        {contactLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-base-200 border border-base-300 text-sm hover:border-[#c8f04e]/40 hover:text-[#c8f04e] transition-all"
          >
            <span className="text-xs font-bold opacity-60">{icon}</span>
            {label}
          </a>
        ))}
      </motion.div>

      {/* Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xl mx-auto bg-base-200 border border-base-300 rounded-3xl p-8 space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs uppercase tracking-widest text-base-content/40">
                Name
              </span>
            </label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your name"
              className="input input-bordered w-full bg-base-300 border-base-300 focus:border-[#c8f04e]/50 focus:outline-none"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs uppercase tracking-widest text-base-content/40">
                Email
              </span>
            </label>
            <input
              type="email"
              name="reply_to"
              required
              placeholder="your@email.com"
              className="input input-bordered w-full bg-base-300 border-base-300 focus:border-[#c8f04e]/50 focus:outline-none"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs uppercase tracking-widest text-base-content/40">
              Subject
            </span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="What's this about?"
            className="input input-bordered w-full bg-base-300 border-base-300 focus:border-[#c8f04e]/50 focus:outline-none"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xs uppercase tracking-widest text-base-content/40">
              Message
            </span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="textarea textarea-bordered w-full bg-base-300 border-base-300 focus:border-[#c8f04e]/50 focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn w-full rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85 disabled:opacity-50"
        >
          {status === 'sending' ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            'Send Message →'
          )}
        </button>

        {status === 'success' && (
          <p className="text-center text-sm text-[#c8f04e]">
            ✓ Message sent! I'll reply shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-sm text-error">
            Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
