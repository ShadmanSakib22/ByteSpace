"use client";

import { useState, type SubmitEvent } from "react";
import { cn } from "@/lib/cn";
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

function HeroCollage({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <img
        src="/images/hero-person.webp"
        alt="Student learning with a laptop"
        className="absolute left-[431px] bottom-[0px] h-[541px] w-[578px] object-cover"
      />
      <div className="absolute left-[404px] top-[95px] w-[206px]">
        <FloatingStatCard
          variant="category"
          title="UI/UX Design"
          courses={200}
          students="1000+"
        />
      </div>
      <div className="absolute left-[842px] top-[107px] w-[232px]">
        <FloatingStatCard
          variant="progress"
          label="Learning Progress"
          percent={55}
        />
      </div>
      <div className="absolute left-[328px] top-[293px] w-[258px]">
        <FloatingStatCard
          variant="students"
          title="Happy Students"
          avatars={HERO_AVATARS}
          size="md"
        />
      </div>
    </div>
  );
}

export function Hero() {
  const [local, setLocal] = useState("");

  function onSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="relative overflow-hidden bg-primary pt-20">
      {/* grid — smaller and fainter on small screens so it reads as texture, not tiles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [--grid-size:60px] lg:opacity-100 lg:[--grid-size:120px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "var(--grid-size) var(--grid-size)",
        }}
      />

      {/* lime circle behind the person */}
      <div
        aria-hidden
        className="absolute top-[585px] h-[960px] w-[960px] rounded-full bg-electric-lime-500 lg:block"
        style={{ left: "calc(240px + min(0px, (100% - 1280px) / 2))" }}
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

      <Container className="relative z-10 pb-0 pt-14 text-center sm:pt-[72px] lg:pt-[89px]">
        <h1 className="mx-auto max-w-[935px] heading-l text-white">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[750px] body-l text-shuttle-100 sm:mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          onSubmit={onSubmit}
          role="search"
          className="mx-auto mt-8 flex w-full max-w-[588px] flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:mt-[60px]"
        >
          <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 sm:px-6">
            <SearchIcon size={20} className="shrink-0 text-shuttle-400" />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Course, topic, creator"
              className="h-[44px] md:h-[52px] min-w-0 flex-1 bg-transparent text-base text-shuttle-950 outline-none placeholder:text-shuttle-400"
            />
          </label>
          <button
            type="submit"
            className="h-[44px] md:h-[52px] shrink-0 cursor-pointer rounded-full bg-accent px-6 label-l text-shuttle-950 transition hover:brightness-95 active:scale-[0.98]"
          >
            Search
          </button>
        </form>
      </Container>

      {/* person photo + floating cards (desktop composition, 1:1).
          The stage is authored at 1440px but the artwork only occupies
          x 328..1074, so below xl the stage slides left by half the shortfall.
          The expression resolves to exactly 0 from xl up, leaving the wide
          layout untouched. */}
      <div className="relative z-10 mx-auto hidden h-[560px] w-full max-w-[1440px] lg:block">
        <div
          className="absolute inset-y-0 w-[1440px]"
          style={{ left: "min(0px, calc((100% - 1280px) / 2))" }}
        >
          <HeroCollage />
        </div>
      </div>

      {/* Small screens: the three stat cards at full size in a grid, instead of
          the photo-and-cards composition (which would shrink their text to
          an unreadable size). */}
      <div className="relative z-10 mx-auto w-full px-[var(--gutter)] pb-10 sm:pb-16 lg:hidden">
        <ul className="mx-auto mt-8 grid max-w-[420px] list-none grid-cols-1 gap-4 sm:mt-10 sm:max-w-[560px] sm:grid-cols-2">
          <li className="min-w-0 sm:col-span-2 sm:justify-self-center sm:[&>div]:w-[232px]">
            <FloatingStatCard
              variant="progress"
              label="Learning Progress"
              percent={55}
            />
          </li>
          <li className="min-w-0">
            <FloatingStatCard
              variant="category"
              title="UI/UX Design"
              courses={200}
              students="1000+"
            />
          </li>
          <li className="min-w-0">
            <FloatingStatCard
              variant="students"
              title="Happy Students"
              avatars={HERO_AVATARS}
              size="md"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
