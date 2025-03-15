import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local";
import { Analytics } from "@/components/analytics";
import Shortcuts from "@/components/shortcuts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Gergo's Portfolio",
  description: "Yet another portfolio site, but this one is mine.",
  metadataBase: new URL('https://gergo.cc'),
  openGraph: {
    title: "Gergo's Portfolio",
    description: "Yet another portfolio site, but this one is mine.",
    type: "website",
    images: [
        {
        url: "/og-image.png",
        width: 1380,
        height: 934,
        alt: "Gergo's Portfolio",
      }
    ]
  },
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
        <head>
          <Analytics />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Shortcuts />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="font-sans flex flex-col items-center min-h-screen py-16 md:px-10 gap-16 container">
              {children}
            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}