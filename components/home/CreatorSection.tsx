import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { FloatingStatCard } from "@/components/ui/FloatingStatCard";
import { CheckIcon } from "@/components/ui/icons";
import { FEATURED_COURSES } from "@/data/courses";

const FIGMA_COURSE = FEATURED_COURSES[0];

const STATS = [
  { value: "16", label: "Creators" },
  { value: "70+", label: "Courses" },
  { value: "12K", label: "Students" },
];

const FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const STUDENT_AVATARS = [
  "/images/avatar-43-1.webp",
  "/images/avatar-43-2.webp",
  "/images/avatar-43-3.webp",
  "/images/avatar-43-4.webp",
  "/images/avatar-43-5.webp",
  "/images/avatar-43-6.webp",
];

function Squiggle({ src, className }: { src: string; className?: string }) {
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
      className={`relative isolate h-[215px] w-[215px] overflow-hidden ${className ?? ""}`}
    >
      {/* the asset is a grayscale 3D render, so the lime fill is masked by it */}
      <div
        className="absolute inset-0"
        style={{
          ...mask,
          backgroundImage:
            "linear-gradient(140deg, var(--color-electric-lime-400) 0%, var(--color-electric-lime-500) 70%)",
        }}
      />
    </div>
  );
}

function RevenueCard({ className }: { className: string }) {
  return (
    <div
      className={`absolute z-10 rounded-2xl bg-primary p-4 text-shuttle-50 shadow-float ${className}`}
    >
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/30">
        <div className="h-full w-[62%] rounded-full bg-accent" />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="inline-flex h-6 min-w-[39px] items-center justify-center rounded-full bg-accent px-2 text-[10px] font-semibold text-shuttle-950">
          +12$
        </span>
        <span className="font-display text-2xl font-semibold whitespace-nowrap">
          $120.29
        </span>
      </div>
      <p className="mt-1.5 text-sm font-medium">July 1-28</p>
      <p className="text-xs opacity-90">Total Revenue</p>
    </div>
  );
}

function RevenueCardYear({ className }: { className: string }) {
  return (
    <div
      className={`absolute z-10 rounded-2xl bg-primary p-4 text-shuttle-50 shadow-float ${className}`}
    >
      <span className="inline-flex h-6 min-w-[39px] items-center justify-center rounded-full bg-accent px-2 text-[10px] font-semibold text-shuttle-950">
        +12$
      </span>
      <p className="mt-1.5 font-display text-2xl font-semibold whitespace-nowrap">
        $1,200.38
      </p>
      <p className="mt-1 text-sm font-medium">2023</p>
      <p className="text-xs opacity-90">Year to Date</p>
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex w-[227px] items-center justify-between">
      <span className="body-l text-shuttle-950">{label}</span>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white">
        <CheckIcon size={14} strokeWidth={2.5} className="text-primary" />
      </span>
    </li>
  );
}

export function CreatorSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-[80px] xl:pt-[120px]">
      {/* soft background blobs anchored to the 1440 canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[1440px] -translate-x-1/2 xl:block"
      >
        <img
          src="/images/decor-creator-bg.svg"
          alt=""
          className="absolute left-[-667px] top-[-626px] w-[2776px]"
        />
        <div
          className="absolute left-[-287px] top-[826px] h-[672px] w-[672px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(203,252,1,0.6) 0%, rgba(203,252,1,0) 72%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Row 1: growth (text left, collage right) */}
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-[63px]">
          <div className="w-full xl:w-[574px] xl:shrink-0">
            <h2 className="heading-m text-shuttle-950">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-10 max-w-[477px] body-l text-shuttle-700">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex w-[322px] max-w-full justify-between">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-[36px] font-medium leading-tight text-primary">
                    {s.value}
                  </dt>
                  <dd className="body-l text-shuttle-700">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* collage 1 */}
          <div className="relative mx-auto h-[304px] w-[342px] shrink-0 sm:h-[414px] sm:w-[466px] xl:mx-0 xl:h-[552px] xl:w-[621px]">
            <div className="absolute left-0 top-0 h-[552px] w-[621px] origin-top-left scale-[0.55] sm:scale-[0.75] xl:scale-100">
              <div className="absolute left-0 top-0 z-10 w-[373px]">
                <CourseCard course={FIGMA_COURSE} elevated />
              </div>

              <img
                src="/images/hero-person.webp"
                alt="Creator teaching a course"
                className="absolute left-0 top-[12px] z-20 h-[540px] w-[577px] object-cover"
              />
              <div className="absolute left-[345px] top-[213px] z-30 w-[232px]">
                <FloatingStatCard
                  variant="progress"
                  label="Learning Progress"
                  percent={55}
                />
              </div>
              <Squiggle
                src="/images/img-6180.webp"
                className="absolute left-[406px] top-[67px] z-40"
              />
            </div>
          </div>
        </div>

        {/* Row 2: create & manage (collage left, text right) */}
        <div className="mt-[72px] flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-[79px]">
          {/* collage 2 */}
          <div className="relative mx-auto h-[328px] w-[298px] shrink-0 sm:h-[447px] sm:w-[406px] xl:mx-0 xl:h-[596px] xl:w-[541px]">
            <div className="absolute left-0 top-0 h-[596px] w-[541px] origin-top-left scale-[0.55] sm:scale-[0.75] xl:scale-100">
              <RevenueCard className="left-0 top-[44px] h-[120px] w-[232px]" />
              <RevenueCardYear className="left-0 top-[194px] h-[136px] w-[134px]" />

              <img
                src="/images/creator-woman.webp"
                alt="Creator managing courses"
                className="absolute left-[28px] top-0 z-20 h-[596px] w-[435px] object-cover"
              />
              <div className="absolute left-[283px] top-[413px] z-30 w-[258px]">
                <FloatingStatCard
                  variant="students"
                  title="Happy Students"
                  avatars={STUDENT_AVATARS}
                  size="md"
                />
              </div>
              <Squiggle
                src="/images/img-616c.webp"
                className="absolute left-[305px] top-[114px] z-40"
              />
            </div>
          </div>

          <div className="w-full xl:w-[580px] xl:shrink-0">
            <h2 className="heading-m max-w-[391px] text-shuttle-950">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-10 max-w-[574px] body-l text-shuttle-700">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul className="mt-10 flex flex-col gap-4">
              {FEATURES.map((f) => (
                <CheckItem key={f} label={f} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
