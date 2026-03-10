import type { Metadata } from "next";
import "./globals.scss";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Sean Tsai",
  description: "Personal website of Sean Tsai",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
