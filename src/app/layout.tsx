import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { CartProvider } from "@/context/CartContext"
import { ToastProvider } from "@/context/ToastContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopEase - Modern E-commerce Platform",
  description: "A modern e-commerce platform with beautiful UI effects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
