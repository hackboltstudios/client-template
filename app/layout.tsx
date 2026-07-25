import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psycho Society",
  description: "Designed & Engineered by Hack Bolt Studios",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
          suppressHydrationWarning
      >
      <body className="min-h-screen overflow-x-hidden">
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <main className="flex-1 overflow-x-hidden">
            {children}
          </main>
        </div>
      </ThemeProvider>
      </body>
      </html>
  );
}