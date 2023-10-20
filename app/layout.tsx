import { Toaster } from "@/components/ui/toast/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const inter = Lato({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Junais Babu",
  description: "Junais Babu's official website",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
