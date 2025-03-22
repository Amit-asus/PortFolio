"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: Theme
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage or default
  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system")) {
      setThemeState(storedTheme)
    } else {
      setThemeState(defaultTheme)
    }
    setMounted(true)
  }, [defaultTheme, storageKey])

  // Update localStorage and attribute when theme changes
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement

    // Remove transition temporarily if disableTransitionOnChange is true
    if (disableTransitionOnChange) {
      root.classList.add("no-transitions")
    }

    // Save to localStorage
    localStorage.setItem(storageKey, theme)

    // Handle system theme
    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setResolvedTheme(systemTheme)

      if (attribute === "class") {
        root.classList.remove("light", "dark")
        root.classList.add(systemTheme)
      } else {
        root.setAttribute(attribute, systemTheme)
      }
    } else {
      setResolvedTheme(theme)

      if (attribute === "class") {
        root.classList.remove("light", "dark")
        root.classList.add(theme)
      } else {
        root.setAttribute(attribute, theme)
      }
    }

    // Restore transitions
    if (disableTransitionOnChange) {
      setTimeout(() => {
        root.classList.remove("no-transitions")
      }, 0)
    }
  }, [theme, mounted, attribute, enableSystem, disableTransitionOnChange, storageKey])

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        const newSystemTheme = mediaQuery.matches ? "dark" : "light"
        setResolvedTheme(newSystemTheme)

        const root = window.document.documentElement
        if (attribute === "class") {
          root.classList.remove("light", "dark")
          root.classList.add(newSystemTheme)
        } else {
          root.setAttribute(attribute, newSystemTheme)
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, attribute, enableSystem])

  const setTheme = React.useCallback((theme: Theme) => {
    setThemeState(theme)
  }, [])

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  }

  // Prevent flash of incorrect theme
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

