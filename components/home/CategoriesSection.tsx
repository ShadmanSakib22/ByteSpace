import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { CATEGORY_CARDS } from "@/data/categories";

export function CategoriesSection() {
  return (
    <section className="pb-[120px]">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          body="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          titleClassName="text-ink-900"
          bodyClassName="max-w-[917px]"
        />

        <div className="mt-[38px] grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-6 xl:gap-10">
          {CATEGORY_CARDS.map((cat) => (
            <Link
              key={cat.id}
              href="/courses"
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-shuttle-200 bg-transparent transition duration-200 hover:border-accent hover:shadow-float"
            >
              <CategoryIcon name={cat.icon} size={60} />
              <span className="label-m text-shuttle-950">{cat.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
