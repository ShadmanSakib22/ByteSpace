import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// l1/r1 are cropped mid-shape at the asset border and bleed off the section edges.
const CTA_DECOR_EDGES = [
  {
    src: "/images/l1.png",
    className: "left-0 top-[-46px] h-[210px] w-[145px]",
  },
  {
    src: "/images/r1.png",
    className: "hidden xl:block right-0 top-[30px] h-[300px] w-[172px]",
    white: true,
  },
  {
    src: "/images/r2.png",
    className: "left-0 top-[240px] h-[150px] w-[150px]",
    white: true,
  },
];

const CTA_DECOR = [
  {
    src: "/images/l2.png",
    className: "left-[220px] top-[20px] h-[130px] w-[131px]",
    white: true,
  },
  {
    src: "/images/r2.png",
    className: "left-[1100px] top-[10px] h-[160px] w-[160px]",
  },
  {
    src: "/images/l3.png",
    className: "left-[75px] top-[355px] h-[190px] w-[192px]",
  },
  {
    src: "/images/r3.png",
    className: "left-[1175px] top-[330px] h-[160px] w-[153px]",
  },
];

type Decor = { src: string; className: string; white?: boolean };

function DecorShape({ src, className, white }: Decor) {
  const mask = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        ...mask,
        backgroundImage: white
          ? "linear-gradient(140deg, #ffffff 0%, #e8e8ea 100%)"
          : "linear-gradient(140deg, var(--color-electric-lime-400) 0%, var(--color-electric-lime-500) 70%)",
      }}
    />
  );
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-14 sm:py-[72px] lg:py-[85px]">
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

      {/* decorations bleeding off the section edges — desktop only, where they
          frame the copy instead of covering it */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {CTA_DECOR_EDGES.map((decor) => (
          <DecorShape key={decor.src} {...decor} />
        ))}
      </div>

      {/* decorations anchored to the 1440 canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
      >
        {CTA_DECOR.map((decor) => (
          <DecorShape key={decor.src} {...decor} />
        ))}
      </div>

      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-[710px] heading-m text-shuttle-50">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-4 max-w-[710px] xl:max-w-[964px] body-l text-shuttle-50 sm:mt-6">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button href="/register" className="mt-8 sm:mt-[50px]">
          Join as Creator
        </Button>
      </Container>
    </section>
  );
}
