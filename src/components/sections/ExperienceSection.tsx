"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/lib/data";

export const ExperienceSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <Container>
        <SectionHeader
          badge="Career Journey"
          title="Professional"
          titleHighlight="Experience"
          description="A chronological timeline of engineering roles, core impact, and technical contributions."
        />

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center/Left Guide Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-8 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6 md:gap-10 pl-2 md:pl-4"
              >
                {/* Timeline Pulsing Node */}
                <div className="relative shrink-0 mt-1.5 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#12121c] border-2 border-purple-500 flex items-center justify-center text-purple-300 shadow-md shadow-purple-900/40">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  {item.current && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </div>

                {/* Content Card */}
                <Card className="flex-1 border-white/[0.08] hover:border-purple-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-purple-400 font-medium">
                        <span>{item.company}</span>
                        {item.companyUrl && (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${item.company}`}
                            className="hover:text-purple-300 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.current && (
                        <Badge variant="success" size="sm">
                          Current
                        </Badge>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>
                          {item.startDate} — {item.endDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2 mb-5">
                    {item.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
