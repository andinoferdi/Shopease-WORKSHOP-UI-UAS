import type React from "react";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimationProvider from "../components/providers/AnimationProvider";
import PageTransition from "../components/effects/PageTransition";
import ScrollProgress from "../components/effects/ScrollProgress";
import MouseFollowEffect from "../components/effects/MouseFollowEffect";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ShopEase - Modern E-commerce",
  description: "A modern e-commerce platform with everything you need",
};

export const viewport: Viewport = {
  themeColor: "#0F766E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-gray-50 text-gray-900 font-poppins">
        <AnimationProvider>
          <MouseFollowEffect>
            <div className="flex min-h-screen flex-col">
              <ScrollProgress />
              <Header />
              <div className="flex-1">
                <PageTransition>{children}</PageTransition>
              </div>
              <div className="md:ml-0">
                <Footer />
              </div>
            </div>
          </MouseFollowEffect>
        </AnimationProvider>
      </body>
    </html>
  );
}
