"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  const isAdmin = pathname?.includes("/admin")

  return (
    <footer className={`bg-gray-900 text-gray-300 w-full ${isAdmin ? "md:pl-20 lg:pl-64" : ""}`}>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 py-12 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">ShopEase</h3>
            <p className="mb-4">
              Your one-stop shop for all your needs. Quality products, fast delivery, and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-full bg-gray-800 p-2 text-gray-300 hover:bg-teal-700 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 text-gray-300 hover:bg-teal-700 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 text-gray-300 hover:bg-teal-700 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 text-gray-300 hover:bg-teal-700 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-teal-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-teal-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-teal-400">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard" className="hover:text-teal-400">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=electronics" className="hover:text-teal-400">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products?category=clothing" className="hover:text-teal-400">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="hover:text-teal-400">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link href="/products?category=beauty" className="hover:text-teal-400">
                  Beauty & Personal Care
                </Link>
              </li>
              <li>
                <Link href="/products?category=sports" className="hover:text-teal-400">
                  Sports & Outdoors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-teal-500" />
                <span>123 Commerce St, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-teal-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-teal-500" />
                <span>info@shopease.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#" className="hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-teal-400">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-teal-400">
                Shipping Policy
              </Link>
              <Link href="#" className="hover:text-teal-400">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
