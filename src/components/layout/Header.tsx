"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  User,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { itemCount } = useCart();
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-teal-700">ShopEase</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-700 hover:text-teal-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm font-medium text-gray-700 hover:text-teal-700"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm font-medium text-gray-700 hover:text-teal-700"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/dashboard"
                  className="text-sm font-medium text-gray-700 hover:text-teal-700"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 text-gray-700 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>

            {/* Profile dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleProfileDropdown}
                aria-expanded={isProfileDropdownOpen}
                aria-haspopup="true"
              >
                <User className="h-5 w-5" />
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="border-b border-gray-100 px-4 py-3">
                    <p className="text-sm">Signed in as</p>
                    <p className="truncate text-sm font-medium text-gray-900">
                      user@example.com
                    </p>
                  </div>
                  <Link
                    href="/transactions"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    <ShoppingBag className="mr-3 h-4 w-4" />
                    Order History
                  </Link>
                
                </div>
              )}
            </div>

            <Link
              href="/cart"
              className="relative rounded-full p-2 text-gray-700 hover:bg-gray-100"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-xs font-medium text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
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
              Articles
            </Link>
            <Link
              href="/admin/dashboard"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
            <Link
              href="/transactions"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Order History
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
