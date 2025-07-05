import type { Metadata } from "next";
import { Geist, Geist_Mono, Yatra_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Tushar's Portfolio",
  description: "A showcase of Tushar's work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            <Toaster />
            {children}
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  );
}
