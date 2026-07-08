'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'React Developer',
        'Next.js Developer',
        'MERN Stack Dev',
        'Full-Stack Developer',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      cursorChar: '_',
    });
    return () => typed.destroy();
  }, []);

  return <span ref={el} className="text-[#c8f04e]" />;
}
