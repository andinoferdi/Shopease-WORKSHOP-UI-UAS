import type React from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <AdminSidebar />
      <main className="flex-1 w-full p-4 md:ml-20 md:p-6 lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
