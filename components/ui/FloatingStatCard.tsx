import { cn } from "@/lib/cn";
import { AvatarStack } from "@/components/ui/AvatarStack";

type BaseProps = { className?: string };

type CategoryStat = BaseProps & {
  variant: "category";
  title: string;
  courses: number;
  students: string;
};

type ProgressStat = BaseProps & {
  variant: "progress";
  label: string;
  percent: number;
};

type StudentsStat = BaseProps & {
  variant: "students";
  title: string;
  avatars: string[];
  size?: "sm" | "md";
};

export type FloatingStatCardProps =
  | CategoryStat
  | ProgressStat
  | StudentsStat;

export function FloatingStatCard(props: FloatingStatCardProps) {
  const shell = cn(
    "rounded-2xl bg-white p-5 shadow-float",
    props.className
  );

  if (props.variant === "category") {
    return (
      <div className={shell}>
        <p className="label-m text-shuttle-950">{props.title}</p>
        <p className="mt-1.5 text-xs text-shuttle-400">
          {props.courses} Courses <span className="text-[10px]">•</span>{" "}
          {props.students} Students
        </p>
      </div>
    );
  }

  if (props.variant === "progress") {
    return (
      <div className="rounded-2xl bg-white p-4 shadow-float">
        <p className="label-s text-shuttle-950">{props.label}</p>
        <p className="mt-1 font-display text-5xl font-semibold text-shuttle-950">
          {props.percent}%
        </p>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-shuttle-50">
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${props.percent}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-float">
      <AvatarStack
        avatars={props.avatars}
        size={props.size ?? "md"}
        max={props.avatars.length}
      />
      <p className="mt-3 label-m text-shuttle-950">{props.title}</p>
    </div>
  );
}
