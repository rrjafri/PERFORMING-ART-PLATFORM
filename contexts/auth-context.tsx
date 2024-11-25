'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

type User = {
  email: string;
  role: string;
} | null

type AuthContextType = {
  user: User;
  signup: (email: string, password: string, role: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    // Check localStorage only on mount
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signup = async (email: string, password: string, role: string) => {
    try {
      // Store credentials for future login
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const existingUser = users.find((u: any) => u.email === email)
      
      if (existingUser) {
        throw new Error('User already exists')
      }

      users.push({ email, password, role })
      localStorage.setItem('users', JSON.stringify(users))
      
      toast({
        title: "Success",
        description: "Account created successfully. Please login to continue.",
      })
      
      router.push('/login')
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      })
      throw error
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find((u: any) => u.email === email && u.password === password)
      
      if (!user) {
        throw new Error('Invalid credentials')
      }

      const userData = { email: user.email, role: user.role }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      
      toast({
        title: "Success",
        description: "Logged in successfully",
      })
      
      router.push('/')
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      })
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    toast({
      title: "Success",
      description: "Logged out successfully",
    })
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

