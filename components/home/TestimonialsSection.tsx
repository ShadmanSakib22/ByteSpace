import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pb-[58px] pt-[74px]">
      {/* gradient blobs anchored to the 1440 canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2"
      >
        <div
          className="absolute left-[842px] top-[-241px] h-[1137px] w-[1137px] rounded-full"
          style={{
            filter: "blur(40px)",
            background:
              "radial-gradient(circle closest-side, rgba(203,252,1,0.16) 0%, rgba(203,252,1,0.0368) 53%, rgba(203,252,1,0.0096) 75%, rgba(203,252,1,0) 100%)",
          }}
        />
        <div
          className="absolute left-[395px] top-[-138px] h-[672px] w-[672px] rounded-full"
          style={{
            filter: "blur(40px)",
            background:
              "radial-gradient(circle closest-side, rgba(203,252,1,0.36) 0%, rgba(203,252,1,0.0828) 53%, rgba(203,252,1,0.0216) 75%, rgba(203,252,1,0) 100%)",
          }}
        />
        <div
          className="absolute left-[-442px] top-[149px] h-[1137px] w-[1137px] rounded-full"
          style={{
            filter: "blur(40px)",
            background:
              "radial-gradient(circle closest-side, rgba(0,59,226,0.0576) 0%, rgba(0,59,226,0.0132) 53%, rgba(0,59,226,0.0035) 75%, rgba(0,59,226,0) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10 max-w-[1252px]">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:gap-[43px]">
          <h2 className="heading-m text-ink-950 md:flex-1 xl:w-[577px] xl:flex-none">
            Discover What Our Community Is Saying
          </h2>
          <p className="body-l text-ink-700 md:flex-1 xl:w-[580px] xl:flex-none">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-[72px] grid items-start gap-8 md:grid-cols-3 md:gap-[41px]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col rounded-card bg-white p-6"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-6">
                <p className="heading-xs text-ink-950">{t.name}</p>
                <p className="body-l text-primary">{t.role}</p>
              </figcaption>
              <blockquote className="mt-6 body-l text-ink-700">
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
