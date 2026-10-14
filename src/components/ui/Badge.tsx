import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "purple" | "outline" | "success";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-white/[0.05] border-white/10 text-neutral-300",
    purple: "bg-purple-950/40 border-purple-500/30 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    outline: "border-white/15 text-neutral-400 hover:text-white",
    success: "bg-emerald-950/40 border-emerald-500/30 text-emerald-400",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs sm:text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors backdrop-blur-sm",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
