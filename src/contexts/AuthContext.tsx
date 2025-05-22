"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  membershipNumber: string
  fullName: string
  county: string
  constituency: string
  membershipType: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (membershipNumber: string, password: string) => Promise<boolean>
  logout: () => void
  registerUser: (userData: User, password: string) => void
  isLoading: boolean
  pendingRegistration: User | null
  setPendingRegistration: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [pendingRegistration, setPendingRegistration] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (membershipNumber: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem("users") || "{}")

      // Check if user exists and password matches
      if (users[membershipNumber] && users[membershipNumber].password === password) {
        const userData = users[membershipNumber].userData
        setUser(userData)
        localStorage.setItem("currentUser", JSON.stringify(userData))
        setIsLoading(false)
        return true
      }

      setIsLoading(false)
      return false
    } catch (error) {
      console.error("Login error:", error)
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }

  const registerUser = (userData: User, password: string) => {
    try {
      // Get existing users or initialize empty object
      const users = JSON.parse(localStorage.getItem("users") || "{}")

      // Add new user
      users[userData.membershipNumber] = {
        userData,
        password,
      }

      // Save back to localStorage
      localStorage.setItem("users", JSON.stringify(users))

      // Auto login after registration
      setUser(userData)
      localStorage.setItem("currentUser", JSON.stringify(userData))

      // Clear pending registration
      setPendingRegistration(null)
    } catch (error) {
      console.error("Registration error:", error)
    }
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    registerUser,
    isLoading,
    pendingRegistration,
    setPendingRegistration,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
