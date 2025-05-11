import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Abdeali Dahodwala",
  description: "Modern Portfolio",
  icons: {
    icon: '/profile-modified.ico',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`relative dark ${roboto.className} antialiased`}>
        <div className="stars fixed top-0 left-0 w-full h-full z-[-1]" />
          {children}
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
      </body>
    </html>
  );
}
