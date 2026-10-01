import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  variant?: "accent" | "outline-white";
  size?: "sm" | "md";
  href?: string;
  className?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
};

const variants: Record<string, string> = {
  accent: "bg-accent text-shuttle-950 hover:brightness-95",
  "outline-white": "border border-white/40 text-white hover:bg-white/10",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 label-m",
  md: "px-6 py-3 label-l",
};

export function Button({
  variant = "accent",
  size = "md",
  href,
  className,
  type = "button",
  onClick,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full transition duration-200 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
