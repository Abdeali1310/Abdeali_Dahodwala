import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Abdeali's Portfolio",
  description: "Modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative dark">
        <div className="stars fixed top-0 left-0 w-full h-full z-[-1]" />
        {children}
      </body>
    </html>
  );
}
