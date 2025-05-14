"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface Toast {
  id: string
  message: string
  type: "success" | "error" | "info"
}

interface ToastContextType {
  toasts: Toast[]
  showToast: (message: string, type: "success" | "error" | "info") => void
  hideToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (message: string, type: "success" | "error" | "info") => {
    const id = Date.now().toString()
    const newToast = { id, message, type }

    setToasts((prevToasts) => [...prevToasts, newToast])

    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      hideToast(id)
    }, 3000)
  }

  const hideToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-md px-4 py-3 shadow-md transition-all duration-300 ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : toast.type === "error"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <p>{toast.message}</p>
              <button onClick={() => hideToast(toast.id)} className="ml-4 text-white hover:text-gray-200">
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}
