import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "../styles/custom/blog.css";
import "../styles/custom/navbar.css";
import "../styles/custom/portfolio.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Dylan Finlay",
  description: "Personal site — portfolio, photos, blog, & projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800">
        <AOSInit />

        {/* Floating bubbles - only visible in side margins on large screens */}
        <div className="bubble-container">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
        </div>

        <Navbar />
        <main className="section-spacing">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
