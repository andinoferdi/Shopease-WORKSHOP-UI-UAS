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
} from "lucide-react";
import { useState } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } fixed inset-y-0 left-0 z-40 hidden transform bg-gray-900 transition-all duration-300 md:block`}
    >
      <div className="flex h-full flex-col">
        <div
          className={`flex h-16 items-center ${
            isCollapsed ? "justify-center" : "px-4"
          } border-b border-gray-800`}
        >
          {!isCollapsed && (
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
            } rounded-md p-1 text-gray-400 hover:bg-gray-800 hover:text-white`}
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
                >
                  <item.icon className="h-6 w-6" />
                  {!isCollapsed && <span className="ml-3">{item.title}</span>}
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
          >
            <Settings className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Settings</span>}
          </Link>
          <Link
            href="/"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } mt-2 rounded-md py-2 text-gray-300 hover:bg-gray-800 hover:text-white`}
          >
            <LogOut className="h-6 w-6" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
}
