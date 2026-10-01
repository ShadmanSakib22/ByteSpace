import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

const LOGOS = [1, 2, 3, 4, 5];

export function LogoStrip() {
  return (
    <section className="bg-shuttle-50 py-20">
      <Container className="max-w-[1180px]">
        <div className="flex flex-wrap items-center justify-center gap-x-[72px] gap-y-8 md:justify-between">
          {LOGOS.map((n, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={n}
              src={`/images/logoipsum-${n}.svg`}
              alt={`Partner logo ${n}`}
              className={cn(
                "h-[41px] w-auto opacity-90",
                i >= 3 ? "hidden md:block" : ""
              )}
              loading="lazy"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
