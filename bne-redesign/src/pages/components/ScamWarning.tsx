
import { Shield, CheckCircle, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"

const scamWarnings = [
  "No entregues datos privados, bancarios o contraseñas",
  "No envíes fotografías de tu Cédula de Identidad y Licencia de Conducir",
  "No transfieras dinero",
  "No envíes copias de tu último finiquito",
]

export default function ScamWarning() {
  return (
    <section
      id="scam-warning"
      className="py-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 transition-colors"
    >
      <div className="w-full px-4"> 
        <Card className="max-w-4xl mx-auto border-red-200 dark:border-red-800 bg-white dark:bg-gray-800">
          <CardContent className="p-8">
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Que no te engañen!</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Si postulaste a un trabajo y te contactan de la empresa:
              </p>
            </div>

          
            <div className="grid md:grid-cols-2 gap-6">
              {scamWarnings.map((w) => (
                <div key={w} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{w}</span>
                </div>
              ))}
            </div>

         
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-center text-blue-800 dark:text-blue-300 font-medium">
                La BNE nunca te solicitará estos datos 🛡️
              </p>
            </div>

          
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">Puedes denunciar en la MESA DE AYUDA</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-gray-900 dark:text-white">2 2405 5200</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-gray-900 dark:text-white">soporte@bne.cl</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}