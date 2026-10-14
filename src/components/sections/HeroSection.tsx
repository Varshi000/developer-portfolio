"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowRight, FileDown, Terminal, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { personal, socialLinks } from "@/lib/data";

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Status Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="purple" size="md" className="gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personal.statusText}</span>
              </Badge>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-purple-400 text-sm sm:text-base font-semibold tracking-wide uppercase">
                Hello, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mt-1">
                {personal.name}
              </h1>
            </motion.div>

            {/* Professional Title & Gradient Tagline */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text-purple">
                {personal.role}
              </h2>
            </motion.div>

            {/* Concise Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              {personal.tagline}
            </motion.p>

            {/* Location & Status Info */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-xs sm:text-sm text-neutral-400 mb-8"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{personal.location}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Open for Collaboration</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>

              <Button
                href={personal.resumeDownloadUrl}
                variant="secondary"
                size="lg"
                icon={<FileDown className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-10 pt-8 border-t border-white/[0.08] w-full"
            >
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium mr-2">
                Connect:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-purple-950/30 text-neutral-400 hover:text-purple-300 flex items-center justify-center transition-all duration-200"
                >
                  <IconRenderer name={social.iconName} className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Terminal Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Behind-Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-3xl blur-2xl opacity-50 -z-10" />

            <div className="rounded-2xl bg-[#0d0d14]/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-[#151520]/80 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>developer@portfolio:~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal Body Content */}
              <div className="p-5 font-mono text-xs sm:text-sm text-neutral-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-indigo-300">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;{personal.name}&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">focus:</span>{" "}
                  <span className="text-emerald-300">&quot;{personal.role}&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">coreStack:</span> [
                  <span className="text-amber-300">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;ReactJS&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Flutter&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Node.js&quot;</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">aiIntegration:</span> [
                  <span className="text-amber-300">&quot;LLM Chatbots&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;MCP Server&quot;</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">availableForHire:</span>{" "}
                  <span className="text-purple-400">{String(personal.availableForHire)}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-neutral-400">execute:</span> () =&gt; &#123;
                </div>
                <div className="pl-8 text-neutral-400">
                  <span className="text-purple-300">return</span>{" "}
                  <span className="text-emerald-300">&quot;Engineering AI-enabled full-stack & backend solutions.&quot;</span>;
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;;</div>

                <div className="pt-2 text-neutral-400 text-xs border-t border-white/[0.06] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Ready to deploy next-gen user experiences</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
