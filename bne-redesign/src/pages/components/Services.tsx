import { Search, Shield, Users, TrendingUp, ChevronRight } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"

interface Service {
  title: string
  description: string
  icon: React.ComponentType<any>
  color: string          
}

const services: Service[] = [
  {
    title: "Buscar Empleo",
    description: "Encuentra oportunidades laborales que se adapten a tu perfil",
    icon: Search,
    color: "bg-blue-500 dark:bg-blue-600",
  },
  {
    title: "Certificación Seguro de Cesantía",
    description: "Obtén tu certificación de manera rápida y segura",
    icon: Shield,
    color: "bg-green-500 dark:bg-green-600",
  },
  {
    title: "Orientación Laboral",
    description: "Recibe asesoría personalizada para tu carrera profesional",
    icon: Users,
    color: "bg-purple-500 dark:bg-purple-600",
  },
  {
    title: "Capacitaciones",
    description: "Mejora tus habilidades con nuestros programas de formación",
    icon: TrendingUp,
    color: "bg-orange-500 dark:bg-orange-600",
  },
]

export default function Services() {
  return (
    <section id="services-section" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="w-full px-4"> {/* ← sin container / max-width */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Servicios</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Herramientas y recursos para impulsar tu carrera profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700
                         hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 ${s.color} rounded-lg flex items-center justify-center mb-4
                              group-hover:scale-110 transition-transform`}
                >
                  <s.icon className="h-6 w-6 text-white" />
                </div>

                <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{s.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{s.description}</p>

                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Acceder <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
