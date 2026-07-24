'use client';
import { useState } from 'react';

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = 'jobayerhosen045@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="btn btn-sm rounded-full bg-base-200 border-base-300 hover:border-[#c8f04e] hover:text-[#c8f04e] text-xs transition-all"
    >
      {copied ? '✓ Copied to Clipboard!' : '📋 Copy Email'}
    </button>
  );
}
