import Link from "next/link";
import type { Course } from "@/data/courses";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { BarsIcon, StarIcon } from "@/components/ui/icons";

const AVATARS = [
  "/images/avatar-1.webp",
  "/images/avatar-2.webp",
  "/images/avatar-3.webp",
  "/images/avatar-4.webp",
];

export function CourseCard({
  course,
  elevated = false,
}: {
  course: Course;
  elevated?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-card border border-shuttle-200 bg-white p-4 transition duration-200 ${
        elevated ? "shadow-float" : "hover:shadow-float"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={course.image}
          alt={course.title}
          className="aspect-[341/195] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-white/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-700 backdrop-blur-sm">
            {course.lessons} Lessons
          </span>
          <span className="rounded-full border border-white/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-700 backdrop-blur-sm">
            {course.duration}
          </span>
          <span className="rounded-full border border-white/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-700 backdrop-blur-sm">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="heading-xs text-ink-950">{course.title}</h3>
        <span className="flex shrink-0 items-center gap-1 body-l text-ink-700">
          {course.rating}
          <StarIcon size={18} className="text-shuttle-300" />
        </span>
      </div>

      <p className="mt-1 text-xs text-shuttle-400">
        by{" "}
        <Link href="/creators" className="text-primary hover:underline">
          {course.creator}
        </Link>
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-shuttle-50 px-3 py-1.5 text-xs font-medium text-shuttle-700">
          <BarsIcon size={14} />
          {course.level}
        </span>
        <AvatarStack avatars={AVATARS} badge={course.students} size="sm" />
      </div>

      <div className="mt-3 flex items-baseline">
        <span className="font-display text-xl font-semibold text-primary">
          ${course.price}
        </span>
        <span className="text-xs text-ink-700">/lifetime</span>
      </div>
    </article>
  );
}
