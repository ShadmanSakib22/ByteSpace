"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const ACTION_LINKS = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

const HIDE_DELTA = 4;

function useScrollDirection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let frame = 0;

    const sync = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      setIsScrolled(y > 0);
      // Hide while scrolling down, reveal as soon as the user scrolls up.
      if (delta > HIDE_DELTA) setIsHidden(true);
      else if (delta < -HIDE_DELTA || y <= 0) setIsHidden(false);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { isScrolled, isHidden };
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const { isScrolled, isHidden } = useScrollDirection();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock the page behind the open mobile menu and close it on outside click / Escape.
  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (menuRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // Route changes should never leave the menu hanging open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The home hero is dark, so the navbar starts transparent there; every other
  // route gets the solid treatment from the first pixel.
  const isOverlay = pathname === "/" && !isScrolled;
  const isLight = isOverlay;

  const headerBg = isOverlay
    ? "bg-transparent"
    : "bg-white/70 backdrop-blur-md";
  const textColor = isLight ? "text-shuttle-50" : "text-shuttle-950";
  const hoverColor = isLight ? "hover:text-accent" : "hover:text-primary";
  const mobileBg = isOverlay ? "bg-primary" : "bg-white";
  const mobileBorder = isOverlay ? "border-white/10" : "border-shuttle-100";

  const navLinkClass = (href: string) => {
    const active = isActive(pathname, href);
    const tone = active ? "text-accent" : textColor;
    return `label-m transition-colors ${tone} ${hoverColor}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-soft ${headerBg} ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo dark={!isLight} />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {ACTION_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            aria-label="Cart"
            aria-current={isActive(pathname, "/cart") ? "page" : undefined}
            className={`${isActive(pathname, "/cart") ? "text-accent" : textColor} transition-colors ${hoverColor}`}
          >
            <BagIcon size={24} />
          </Link>
        </div>

        <button
          type="button"
          className={`${textColor} lg:hidden`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </Container>

      {open ? (
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`fixed top-20 left-0 right-0 border-t ${mobileBorder} ${mobileBg} px-4 pb-6 shadow-float lg:hidden`}
        >
          <nav className="flex flex-col gap-4 pt-4" aria-label="Mobile">
            {[...NAV_LINKS, ...ACTION_LINKS].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`label-l ${isActive(pathname, link.href) ? "text-accent" : textColor}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className={`label-l ${isActive(pathname, "/cart") ? "text-accent" : textColor}`}
              onClick={() => setOpen(false)}
            >
              Cart
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}