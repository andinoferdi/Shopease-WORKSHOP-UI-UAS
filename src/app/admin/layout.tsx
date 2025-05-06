import type React from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row overflow-x-hidden">
      <AdminSidebar />
      <main className="flex-1 w-full p-0 pt-16 md:pt-0 md:pl-20 lg:pl-64">
        <div className="w-full h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
