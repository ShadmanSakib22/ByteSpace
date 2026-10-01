import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type PillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "active" | "glass" | "link";
  active?: boolean;
  children: ReactNode;
};

const variants: Record<string, string> = {
  default: "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100",
  active: "bg-accent text-shuttle-950",
  glass:
    "border border-white/40 bg-white/70 text-ink-700 backdrop-blur-sm",
  link: "text-primary hover:underline",
};

export function Pill({
  variant = "default",
  active = false,
  className,
  children,
  ...props
}: PillProps) {
  const resolved = active ? "active" : variant;
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap transition duration-200",
        resolved === "glass"
          ? "px-3 py-1.5 text-xs font-medium"
          : resolved === "link"
            ? "label-m"
            : "px-4 py-3 label-m",
        variants[resolved],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
