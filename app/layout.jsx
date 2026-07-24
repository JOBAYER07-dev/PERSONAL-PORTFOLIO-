import './globals.css';
import { DM_Sans, Syne } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
});

export const metadata = {
  title: 'Jobayer Hosen — React & Next.js Developer',
  description:
    'Personal portfolio of Jobayer Hosen — React, Next.js, MERN Stack developer from Bangladesh.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning // 👈 Ei attribute-ti body tag-e add kore din
        className={`${dmSans.variable} ${syne.variable} font-[family-name:var(--font-dm-sans)] min-h-screen`}
      >
        {/* Scroll progress bar top of page */}
        <ScrollProgress />
        {/* Custom cursor */}
        <CustomCursor />
        {/* Entry loading screen */}
        <LoadingScreen />
        {/* Smooth scroll wrapper */}
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        {/* Back to top button */}
        <BackToTop />
      </body>
    </html>
  );
}