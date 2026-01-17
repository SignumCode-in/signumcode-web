import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SignumCode | Software Startup for Scalable Solutions",
    template: "%s | SignumCode",
  },
  description: "SignumCode delivers high-performance mobile apps, web applications, and backend systems for India and global clients. High trust, engineering excellence.",
  keywords: ["Software Startup", "Flutter Development", "Web Development India", "Backend Engineering", "UI/UX Design"],
  authors: [{ name: "SignumCode" }],
  creator: "SignumCode",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://signumcode.com",
    title: "SignumCode | Crafting Scalable Software Solutions",
    description: "Expert software engineering for global brands and startups. Specializing in Flutter, React, and Scalable Backends.",
    siteName: "SignumCode",
  },
  twitter: {
    card: "summary_large_image",
    title: "SignumCode | Crafting Scalable Software Solutions",
    description: "Expert software engineering for global brands and startups.",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased",
          outfit.variable,
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
