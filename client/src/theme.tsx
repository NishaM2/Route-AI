import { createContext, useCallback, useContext, useState, type ReactNode } from "react"

export type Theme = "light" | "dark"

export type ChartColors = {
  series1: string
  series2: string
  series1Light: string
  grid: string
  axis: string
  text: string
  surface: string
}

const chartColors: Record<Theme, ChartColors> = {
  light: {
    series1: "#4a3aa7",
    series2: "#eb6834",
    series1Light: "#b9b1e8",
    grid: "#e8e7e2",
    axis: "#4f4e4a",
    text: "#111110",
    surface: "#ffffff",
  },
  dark: {
    series1: "#9085e9",
    series2: "#d95926",
    series1Light: "#3f3780",
    grid: "#232523",
    axis: "#b4b8b2",
    text: "#eceeea",
    surface: "#121312",
  },
}

const STORAGE_KEY = "theme"

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} })

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  const toggle = useCallback(() => {
    setTheme((previous) => {
      const next: Theme = previous === "dark" ? "light" : "dark"
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {}
      return next
    })
  }, [])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function useChartColors(): ChartColors {
  return chartColors[useTheme().theme]
}
