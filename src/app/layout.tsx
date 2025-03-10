import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
//import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ryota-space",
  description: "Ryota's personal space",
  appleWebApp: true,
  openGraph: {
    title: "ryota-space",
    description: "",
    url: "https://ryota-space.vercel.app",
    siteName: "ryota-space",
    images: [
      {
        url: "/logo/favicon.ico",
        width: 200,
        height: 200,
        alt: "ryota-space",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  icons: {
    icon: "/logo/favicon.ico",
    shortcut: "/logo/favicon-16x16.png",
    apple: "/logo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*<Header />*/}
          {children}
          <GoogleAnalytics gaId="G-0GZDYB8RRC" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
