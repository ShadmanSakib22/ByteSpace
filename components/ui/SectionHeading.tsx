import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  body?: string;
  align?: "center" | "split";
  as?: "h1" | "h2";
  titleClassName?: string;
  bodyClassName?: string;
  className?: string;
};

export function SectionHeading({
  title,
  body,
  align = "center",
  as: Tag = "h2",
  titleClassName,
  bodyClassName,
  className,
}: SectionHeadingProps) {
  if (align === "split") {
    return (
      <div
        className={cn(
          "grid items-start gap-6 md:grid-cols-2 md:gap-10",
          className
        )}
      >
        <Tag
          className={cn("heading-m text-ink-900", titleClassName)}
        >
          {title}
        </Tag>
        {body ? (
          <p className={cn("body-l text-ink-700", bodyClassName)}>{body}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("text-center", className)}>
      <Tag className={cn("heading-m text-ink-900", titleClassName)}>
        {title}
      </Tag>
      {body ? (
        <p
          className={cn(
            "mx-auto mt-4 max-w-4xl body-l text-shuttle-400",
            bodyClassName
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
