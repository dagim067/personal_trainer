"use client";
import Link from "next/link";
import { Camera, Play, Mail, MapPin, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Results", href: "#results" },
  { name: "Journal", href: "#journal" },
  { name: "Book", href: "#book" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-24 pb-12">
      <div className="absolute top-0 left-1/2 h-32 w-1/2 -translate-x-1/2 bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-6 block text-3xl font-bold text-foreground"
            >
              ELEVATE<span className="text-primary">.</span>
            </Link>

            <p className="mb-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Personal training, nutrition coaching, and transformation plans
              for driven professionals who want stronger bodies and better
              habits.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Camera size={18} />
              </Link>

              <Link
                href="/youtube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Play size={18} />
              </Link>

              <Link
                href="/tiktok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>

            <ul className="space-y-5">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail size={16} />
                  pixelnoah8@gmail.com
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0" />

                  <span>
                    Downtown Fitness Studio
                    <br />
                    Addis Ababa, Ethiopia
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Newsletter
            </h4>

            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe for workout tips, training updates, and lifestyle
              guidance.
            </p>

            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-border bg-card py-3 pl-5 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                className="absolute top-1 right-1 bottom-1 flex w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground md:text-sm">
            © {new Date().getFullYear()} Elevate. All rights reserved.
          </p>

          <div className="text-center">
            <p className="text-sm md:text-base text-foreground font-medium">
              Built by <span className="font-semibold">pixelnoah</span>
            </p>
            <a
              href="tel:0911477218"
              className="text-sm md:text-base text-primary font-semibold"
            >
              0911477218
            </a>
          </div>

          <div className="flex gap-6 text-xs">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
