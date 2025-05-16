import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const setups = [
  {
    title: "Next.js + Tailwind + TypeScript",
    description: "A clean starter with Tailwind, TS, ESLint, Prettier",
    tags: ["nextjs", "tailwind", "typescript"],
    url: "https://github.com/user/project-setup"
  },
  {
    title: "Vue 3 + Vite + Pinia",
    description: "Lightweight Vue starter with state management",
    tags: ["vue", "vite", "pinia"],
    url: "https://github.com/user/vue-setup"
  },
  {
    title: "Nuxt 3 + Supabase",
    description: "Serverless-ready fullstack starter",
    tags: ["nuxt", "supabase", "fullstack"],
    url: "https://github.com/user/nuxt-supabase"
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10] text-white pt-20 pb-20 px-6 md:px-24 font-sans">
        <div className="max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              🚀 Setup de projets web
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore une collection de setups open source. Contribue en envoyant un simple README et un fichier JSON. Zéro base de données, zéro friction.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl group">
              <Input 
                placeholder="Rechercher un stack, un outil, un framework..." 
                className="w-full pl-12 pr-4 !py-5 !text-xl !h-12 rounded-xl bg-[#141b2b]/80 text-white placeholder:text-gray-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#141b2b] focus:bg-[#141b2b] focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              />
              <span className="absolute left-4 top-[15px] text-gray-400 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110 group-focus-within:text-blue-400">
                <svg 
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {setups.map((setup, i) => (
              <a
                key={i}
                href={setup.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-gradient-to-br from-[#1b2838] to-[#0f1626] border border-[#2b3b52] rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <CardContent className="px-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-white leading-snug">
                        {setup.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {setup.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {setup.tags.map((tag, j) => (
                        <Badge key={j} className="bg-[#1e293b] text-xs text-gray-300 px-2 py-1 rounded-md">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
