"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Check, Sparkles, FolderGit2, Bot, Smartphone, Layers, Server, TrendingUp, Plane } from "lucide-react";
import { GithubIcon } from "@/components/ui/IconRenderer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { ProjectItem } from "@/types";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  const getProjectIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("travel") || cat.includes("itinerary")) return <Plane className="w-5 h-5" />;
    if (cat.includes("fin")) return <TrendingUp className="w-5 h-5" />;
    if (cat.includes("ai")) return <Bot className="w-5 h-5" />;
    if (cat.includes("mobile")) return <Smartphone className="w-5 h-5" />;
    if (cat.includes("full stack")) return <Layers className="w-5 h-5" />;
    if (cat.includes("web")) return <Server className="w-5 h-5" />;
    return <FolderGit2 className="w-5 h-5" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0d0d16] border border-white/[0.12] rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/50 z-10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Top Glow Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400" />

            {/* Modal Header */}
            <div className="p-6 sm:p-7 border-b border-white/[0.08] relative bg-gradient-to-b from-white/[0.03] to-transparent">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-neutral-400 hover:text-white transition-all border border-white/[0.08] focus:outline-none"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category & Status Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  {getProjectIcon(project.category)}
                  <span>{project.category}</span>
                </span>

                {project.liveDemoUrl && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployment
                  </span>
                )}

                {project.badge && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {project.badge}
                  </span>
                )}

                {project.featured && (
                  <Badge variant="purple" size="sm" className="gap-1">
                    <Sparkles className="w-3 h-3 text-purple-300" />
                    <span>Featured</span>
                  </Badge>
                )}
              </div>

              {/* Title & Tagline */}
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-purple-400/90 font-medium mt-1 leading-snug">
                {project.tagline}
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-7 space-y-6 overflow-y-auto text-neutral-300 text-sm leading-relaxed custom-scrollbar">
              {/* Detailed Summary */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Project Overview
                </h3>
                <p className="bg-white/[0.02] border border-white/[0.06] p-4 rounded-xl text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features / Highlights */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
                    Key Features & Technical Highlights
                  </h3>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-neutral-300 hover:border-purple-500/20 transition-colors"
                      >
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
                  Technologies & Architecture Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-neutral-200 border border-white/[0.09]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-white/[0.08] bg-[#0b0b13] flex flex-wrap items-center justify-between gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-neutral-400 hover:text-white"
              >
                Close
              </Button>

              <div className="flex items-center gap-2.5">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    external
                    variant="secondary"
                    size="sm"
                    icon={<GithubIcon className="w-3.5 h-3.5" />}
                  >
                    Source Code
                  </Button>
                )}

                {project.liveDemoUrl && (
                  <Button
                    href={project.liveDemoUrl}
                    external
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Launch Live Demo
                  </Button>
                )}

                {project.playStoreUrl && (
                  <Button
                    href={project.playStoreUrl}
                    external
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Google Play Store
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
