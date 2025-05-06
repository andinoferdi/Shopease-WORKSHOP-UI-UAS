"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-1/4 items-center">
            <button
              className="mr-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-teal-700">ShopEase</span>
            </Link>
          </div>

          <nav className="hidden w-2/4 md:flex md:items-center md:justify-center md:space-x-10">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-teal-700"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-teal-700"
            >
              Products
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium text-gray-700 hover:text-teal-700"
            >
              Blog
            </Link>
            <Link
              href="/admin/dashboard"
              className="text-sm font-medium text-gray-700 hover:text-teal-700"
            >
              Admin
            </Link>
          </nav>

          <div className="flex w-1/4 items-center justify-end space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-1.5 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <Link
              href="/cart"
              className="relative rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-teal-700"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-700 text-xs font-medium text-white">
                3
              </span>
            </Link>

            <Link
              href="/admin/dashboard"
              className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-teal-700"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/articles"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/admin/dashboard"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </div>

          <div className="border-t border-gray-200 px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
