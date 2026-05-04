import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-base-content/40">
      <span>© 2025 Jobayer Ahmed. All rights reserved.</span>
      <span>
        Built with{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          className="text-[#c8f04e] hover:underline"
        >
          Next.js
        </Link>{" "}
        & Tailwind CSS
      </span>
    </footer>
  );
}
