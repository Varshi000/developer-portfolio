"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4", align === "center" ? "flex justify-center" : "flex justify-start")}>
          <Badge variant="purple" size="md">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text-purple">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
