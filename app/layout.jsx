import "./globals.css";
import { DM_Sans, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

export const metadata = {
  title: 'Jobayer Hosen - React & Next.js Developer',
  description: 'Personal portfolio of Jobayer Hosen',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${syne.variable} font-[family-name:var(--font-dm-sans)] min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
