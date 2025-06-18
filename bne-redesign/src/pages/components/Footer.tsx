
import { Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-gray-900 text-white py-12">
      <div className="w-full px-4 grid md:grid-cols-3 gap-8">
  
        <div>
          <h4 className="font-semibold text-lg mb-4">Contacto</h4>
          <p className="flex items-center gap-2 mb-2">
            <Phone className="h-4 w-4" /> 2 2405 5200
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> soporte@bne.cl
          </p>
        </div>

      
        <div>
          <h4 className="font-semibold text-lg mb-4">Enlaces de interés</h4>
          {["Política de privacidad", "Preguntas Frecuentes", "Manual de usuario"].map((l) => (
            <a key={l} href="#" className="block text-gray-300 hover:text-white">
              {l}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Instituciones relacionadas</h4>
          {["Ministerio del Trabajo", "Dirección del Trabajo", "SENCE"].map((i) => (
            <a key={i} href="#" className="block text-gray-300 hover:text-white">
              {i}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        © 2025 Bolsa Nacional de Empleo · Diseño reimaginado — no oficial
      </div>
    </footer>
  )
}