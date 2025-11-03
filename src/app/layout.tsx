import '../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dylan Finlay',
  description: 'Personal site — portfolio, photos, blog, & projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main className="py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
