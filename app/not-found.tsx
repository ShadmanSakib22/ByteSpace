"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [--grid-size:60px] lg:opacity-100 lg:[--grid-size:120px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "var(--grid-size) var(--grid-size)",
        }}
      />

      <Container className="relative z-10 flex flex-col items-center pb-16 pt-32 text-center lg:pb-[124px] lg:pt-[160px]">
        {/* 404 — lime gradient fading to transparent, per the design */}
        <p
          aria-hidden
          className="font-display text-[clamp(120px,33vw,480px)] leading-none font-semibold tracking-[-0.01em]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #D4FB20 0%, rgba(212,251,32,0.81) 50.5%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          404
        </p>

        {/* sits over the lower half of the numerals */}
        <h1 className="heading-l -mt-6 max-w-[935px] text-white lg:-mt-12">
          The page you are looking for doesn’t exist
        </h1>

        <p className="mt-6 max-w-[488px] body-l text-shuttle-100 lg:mt-8">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-[46px] items-center justify-center rounded-full bg-accent px-6 label-l text-shuttle-950 transition hover:brightness-95 active:scale-[0.98] lg:mt-10"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
