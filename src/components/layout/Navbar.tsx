"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, FileDown, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = siteConfig.navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-[#070709]/80 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg py-1 px-1.5"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-purple-900/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
              {personal.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121218]/60 border border-white/[0.08] rounded-full p-1.5 backdrop-blur-md">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 relative",
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/40 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={personal.resumeDownloadUrl}
              variant="outline"
              size="sm"
              icon={<FileDown className="w-4 h-4" />}
              className="text-xs font-semibold"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Slide-down Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0a0a0f]/95 border-b border-white/[0.1] backdrop-blur-2xl"
          >
            <Container className="py-6 flex flex-col gap-3">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between",
                      isActive
                        ? "bg-purple-950/40 text-purple-300 border border-purple-500/30"
                        : "text-neutral-300 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-white/[0.08] mt-2">
                <Button
                  href={personal.resumeDownloadUrl}
                  variant="primary"
                  size="md"
                  icon={<FileDown className="w-4 h-4" />}
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  Download Resume
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
