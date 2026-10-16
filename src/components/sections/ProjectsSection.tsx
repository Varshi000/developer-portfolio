"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ExternalLink, Sparkles, FolderGit2, Bot, Smartphone, Layers, Server, TrendingUp, Plane, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const getProjectIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("travel") || cat.includes("itinerary")) return <Plane className="w-6 h-6" />;
    if (cat.includes("fin")) return <TrendingUp className="w-6 h-6" />;
    if (cat.includes("ai")) return <Bot className="w-6 h-6" />;
    if (cat.includes("mobile")) return <Smartphone className="w-6 h-6" />;
    if (cat.includes("full stack")) return <Layers className="w-6 h-6" />;
    if (cat.includes("web")) return <Server className="w-6 h-6" />;
    return <FolderGit2 className="w-6 h-6" />;
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <Container>
        <SectionHeader
          badge="Featured Work"
          title="Engineered Projects &"
          titleHighlight="Applications"
          description="A selection of full-stack platforms, client interfaces, and backend services built with strict attention to performance and UX."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border",
                filter === cat
                  ? "bg-purple-600/25 border-purple-500/50 text-white shadow-sm shadow-purple-900/30"
                  : "bg-[#111118]/70 border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden p-0 border-white/[0.08] hover:border-purple-500/40 group hover:shadow-xl hover:shadow-purple-950/20 transition-all duration-300">
                {/* Project Visual Header / Banner */}
                <div className="relative h-36 sm:h-40 bg-gradient-to-br from-[#12121e] via-[#161628] to-[#0c0c16] flex items-center justify-center border-b border-white/[0.06] overflow-hidden">
                  {/* Subtle inner grid lines */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Ambient Project Glow */}
                  <div className="absolute w-36 h-36 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  {/* Icon illustration showcase */}
                  <div className="relative z-10 flex flex-col items-center gap-1.5 text-center px-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#1d1d2d]/80 border border-purple-500/30 text-purple-300 flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-purple-300/80">
                      {project.category}
                    </span>
                  </div>

                  {/* Live Status or Custom Badge */}
                  {project.liveDemoUrl ? (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 backdrop-blur-md shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Demo
                      </span>
                    </div>
                  ) : project.badge ? (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 backdrop-blur-md shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {project.badge}
                      </span>
                    </div>
                  ) : null}

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="purple" size="sm" className="gap-1 shadow-md text-[10px] sm:text-xs">
                        <Sparkles className="w-3 h-3 text-purple-300" />
                        <span>Featured</span>
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-purple-400 font-medium mb-2.5 line-clamp-1">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Compact Tech Badges (first 3 + remainder counter) */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300/80 border border-purple-500/20">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="secondary"
                      size="sm"
                      icon={<Info className="w-3.5 h-3.5" />}
                      className="flex-1 text-xs py-2"
                    >
                      View Details
                    </Button>

                    {project.liveDemoUrl && (
                      <Button
                        href={project.liveDemoUrl}
                        external
                        variant="primary"
                        size="sm"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                        iconPosition="right"
                        className="flex-1 text-xs py-2"
                      >
                        Live Demo
                      </Button>
                    )}

                    {project.playStoreUrl && !project.liveDemoUrl && (
                      <Button
                        href={project.playStoreUrl}
                        external
                        variant="primary"
                        size="sm"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                        iconPosition="right"
                        className="flex-1 text-xs py-2"
                      >
                        Play Store
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

