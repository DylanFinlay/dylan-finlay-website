import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
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
        <Navbar />
        <main className="section-spacing">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
