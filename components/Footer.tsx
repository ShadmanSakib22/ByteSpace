import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Logo from "@/components/Logo";
import { NewsletterForm } from "@/components/home/NewsletterForm";

const BROWSE_COLUMNS: string[][] = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
];

const PLATFORM_LINKS = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

const LEGAL = ["Privacy Policy", "Terms of Service", "Cookies"];

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
  };
  return map[label] ?? "/courses";
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container className="pt-[72px]">
        <div className="grid gap-12 lg:grid-cols-[504px_116px_414px_1fr] lg:gap-0">
          <div className="lg:col-start-1">
            <Logo dark />
            <p className="mt-4 body-s text-shuttle-950">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-9">
              <NewsletterForm />
            </div>
          </div>

          <nav className="lg:col-start-3" aria-label="Browse">
            <p className="label-m text-shuttle-950">Browse</p>
            <div className="mt-[29px] grid grid-cols-2 gap-x-6">
              {BROWSE_COLUMNS.map((col, i) => (
                <ul key={i} className="flex flex-col gap-y-4">
                  {col.map((label) => (
                    <li key={label}>
                      <Link
                        href={hrefFor(label)}
                        className="text-sm text-shuttle-950 transition hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>

          <nav className="lg:col-start-4" aria-label="Platform">
            <p className="label-m text-shuttle-950">Platform</p>
            <ul className="mt-[29px] flex flex-col gap-y-4">
              {PLATFORM_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href={hrefFor(label)}
                    className="text-sm text-shuttle-950 transition hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-[144px] border-t border-shuttle-100 py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-shuttle-950 sm:flex-row">
            <p>&copy; {currentYear} ByteSpace. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {LEGAL.map((label) => (
                <Link
                  key={label}
                  href={hrefFor(label)}
                  className="transition hover:text-primary"
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
