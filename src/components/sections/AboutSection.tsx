"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { about } from "@/lib/data";

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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
    <section id="about" className="py-20 md:py-28 relative">
      <Container>
        <SectionHeader
          badge={about.greeting}
          title="Passion for Crafting"
          titleHighlight="Modern Systems"
          description={about.headline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Narrative Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 space-y-5 text-neutral-300 leading-relaxed text-base sm:text-lg"
          >
            {about.paragraphs.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {about.stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-5 text-center flex flex-col justify-center items-center h-full border-purple-500/10 hover:border-purple-500/30">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white gradient-text-purple mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-400 font-medium">
                    {stat.label}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Pillars / Strengths Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {about.highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-4">
                  <IconRenderer name={highlight.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
