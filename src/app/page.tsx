'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useState, useMemo, useEffect } from "react"
import type { Setup } from "@/lib/setup-loader"
import { SetupDetails } from "@/components/SetupDetails"
import { DarkModeProvider } from "@/context/DarkModeContext";

const ITEMS_PER_PAGE = 6

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [setups, setSetups] = useState<Setup[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSetup, setSelectedSetup] = useState<Setup | null>(null)

  useEffect(() => {
    const loadSetups = async () => {
      try {
        const response = await fetch('/api/setups')
        if (!response.ok) {
          throw new Error('Error loading setups')
        }
        const data = await response.json()
        setSetups(data)
      } catch (error) {
        console.error('Error:', error)
        setError(error instanceof Error ? error.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    loadSetups()
  }, [])

  // Filter setups based on search
  const filteredSetups = useMemo(() => {
    if (!searchQuery.trim()) return setups

    const query = searchQuery.toLowerCase().trim()
    return setups.filter(setup => {
      const matchTitle = setup.title.toLowerCase().includes(query)
      const matchDescription = setup.description.toLowerCase().includes(query)
      const matchTags = setup.tags.some(tag => tag.toLowerCase().includes(query))
      
      return matchTitle || matchDescription || matchTags
    })
  }, [searchQuery, setups])

  // Recalculate pagination with filtered results
  const totalPages = Math.ceil(filteredSetups.length / ITEMS_PER_PAGE)
  const startIndex = currentPage * ITEMS_PER_PAGE
  const visibleSetups = filteredSetups.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset current page when search changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(0) // Return to first page
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
    <DarkModeProvider>
      <Header />
      <main className="flex justify-center min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-[#0b0c10] dark:via-[#1f2833] dark:to-[#0b0c10] text-gray-900 dark:text-white pt-30 pb-30 px-6 md:px-24 font-sans">
        <div className="max-w-6xl space-y-12 w-full">
          {selectedSetup ? (
            <SetupDetails 
              setup={selectedSetup} 
              onBack={() => setSelectedSetup(null)} 
            />
          ) : (
            <>
              <div className="text-center space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  🚀 Web Project Setups
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                  Explore a collection of open source setups. Contribute by submitting a simple README and JSON file. Zero database, zero friction.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl group">
                  <Input 
                    placeholder="Search for a stack, tool, framework..." 
                    className="w-full pl-12 pr-4 !py-5 !text-xl !h-12 rounded-xl bg-white dark:bg-[#141b2b]/80 text-gray-900 dark:text-white placeholder:text-gray-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[#141b2b] focus:bg-white dark:focus:bg-[#141b2b] focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
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
                {isLoading ? (
                  <div className="text-center text-gray-400">
                    Loading setups...
                  </div>
                ) : error ? (
                  <div className="text-center text-red-400">
                    {error}
                  </div>
                ) : filteredSetups.length === 0 ? (
                  <div className="text-center text-gray-400">
                    No results found for "{searchQuery}"
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {visibleSetups.map((setup, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSetup(setup)}
                        className="text-left w-full"
                      >
                        <Card className="bg-white hover:bg-gray-50 dark:bg-gradient-to-br dark:from-[#1b2838] dark:to-[#0f1626] border border-gray-200 dark:border-[#2b3b52] rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
                          <CardContent className="px-6 space-y-4 flex flex-col h-full py-6">
                            <div className="flex items-center justify-between">
                              <h2 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug">
                                {setup.title}
                              </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                              {setup.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {setup.tags.map((tag, j) => {
                                // Color rotation for tags
                                const colors = [
                                  "bg-blue-100 text-blue-700 dark:bg-[#1e293b]",
                                  "bg-purple-100 text-purple-700 dark:bg-[#1e293b]",
                                  "bg-green-100 text-green-700 dark:bg-[#1e293b]",
                                  "bg-orange-100 text-orange-700 dark:bg-[#1e293b]",
                                  "bg-pink-100 text-pink-700 dark:bg-[#1e293b]",
                                  "bg-indigo-100 text-indigo-700 dark:bg-[#1e293b]"
                                ];
                                const colorClass = colors[j % colors.length];
                                
                                return (
                                  <Badge 
                                    key={j} 
                                    className={`${colorClass} text-xs dark:text-gray-300 px-2 py-1 rounded-md font-medium transition-colors duration-200`}
                                  >
                                    #{tag}
                                  </Badge>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </button>
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
                      className="bg-white dark:bg-[#1b2838] border-gray-200 dark:border-[#2b3b52] hover:bg-gray-50 dark:hover:bg-[#2b3b52] text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages - 1}
                      className="bg-white dark:bg-[#1b2838] border-gray-200 dark:border-[#2b3b52] hover:bg-gray-50 dark:hover:bg-[#2b3b52] text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </DarkModeProvider>
  )
}
