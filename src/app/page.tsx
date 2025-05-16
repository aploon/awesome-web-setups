'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useState, useMemo } from "react"

const setups = [
  {
    title: "Next.js + Tailwind + TypeScript",
    description: "Serverless-ready fullstack starter Serverless-ready fullstack starterServerless-ready fullstack starterServerless-ready fullstack starter",
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
  },
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
  },
  {
    title: "TEST Nuxt 3 + Supabase",
    description: "Serverless-ready fullstack starter Serverless-ready fullstack starterServerless-ready fullstack starterServerless-ready fullstack starter",
    tags: ["nuxt", "supabase", "fullstack"],
    url: "https://github.com/user/nuxt-supabase"
  }
]

const ITEMS_PER_PAGE = 6

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  // Filtrer les setups en fonction de la recherche
  const filteredSetups = useMemo(() => {
    if (!searchQuery.trim()) return setups

    const query = searchQuery.toLowerCase().trim()
    return setups.filter(setup => {
      const matchTitle = setup.title.toLowerCase().includes(query)
      const matchDescription = setup.description.toLowerCase().includes(query)
      const matchTags = setup.tags.some(tag => tag.toLowerCase().includes(query))
      
      return matchTitle || matchDescription || matchTags
    })
  }, [searchQuery])

  // Recalculer la pagination avec les résultats filtrés
  const totalPages = Math.ceil(filteredSetups.length / ITEMS_PER_PAGE)
  const startIndex = currentPage * ITEMS_PER_PAGE
  const visibleSetups = filteredSetups.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset la page courante quand la recherche change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(0) // Retour à la première page
  }

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <Header />
      <main className="flex justify-center min-h-screen bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10] text-white pt-30 pb-30 px-6 md:px-24 font-sans">
        <div className="max-w-6xl space-y-12 w-full">
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
                value={searchQuery}
                onChange={handleSearch}
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

          <div className="space-y-6">
            {filteredSetups.length === 0 ? (
              <div className="text-center text-gray-400">
                Aucun résultat trouvé pour "{searchQuery}"
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visibleSetups.map((setup, i) => (
                  <a
                    key={i}
                    href={setup.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="bg-gradient-to-br from-[#1b2838] to-[#0f1626] border border-[#2b3b52] rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="px-6 space-y-4 flex flex-col h-full">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold text-white leading-snug">
                            {setup.title}
                          </h2>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-3">
                          {setup.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
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
            )}

            {filteredSetups.length > ITEMS_PER_PAGE && (
              <div className="flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 0}
                  className="bg-[#1b2838] border-[#2b3b52] hover:bg-[#2b3b52] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="bg-[#1b2838] border-[#2b3b52] hover:bg-[#2b3b52] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
