import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)  

 
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])


  function toggleTheme() {
    const next = !isDark
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setIsDark(next)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="w-9 h-9 rounded-full flex items-center justify-center
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isDark ? (
        <Sun  className="h-5 w-5 text-yellow-400" />  
      ) : (
        <Moon className="h-5 w-5 text-gray-900" />    
      )}
    </button>
  )
}