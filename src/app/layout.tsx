import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awesome Web Setups - Open Source Web Development Configurations",
  description: "Explore a collection of open source web development setups. Find and share modern web stacks, tools, and frameworks configurations.",
  keywords: ["web development", "open source", "development setup", "web stack", "configuration", "boilerplate"],
  authors: [{ name: "Arnaud ADJOVI" }],
  openGraph: {
    title: "Awesome Web Setups - Open Source Web Development Configurations",
    description: "Explore a collection of open source web development setups. Find and share modern web stacks, tools, and frameworks configurations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awesome Web Setups",
    description: "Explore a collection of open source web development setups",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://awesome-web-setups.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Check if dark mode is stored in localStorage
                  var theme = localStorage.getItem('theme');
                  
                  // If not stored, check system preference
                  if (theme === null) {
                    theme = true
                  } else {
                    theme = theme === 'dark';
                  }
                  
                  // Apply dark mode immediately
                  if (theme) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  console.error('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
