import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { Playfair_Display, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});
export const metadata: Metadata = {
  title: "Abdeali Dahodwala",
  description: "Abdeali Dahodwala Portfolio",
  icons: {
    icon: "/profile-modified.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="transition-colors duration-300"
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      
      <body className={`relative ${roboto.className} antialiased`}>
        <ThemeProvider>
          {/* Adjust the classes here */}
          <div className="sunny dark:hidden fixed top-0 left-0 w-full h-full z-[-1]" />
          <div className="stars dark:block hidden fixed top-0 left-0 w-full h-full z-[-1]" />
          <div className="hidden">
            <FloatingNav navItems={navItems} />
          </div>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="md:hidden">
            <MobileNavbar />
          </div>
          {children}
          <Footer />

          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#333",
                color: "#fff",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
