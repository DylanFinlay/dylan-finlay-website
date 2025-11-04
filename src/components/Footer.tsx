import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-12">
      <div className="container-custom section-spacing">
        <div className="tile-orange text-center">
          <h3 className="mb-4">Get in Touch</h3>
          <p className="mb-6">
            Feel free to reach out for opportunities, collaborations, or just to
            connect!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://linkedin.com/in/dylanfinlay33"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/DylanFinlay"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </Link>
            <Link
              href="mailto:decfinla@uwaterloo.ca"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Email
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Dylan Finlay — A Personal Website
        </div>
      </div>
    </footer>
  );
}
