"use client";

import { useState, type SubmitEvent } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex max-w-[510px] gap-4">
        <label className="flex h-[52px] flex-1 items-center rounded-full border border-shuttle-200 bg-white px-6">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setDone(false);
            }}
            placeholder="Enter your email"
            className="w-full bg-transparent text-base text-shuttle-950 outline-none placeholder:text-shuttle-950"
          />
        </label>
        <button
          type="submit"
          className="h-[52px] shrink-0 cursor-pointer rounded-full bg-accent px-6 label-l text-shuttle-950 transition hover:brightness-95 active:scale-[0.98]"
        >
          Search
        </button>
      </form>
      <p className="mt-4 max-w-[510px] body-s text-shuttle-950">
        {done ? (
          <span className="text-primary">
            Thanks for subscribing! You&apos;ll hear from us soon.
          </span>
        ) : (
          <>
            By subscribing, you agree to our{" "}
            <a href="/privacy" className="font-semibold hover:text-primary">
              Privacy Policy
            </a>{" "}
            and consent to receive updates from our company.
          </>
        )}
      </p>
    </div>
  );
}
