import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"


export default function Header() {
  const [open, setOpen] = useState(false)
  const nav = ["Ingreso", "Registro", "Empresas", "Instituciones"]

  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm transition-colors">
      <div className="w-full flex items-center justify-between h-16 px-4">
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BNE</span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900 dark:text-white">Bolsa Nacional de Empleo</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Gobierno de Chile</p>
          </div>
        </div>

      
        <nav className="hidden md:flex items-center space-x-6">
          {nav.map((t) => (
            <a key={t} href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {t}
            </a>
          ))}
          <ThemeToggle />  
        </nav>

       
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t dark:border-gray-700 py-4 px-4">
          {nav.map((t) => (
            <a key={t} href="#" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {t}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}