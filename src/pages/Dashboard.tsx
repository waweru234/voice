"use client"

import Navbar from "@/components/Navbar"
import MemberDashboard from "@/components/MemberDashboard"
import { useAuth } from "@/contexts/AuthContext"
import { Navigate } from "react-router-dom"

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-party-hotpink"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <MemberDashboard />
      </div>
    </div>
  )
}

export default Dashboard
