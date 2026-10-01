"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ALL_COURSES,
  CATEGORY_ROWS,
  FEATURED_COURSES,
  filterCourses,
} from "@/data/courses";

export function CoursesSection() {
  const [category, setCategory] = useState("Featured");

  const courses = useMemo(() => {
    if (category === "Featured" || !category) return FEATURED_COURSES;
    return filterCourses(ALL_COURSES, category, "");
  }, [category]);
  const isDefault = category === "Featured";

  return (
    <section id="courses" className="scroll-mt-8 py-[var(--space-section)]">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          body="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          titleClassName="text-ink-900"
        />

        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-[42px] sm:gap-4">
          {CATEGORY_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex w-full flex-wrap justify-center gap-2 sm:gap-4"
            >
              {row.map((label) =>
                label === "+ More" ? (
                  <Link
                    key={label}
                    href="/courses"
                    className="inline-flex min-h-11 items-center justify-center px-3 label-m whitespace-nowrap text-primary transition hover:underline"
                  >
                    {label}
                  </Link>
                ) : (
                  <Pill
                    key={label}
                    active={category === label}
                    onClick={() => setCategory(label)}
                  >
                    {label}
                  </Pill>
                )
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {courses.length === 0 ? (
          <div className="mt-12 rounded-card border border-shuttle-200 bg-white p-8 text-center sm:mt-[76px] sm:p-12">
            <p className="heading-xs text-ink-900">No courses found</p>
            <p className="mt-2 body-m text-shuttle-400">
              “{category}” has no courses yet.
            </p>
            <button
              type="button"
              className="mt-4 label-m text-primary hover:underline"
              onClick={() => setCategory("Featured")}
            >
              Browse featured courses
            </button>
          </div>
        ) : null}

        {isDefault ? null : (
          <p className="mt-6 text-center text-sm text-shuttle-400">
            Showing {courses.length} of {ALL_COURSES.length} courses
            {category !== "Featured" ? ` in ${category}` : ""}
            {" · "}
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => setCategory("Featured")}
            >
              reset
            </button>
          </p>
        )}
      </Container>
    </section>
  );
}
