"use client";

import { useState, type SubmitEvent } from "react";
import { Container } from "@/components/ui/Container";
import { FloatingStatCard } from "@/components/ui/FloatingStatCard";
import { SearchIcon } from "@/components/ui/icons";

const HERO_DECOR_EDGES = [
  {
    src: "/images/l1.png",
    className: "left-0 top-[278px] h-[294px] w-[203px]",
  },
  {
    src: "/images/r1.png",
    className: "right-0 top-[245px] h-[297px] w-[170px]",
  },
];

const HERO_DECOR = [
  {
    src: "/images/l2.png",
    className: "left-[205px] top-[500px] h-[119px] w-[120px]",
  },
  {
    src: "/images/l3.png",
    className: "left-[65px] top-[712px] h-[243px] w-[245px]",
  },
  {
    src: "/images/r2.png",
    className: "left-[1142px] top-[487px] h-[130px] w-[130px]",
  },
  {
    src: "/images/r3.png",
    className: "left-[1167px] top-[712px] h-[230px] w-[220px]",
  },
];

const HERO_AVATARS = [
  "/images/avatar-43-1.webp",
  "/images/avatar-43-2.webp",
  "/images/avatar-43-3.webp",
  "/images/avatar-43-4.webp",
  "/images/avatar-43-5.webp",
  "/images/avatar-43-6.webp",
];

export function Hero() {
  const [local, setLocal] = useState("");

  function onSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="relative overflow-hidden bg-primary pt-20">
      {/* grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* lime circle behind the person */}
      <div
        aria-hidden
        className="absolute left-[240px] top-[585px] hidden h-[960px] w-[960px] rounded-full bg-electric-lime-500 lg:block"
      />

      {/* decorations bleeding off the section edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {HERO_DECOR_EDGES.map((decor) => (
          <img
            key={decor.src}
            src={decor.src}
            alt=""
            className={`absolute ${decor.className}`}
          />
        ))}
      </div>

      {/* decorations anchored to the 1440 canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
      >
        {HERO_DECOR.map((decor) => (
          <img
            key={decor.src}
            src={decor.src}
            alt=""
            className={`absolute ${decor.className}`}
          />
        ))}
      </div>

      <Container className="relative z-10 pb-0 pt-[89px] text-center">
        <h1 className="mx-auto max-w-[935px] heading-l text-white">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-8 max-w-[750px] body-l text-shuttle-100">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          onSubmit={onSubmit}
          role="search"
          className="mx-auto mt-[60px] flex w-full max-w-[588px] items-start gap-4"
        >
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6">
            <SearchIcon size={20} className="shrink-0 text-shuttle-400" />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-base text-shuttle-950 outline-none placeholder:text-shuttle-400"
            />
          </label>
          <button
            type="submit"
            className="h-[46px] shrink-0 cursor-pointer rounded-full bg-accent px-6 label-l text-shuttle-950 transition hover:brightness-95 active:scale-[0.98]"
          >
            Search
          </button>
        </form>
      </Container>

      {/* person photo + floating cards (desktop composition) */}
      <div className="relative z-10 mx-auto hidden h-[560px] w-full max-w-[1440px] lg:block">
        <div className="absolute inset-0">
          <img
            src="/images/hero-person.webp"
            alt="Student learning with a laptop"
            className="absolute left-[431px] bottom-[0px] h-[541px] w-[578px] object-cover"
          />
          <div className="absolute left-[404px] top-[95px] hidden w-[206px] xl:block">
            <FloatingStatCard
              variant="category"
              title="UI/UX Design"
              courses={200}
              students="1000+"
            />
          </div>
          <div className="absolute left-[842px] top-[107px] hidden w-[232px] xl:block">
            <FloatingStatCard
              variant="progress"
              label="Learning Progress"
              percent={55}
            />
          </div>
          <div className="absolute left-[328px] top-[293px] hidden w-[258px] xl:block">
            <FloatingStatCard
              variant="students"
              title="Happy Students"
              avatars={HERO_AVATARS}
              size="md"
            />
          </div>
        </div>
      </div>

      {/* mobile/tablet: photo only */}
      <div className="relative z-10 mt-10 flex justify-center pb-16 lg:hidden">
        <img
          src="/images/hero-person.webp"
          alt="Student learning with a laptop"
          className="w-[min(578px,100%)] object-cover"
        />
      </div>
    </section>
  );
}
