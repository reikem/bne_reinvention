import { Search } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"

export default function Hero() {
  const quick = ["Trabajo remoto", "Medio tiempo", "Prácticas profesionales", "Gobierno"]

  return (
    <section id="hero-section" className="py-16 text-center">
      <div className="w-full px-4">
        <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Encuentra tu próximo
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500 dark:from-blue-400 dark:to-red-400">
            {" "}
            empleo
          </span>
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
          La plataforma oficial del Gobierno de Chile para conectar talento con oportunidades laborales
        </p>

        
        <div className="max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="¿Qué empleo buscas?"
            className="h-12 text-lg flex-1 bg-white dark:bg-white border-gray-300 dark:border-gray-300"
          />
          <Button
            size="lg"
            className="h-12 px-8 text-white bg-gradient-to-r from-blue-600 to-blue-700
                       dark:from-blue-500 dark:to-blue-600"
          >
            <Search className="h-5 w-5 mr-2" /> Buscar
          </Button>
        </div>

     
        <div className="flex flex-wrap justify-center gap-3">
          {quick.map((q) => (
            <Badge
              key={q}
              className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-blue-700
                         dark:from-blue-500 dark:to-blue-600 text-white"
            >
              {q}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}