import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Logo from "@/components/Logo";
import { NewsletterForm } from "@/components/home/NewsletterForm";

/* Three flat link columns, matching the design: no column headings. */
const LINK_COLUMNS: string[][] = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const LEGAL = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

function hrefFor(label: string): string {
  const map: Record<string, string> = {
    "Featured Courses": "/courses",
    "Featured Categories": "/courses",
    "Become a Creator": "/register",
    Contact: "/contact",
    Help: "/help",
    About: "/about",
    "Privacy Policy": "/privacy",
    "Terms of Service": "/terms",
    Cookies: "/cookies",
    "Cookies Settings": "/cookies",
  };
  return map[label] ?? "/courses";
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container className="pt-[var(--space-section)]">
        {/* Flex, not fixed grid tracks: the newsletter block keeps a capped
            width while the link columns share whatever is left, so no column
            can be squeezed to a fraction of a pixel. */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-[90px]">
          <div className="w-full max-w-[510px] lg:flex-1">
            <Logo dark />
            <p className="mt-4 max-w-[504px] body-s text-shuttle-950">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-9">
              <NewsletterForm />
            </div>
          </div>

          <nav
            className="grid w-full grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 space-between"
            aria-label="Footer"
          >
            {LINK_COLUMNS.map((col, i) => (
              <ul key={i} className="flex flex-col gap-y-1 sm:gap-y-2">
                {col.map((label) => (
                  <li key={label}>
                    <Link
                      href={hrefFor(label)}
                      className="inline-flex min-h-9 items-center whitespace-nowrap text-sm text-shuttle-950 transition hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-shuttle-100 py-5 sm:mt-20 lg:mt-[144px]">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-shuttle-950 sm:flex-row">
            <p>&copy; {currentYear} ByteSpace. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-8">
              {LEGAL.map((label) => (
                <Link
                  key={label}
                  href={hrefFor(label)}
                  className="inline-flex min-h-9 items-center transition hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
