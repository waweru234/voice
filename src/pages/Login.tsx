"use client"

import Navbar from "@/components/Navbar"
import LoginForm from "@/components/LoginForm"
import { useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated) {
      navigate("/dashboard")
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <LoginForm />
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="#join"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/#join")
                }}
                className="text-party-hotpink hover:underline"
              >
                Register now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
