import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-clashDisplay",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description:
    "Get Access to Hundreds of Courses Available - Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

// viewport-fit=cover lets the body reach under notches/rounded corners so the
// safe-area padding in globals.css has something to inset against.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
