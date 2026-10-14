"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { personal, siteConfig, socialLinks } from "@/lib/data";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-12 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.05]">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Link
              href="#home"
              className="flex items-center gap-2 text-white font-semibold text-lg hover:text-purple-300 transition-colors"
            >
              <div className="w-6 h-6 rounded-md bg-purple-600 flex items-center justify-center text-white text-xs">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span>{personal.name}</span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
              {personal.role} — {personal.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-purple-950/30 flex items-center justify-center text-neutral-400 hover:text-purple-300 transition-all duration-200"
              >
                <IconRenderer name={social.iconName} className="w-4 h-4" />
              </a>
            ))}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 text-purple-300 hover:text-white flex items-center justify-center transition-all duration-200 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            {siteConfig.footerText}
          </p>
        </div>
      </Container>
    </footer>
  );
};
