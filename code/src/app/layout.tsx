import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khyathiassociates.com'), // Update with your actual domain
  title: {
    default: "Khyathi Associates - Legal Services | Pan-India Offices",
    template: "%s | Khyathi Associates",
  },
  description: "Khyathi Associates - A group of advocates focused on taking up and solving legal issues in Indian courts. Expert legal representation in civil, criminal, corporate, and public law matters. Offices across India in New Delhi, Hyderabad, Amaravati, Mumbai, Kolkata, Kochi, Chennai, Dispur, Lucknow, Bengaluru, and Bhopal.",
  keywords: [
    "legal services",
    "law firm",
    "advocates",
    "lawyers",
    "legal consultation",
    "Supreme Court",
    "High Court",
    "NCLT",
    "civil litigation",
    "criminal law",
    "corporate law",
    "government cases",
    "public law",
    "Hyderabad lawyers",
    "legal representation",
    "arbitration",
    "dispute resolution",
    "Kranthi Naidu Boya",
  ],
  authors: [{ name: "Khyathi Associates" }],
  creator: "Khyathi Associates",
  publisher: "Khyathi Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/khyathi.png',
    apple: '/images/khyathi.png',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://khyathiassociates.com", // Update with your actual domain
    siteName: "Khyathi Associates",
    title: "Khyathi Associates - Legal Services | Pan-India Offices",
    description: "Expert legal representation in civil, criminal, corporate, and public law matters. Offices across India.",
    images: [
      {
        url: "/images/khyathi.png",
        width: 1200,
        height: 630,
        alt: "Khyathi Associates Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khyathi Associates - Legal Services",
    description: "Expert legal representation in civil, criminal, corporate, and public law matters.",
    images: ["/images/khyathi.png"],
    creator: "@kranthirebel5",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
