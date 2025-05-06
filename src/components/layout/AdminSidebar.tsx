"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  FileText,
  Users,
  CreditCard,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      title: "Products",
      icon: ShoppingBag,
      href: "/admin/products",
    },
    {
      title: "Articles",
      icon: FileText,
      href: "/admin/articles",
    },
    {
      title: "Users",
      icon: Users,
      href: "/admin/users",
    },
    {
      title: "Transactions",
      icon: CreditCard,
      href: "/admin/transactions",
    },
  ];

  // Mobile menu toggle button (shown in header on mobile)
  const MobileMenuButton = () => (
    <button
      className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      aria-label="Toggle menu"
    >
      {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );

  return (
    <>
      <MobileMenuButton />
      
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } fixed inset-y-0 left-0 z-40 bg-gray-900 transition-all duration-300 
        ${isMobile ? (isMobileMenuOpen ? "translate-x-0 w-full sm:w-64" : "-translate-x-full") : "translate-x-0"}
        md:block md:translate-x-0 md:w-20 lg:w-64`}
      >
        <div className="flex h-full flex-col">
          <div
            className={`flex h-16 items-center ${
              isCollapsed ? "justify-center" : "px-4"
            } border-b border-gray-800`}
          >
            {!isCollapsed && !isMobile && (
              <Link
                href="/admin/dashboard"
                className="text-xl font-bold text-white lg:block hidden"
              >
                ShopEase
              </Link>
            )}
            {isMobile && isMobileMenuOpen && (
              <Link
                href="/admin/dashboard"
                className="text-xl font-bold text-white"
              >
                ShopEase
              </Link>
            )}
            <button
              className={`${
                isCollapsed ? "mx-auto" : "ml-auto"
              } rounded-md p-1 text-gray-400 hover:bg-gray-800 hover:text-white hidden md:block`}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronDown
                className={`h-5 w-5 transform ${
                  isCollapsed ? "rotate-90" : "-rotate-90"
                }`}
              />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`flex items-center ${
                      isCollapsed ? "justify-center" : "px-2"
                    } py-2 rounded-md ${
                      isActive
                        ? "bg-teal-700 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={() => isMobile && setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-6 w-6" />
                    {(!isCollapsed || (isMobile && isMobileMenuOpen)) && (
                      <span className="ml-3">{item.title}</span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-gray-800 p-4">
            <Link
              href="/admin/settings"
              className={`flex items-center ${
                isCollapsed ? "justify-center" : ""
              } rounded-md py-2 text-gray-300 hover:bg-gray-800 hover:text-white`}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              <Settings className="h-6 w-6" />
              {(!isCollapsed || (isMobile && isMobileMenuOpen)) && (
                <span className="ml-3">Settings</span>
              )}
            </Link>
            <Link
              href="/"
              className={`flex items-center ${
                isCollapsed ? "justify-center" : ""
              } mt-2 rounded-md py-2 text-gray-300 hover:bg-gray-800 hover:text-white`}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              <LogOut className="h-6 w-6" />
              {(!isCollapsed || (isMobile && isMobileMenuOpen)) && (
                <span className="ml-3">Logout</span>
              )}
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
