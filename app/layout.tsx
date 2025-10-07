import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClientLayout } from "@/components/layout/client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pro Innovations - Professional Construction Services in Connecticut",
  description: "Building Excellence, Delivering Quality. Professional construction, painting, carpentry, and remodeling services in Connecticut. Transform your vision into reality with our expert team.",
  keywords: "construction, painting, carpentry, remodeling, Connecticut, home improvement, renovation",
  authors: [{ name: "Pro Innovations" }],
  openGraph: {
    title: "Pro Innovations - Professional Construction Services",
    description: "Building Excellence, Delivering Quality. Professional construction services in Connecticut.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="proinnovations-theme"
        >
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Header />
            <ClientLayout>
              <main className="min-h-screen">
                {children}
              </main>
            </ClientLayout>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
