import { motion } from "framer-motion"
import CountUp from "react-countup"
import { Card, CardContent } from "../../components/ui/card"
import { Users, FileText, TrendingUp, Building2 } from "lucide-react"

export default function Stats() {
  const data = [
    { label: "Ofertas de empleo",    value:  81_545,  icon: FileText   },
    { label: "Vacantes",             value: 500_875,  icon: TrendingUp },
    { label: "Usuarios registrados", value: 5_231_046,icon: Users      },
    { label: "Empresas",             value: 110_441,  icon: Building2  },
  ]

  return (
    <section
      id="stats-section"
      className="py-12 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="w-full px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map(({ label, value, icon: Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Icon className="h-8 w-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />

                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  <CountUp end={value} duration={1.5} separator="." />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {label}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
