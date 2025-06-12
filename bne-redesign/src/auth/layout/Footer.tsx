import { Mail, Phone } from "lucide-react"

export const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>2 2405 5200</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>soporte@bne.cl</span>
                </div>
              </div>
            </div>

            {/* as */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces de interés</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Política de privacidad
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Manual de usuario
                </a>
              </div>
            </div>

            {/* Institutions */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Instituciones relacionadas</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Ministerio del Trabajo
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Dirección del Trabajo
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  SENCE
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Bolsa Nacional de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Empleo</span> -
              Gobierno de Chile. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-2">Diseño reimaginado - No es el sitio oficial</p>
          </div>
        </div>
      </footer>
    )
}