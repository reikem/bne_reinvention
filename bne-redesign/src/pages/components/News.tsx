import type { JSX } from "react"

const LogoSimel        = () => <span className="text-2xl font-bold">SIMEL</span>
const LogoObservatorio = () => <span className="text-2xl font-bold">Observatorio</span>
const LogoChileValora  = () => <span className="text-2xl font-bold">Chile Valora</span>
const LogoEmpleoAgro   = () => <span className="text-2xl font-bold">Agro</span>


interface NewsItem {
  logo : () => JSX.Element   
  href : string
  bg   : string             
}

const news: NewsItem[] = [
  { logo: LogoSimel,        href: "#", bg: "bg-white" },
  { logo: LogoObservatorio, href: "#", bg: "bg-blue-900" },
  { logo: LogoChileValora,  href: "#", bg: "bg-blue-800" },
  { logo: LogoEmpleoAgro,   href: "#", bg: "bg-green-900" },
]


export default function News() {
  return (
    <section id="novedades-section" className="py-16 bg-gray-50">
      <div className="w-full px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Novedades</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map(({ logo: Logo, href, bg }) => (
            <a
              key={href}
              href={href}
              className="
                relative flex h-32 items-center justify-center rounded-xl shadow
                hover:shadow-md transition
              "
            >
              <div className={`absolute inset-0 ${bg} rounded-xl opacity-90`} />
           
              <Logo />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}