import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: string[];
  max?: number;
  size?: "sm" | "md";
  badge?: string;
  className?: string;
};

const sizes = {
  sm: { avatar: "h-8 w-8", badge: "h-8 min-w-8 px-1 text-xs", overlap: "-ml-2 first:ml-0" },
  md: { avatar: "h-[43px] w-[43px]", badge: "h-[43px] min-w-[43px] px-1.5 text-xs", overlap: "-ml-3 first:ml-0" },
};

export function AvatarStack({
  avatars,
  max = 4,
  size = "sm",
  badge,
  className,
}: AvatarStackProps) {
  const s = sizes[size];
  const shown = avatars.slice(0, max);
  return (
    <div className={cn("flex items-center", className)}>
      {shown.map((src, i) => (
        <span
          key={i}
          className={cn(
            "inline-block overflow-hidden rounded-full border-2 border-white bg-shuttle-200",
            s.avatar,
            s.overlap
          )}
        >
          {src ? (
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </span>
      ))}
      {badge ? (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full border-2 border-white bg-accent font-bold text-shuttle-950",
            s.badge,
            s.overlap
          )}
        >
          {badge}
        </span>
      ) : null}
    </div>
  );
}
