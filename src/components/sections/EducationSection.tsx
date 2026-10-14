"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { education } from "@/lib/data";

export const EducationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <Container>
        <SectionHeader
          badge="Academic Background"
          title="Education &"
          titleHighlight="Foundations"
          description="Formal academic qualifications, theoretical computer science grounding, and core disciplines."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-white/[0.08] hover:border-purple-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h3>
                      <p className="text-sm text-purple-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {edu.startDate} — {edu.endDate}
                      </span>
                    </div>
                    {edu.gradeOrHonors && (
                      <Badge variant="purple" size="sm" className="gap-1">
                        <Award className="w-3 h-3 text-purple-300" />
                        <span>{edu.gradeOrHonors}</span>
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{edu.location}</span>
                </div>

                {/* Highlights and Coursework */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      <span>Academic Highlights:</span>
                    </span>
                    <ul className="space-y-1.5 pl-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-neutral-300 leading-relaxed list-disc list-inside"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
