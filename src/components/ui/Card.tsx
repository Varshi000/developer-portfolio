import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#0e0e14]/70 border border-white/[0.08] backdrop-blur-xl p-6 transition-all duration-300",
        hoverEffect &&
          "hover:border-purple-500/30 hover:bg-[#12121c]/80 hover:shadow-[0_12px_30px_-10px_rgba(168,85,247,0.12)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
