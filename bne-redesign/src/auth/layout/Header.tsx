import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm border-b">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BNE</span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900">Bolsa Nacional de Empleo</h1>
            <p className="text-xs text-gray-500">Gobierno de Chile</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Ingreso
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Registro
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Empresas
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Instituciones
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
              Ingreso
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
              Registro
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
              Empresas
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
              Instituciones
            </a>
          </nav>
        </div>
      )}
    </div>
  </header>
  )
}
