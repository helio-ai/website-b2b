import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_OG, JsonLd, orgSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const title = "AI Agent, Inbox and CRM for B2B Sales | YourLio for business";
const description =
  "YourLio answers enquiries on your website, WhatsApp, Instagram and Facebook, qualifies every lead, books the call and keeps one memory in a shared inbox and CRM.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s" },
  description,
  applicationName: "YourLio for business",
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "YourLio for business", type: "website", images: [{ url: DEFAULT_OG }] },
  twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG] },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0a17",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={[orgSchema, websiteSchema]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
