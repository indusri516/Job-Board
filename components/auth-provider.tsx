"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type User = {
  id: string
  name: string | null
  email: string
  image: string | null
  role: "jobseeker" | "employer"
}

type AuthContextType = {
  user: User | null
  signIn: (email: string, password: string) => void
  signUp: (userData: any) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const signIn = (email: string, password: string) => {
    // Mock authentication - in a real app, this would call an API
    setUser({
      id: "1",
      name: "John Doe",
      email: email,
      image: null,
      role: "employer",
    })
  }

  const signUp = (userData: any) => {
    // Mock registration - in a real app, this would call an API
    setUser({
      id: "1",
      name: userData.name,
      email: userData.email,
      image: null,
      role: userData.role,
    })
  }

  const signOut = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

