import { NextResponse } from "next/server"
import { getDashboardStats } from "@/lib/data/stats"

export async function GET() {
  try {
    const stats = getDashboardStats()
    return NextResponse.json({ stats })
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    return NextResponse.json({ error: "Failed to fetch dashboard stats" }, { status: 500 })
  }
}
