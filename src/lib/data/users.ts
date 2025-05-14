import type { User } from "@/types"
import { UserRole } from "@/types"

// Dummy user data
export const users: (User & { status: string; lastLogin: string }) [] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@shopease.com",
    avatar: "/images/users/admin.jpg",
    role: UserRole.ADMIN,
    createdAt: "2023-01-15T10:30:00Z",
    lastLogin: "2024-04-20T08:45:00Z",
    status: "active",
    updatedAt: "2023-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "/images/users/john.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-03-10T14:20:00Z",
    lastLogin: "2024-04-18T16:30:00Z",
    status: "active",
    updatedAt: "2023-03-10T14:20:00Z",
  },
  {
    id: "3",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    avatar: "/images/users/emily.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-04-22T09:15:00Z",
    lastLogin: "2024-04-19T11:45:00Z",
    status: "active",
    updatedAt: "2023-04-22T09:15:00Z",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    avatar: "/images/users/michael.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-05-18T15:40:00Z",
    lastLogin: "2024-04-15T10:20:00Z",
    status: "active",
    updatedAt: "2023-05-18T15:40:00Z",
  },
  {
    id: "5",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    avatar: "/images/users/sarah.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-06-30T11:25:00Z",
    lastLogin: "2024-04-17T14:10:00Z",
    status: "active",
    updatedAt: "2023-06-30T11:25:00Z", 
  },
  {
    id: "6",
    name: "David Wilson",
    email: "david.wilson@example.com",
    avatar: "/images/users/david.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-07-12T13:50:00Z",
    lastLogin: "2024-04-10T09:30:00Z",
    status: "inactive",
    updatedAt: "2023-07-12T13:50:00Z",
  },
  {
    id: "7",
    name: "Jennifer Martinez",
    email: "jennifer.martinez@example.com",
    avatar: "/images/users/jennifer.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-08-05T10:15:00Z",
    lastLogin: "2024-04-16T15:25:00Z",
    status: "active",
    updatedAt: "2023-08-05T10:15:00Z",
  },
  {
    id: "8",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    avatar: "/images/users/robert.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-09-20T16:35:00Z",
    lastLogin: "2024-04-12T12:40:00Z",
    status: "active",
    updatedAt: "2023-09-20T16:35:00Z",
  },
  {
    id: "9",
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    avatar: "/images/users/lisa.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-10-15T08:55:00Z",
    lastLogin: "2024-04-05T17:15:00Z",
    status: "inactive",
    updatedAt: "2023-10-15T08:55:00Z",
  },
  {
    id: "10",
    name: "James Thomas",
    email: "james.thomas@example.com",
    avatar: "/images/users/james.jpg",
    role: UserRole.CUSTOMER,
    createdAt: "2023-11-28T12:10:00Z",
    lastLogin: "2024-04-14T13:30:00Z",
    status: "active",
    updatedAt: "2023-11-28T12:10:00Z",
  },
]

// Helper functions for user data
export const getUsers = () => {
  return users
}

export const getUserById = (id: string) => {
  return users.find((user) => user.id === id)
}

export const getActiveUsers = () => {
  return users.filter((user) => user.status === "active")
}

export const getAdminUsers = () => {
  return users.filter((user) => user.role === UserRole.ADMIN)
}

export const getCustomerUsers = () => {
  return users.filter((user) => user.role === UserRole.CUSTOMER)
}

export const searchUsers = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return users.filter(
    (user) => user.name.toLowerCase().includes(lowercaseQuery) || user.email.toLowerCase().includes(lowercaseQuery),
  )
}

// Mock authentication function
export const authenticateUser = (email: string, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  password: string
) => {
  // In a real app, you would validate the password
  const user = users.find((user) => user.email === email)
  if (user) {
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
      },
    }
  }
  return { success: false, message: "Invalid credentials" }
}
