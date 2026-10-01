"use client";

import { motion, MotionConfig } from "motion/react";

const LOGOS = [1, 2, 3, 4, 5];
/** Repeats per row. 3 sets ≈ 3600px, so the strip stays filled on wide displays
 *  and the -50% loop stays perfectly seamless. */
const REPEATS = 3;

export function LogoStrip() {
  const items = Array.from({ length: REPEATS }, () => LOGOS).flat();

  return (
    <section className="bg-shuttle-50 py-12 sm:py-16 lg:py-20">
      {/* Edge fade so logos dissolve at both boundaries instead of being sliced.
          Uses a mask, so it never intercepts touches. */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
        role="region"
        aria-label="Partner logos"
      >
        {/* reducedMotion="never" keeps the marquee running even when the OS
            reports prefers-reduced-motion: reduce. */}
        <MotionConfig reducedMotion="never">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            <LogoRow items={items} />
            <LogoRow items={items} hidden />
          </motion.div>
        </MotionConfig>
      </div>
    </section>
  );
}

const ROW_SPACING =
  "gap-x-[40px] pr-[40px] sm:gap-x-[56px] sm:pr-[56px] lg:gap-x-[72px] lg:pr-[72px]";

function LogoRow({
  items,
  hidden = false,
}: {
  items: number[];
  hidden?: boolean;
}) {
  return (
    <ul
      className={`flex shrink-0 items-center ${ROW_SPACING}`}
      aria-hidden={hidden || undefined}
    >
      {items.map((n, i) => (
        <li key={`${n}-${i}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/logoipsum-${n}.svg`}
            alt={`Partner logo ${n}`}
            className="h-[41px] w-auto opacity-90"
            loading="lazy"
            aria-hidden={hidden || undefined}
          />
        </li>
      ))}
    </ul>
  );
}