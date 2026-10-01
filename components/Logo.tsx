import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <img
        src="/images/logo-mark.svg"
        alt=""
        className="h-8 w-[29px]"
        width={29}
        height={32}
      />
      <span
        className={cn(
          "font-logo text-2xl font-bold leading-0 pt-2.5",
          dark ? "text-shuttle-950" : "text-shuttle-50",
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
}
