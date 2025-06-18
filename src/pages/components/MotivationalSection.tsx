import { ChevronRight } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"

import { Award, Star, Target, Lightbulb } from "lucide-react"

const motivationalCards = [
  {
    title: "Tu próximo empleo te está esperando",
    description:
      "Miles de oportunidades laborales están disponibles. ¡Da el primer paso hacia tu futuro profesional!",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Invierte en tu crecimiento profesional",
    description:
      "Las capacitaciones y certificaciones abren puertas a mejores oportunidades laborales.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cada aplicación es una oportunidad",
    description:
      "No te desanimes. Cada postulación te acerca más a encontrar el trabajo ideal para ti.",
    icon: Star,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Desarrolla nuevas habilidades",
    description:
      "El aprendizaje continuo es la clave para mantenerte competitivo en el mercado laboral.",
    icon: Lightbulb,
    color: "from-orange-500 to-red-500",
  },
]

export default function MotivationalSection() {
  return (
    <section
      id="motivation-section"
      className="py-16 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors"
    >
      <div className="w-full px-4">
       
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Inspírate y Crece Profesionalmente
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tu carrera profesional no tiene límites. ¡Descubre todo tu potencial!
          </p>
        </div>

       
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {motivationalCards.map((card) => (
              <CarouselItem key={card.title} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full overflow-hidden group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-0">
                  
                    <div
                      className={`h-48 w-full bg-gradient-to-r ${card.color}
                                  flex items-center justify-center relative`}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-black" />
                      <card.icon className="h-12 w-12 text-white drop-shadow" />
                    </div>

                    <div className="p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {card.description}
                      </p>

                      <Button
                        variant="ghost"
                        className="mt-4 p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        Descubre más <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

         
          <CarouselPrevious className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700" />
          <CarouselNext     className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700" />
        </Carousel>
      </div>
    </section>
  )
}