"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

export const SkillsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", title: "All Skills", iconName: "Layers" },
    ...skills.map((c) => ({ id: c.id, title: c.title, iconName: c.iconName })),
  ];

  const displayedCategories =
    selectedCategory === "all"
      ? skills
      : skills.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <Container>
        <SectionHeader
          badge="Technical Skills"
          title="Tools & Technologies"
          titleHighlight="I Work With"
          description="A comprehensive toolkit across client, server, database architectures, and development workflows."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border",
                  isSelected
                    ? "bg-purple-600/20 border-purple-500/50 text-white shadow-sm shadow-purple-900/30"
                    : "bg-[#111118]/70 border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20"
                )}
              >
                <IconRenderer name={cat.iconName} className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <Card
              key={category.id}
              className="flex flex-col justify-between border-white/[0.08] hover:border-purple-500/30"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                    <IconRenderer name={category.iconName} className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={shouldReduceMotion ? {} : { y: -2 }}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/30 hover:bg-purple-950/20 transition-all text-xs text-neutral-300"
                    >
                      {skill.iconName && (
                        <IconRenderer
                          name={skill.iconName}
                          className="w-3.5 h-3.5 text-purple-400/80 group-hover:text-purple-300"
                        />
                      )}
                      <span>{skill.name}</span>
                      {skill.level && (
                        <Badge
                          variant="outline"
                          size="sm"
                          className="text-[10px] px-1.5 py-0 border-white/10 text-neutral-400 group-hover:text-purple-300"
                        >
                          {skill.level}
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
