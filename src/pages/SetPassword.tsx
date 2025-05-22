"use client"

import Navbar from "@/components/Navbar"
import SetPasswordForm from "@/components/SetPasswordForm"
import { useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const SetPassword = () => {
  const { isAuthenticated, pendingRegistration } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated) {
      navigate("/dashboard")
    }

    // If no pending registration, redirect to registration
    if (!pendingRegistration) {
      navigate("/#join")
    }
  }, [isAuthenticated, pendingRegistration, navigate])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <SetPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default SetPassword
