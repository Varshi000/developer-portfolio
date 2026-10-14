"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ExternalLink, Check, Sparkles, FolderGit2, Bot, Smartphone, Layers, Server } from "lucide-react";
import { GithubIcon } from "@/components/ui/IconRenderer";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const getProjectIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("ai")) return <Bot className="w-7 h-7" />;
    if (cat.includes("mobile")) return <Smartphone className="w-7 h-7" />;
    if (cat.includes("full stack")) return <Layers className="w-7 h-7" />;
    if (cat.includes("web")) return <Server className="w-7 h-7" />;
    return <FolderGit2 className="w-7 h-7" />;
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden p-0 border-white/[0.08] hover:border-purple-500/40 group">
                {/* Project Visual Header / Banner */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#12121e] via-[#161628] to-[#0c0c16] flex items-center justify-center border-b border-white/[0.06] overflow-hidden">
                  {/* Subtle inner grid lines */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Ambient Project Glow */}
                  <div className="absolute w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  {/* Icon illustration showcase */}
                  <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#1d1d2d]/80 border border-purple-500/30 text-purple-300 flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="text-xs uppercase tracking-wider font-mono text-purple-300/80">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="purple" size="sm" className="gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-purple-300" />
                        <span>Featured</span>
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-purple-400 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Contributions & Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-6 space-y-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          Highlights:
                        </span>
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-neutral-400 leading-normal"
                          >
                            <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links / Project Status */}
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          external
                          variant="secondary"
                          size="sm"
                          icon={<GithubIcon className="w-3.5 h-3.5" />}
                          className="flex-1"
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
                          className="flex-1"
                        >
                          Live Demo
                        </Button>
                      )}

                      {!project.githubUrl && !project.liveDemoUrl && (
                        <div className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs">
                          <span className="flex items-center gap-2 text-neutral-300 font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>System Architecture & Features Ready</span>
                          </span>
                          <span className="text-[11px] font-mono text-purple-300/90 bg-purple-950/40 border border-purple-500/20 px-2 py-0.5 rounded-md">
                            Internal / Academic
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
