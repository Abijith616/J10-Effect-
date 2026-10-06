import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J10 Effect — AI Advertising Studio",
  description:
    "J10 Effect is an AI advertising company creating impossible campaigns, films, and brand worlds.",
  openGraph: {
    title: "J10 Effect — AI Advertising Studio",
    description: "AI-built advertising for brands that refuse to blend in.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
