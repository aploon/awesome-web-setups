import { Setup } from "@/lib/setup-loader"
import { ArrowLeft } from "lucide-react"
import MarkdownPreview from "./MarkdownPreview"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { motion } from "framer-motion"

interface SetupDetailsProps {
    setup: Setup
    onBack: () => void
}

export function SetupDetails({ setup, onBack }: SetupDetailsProps) {
    return (
        <motion.div 
            layoutId={`card-${setup.slug}`}
            className="max-w-[935px] mx-auto"
            layout
            transition={{
                layout: { duration: 0.3 }
            }}
        >
            {/* Header with back button and title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onBack}
                            className="hover:bg-gray-100 dark:hover:bg-white/5"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </motion.div>
                    <motion.h1 
                        layoutId={`title-${setup.slug}`}
                        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white truncate"
                    >
                        {setup.title}
                    </motion.h1>
                </div>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    href={setup.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:text-white/90 transition-colors bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-lg hover:opacity-90 w-full sm:w-auto justify-center sm:justify-start"
                >
                    <svg className="w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="90px" height="90px"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
                    View on GitHub
                </motion.a>
            </div>

            {/* Description and tags */}
            <motion.div 
                layoutId={`content-${setup.slug}`}
                className="mb-8"
            >
                <motion.p 
                    layoutId={`description-${setup.slug}`}
                    className="text-lg text-gray-600 dark:text-white/70 mb-4"
                >
                    {setup.description}
                </motion.p>
                <motion.div 
                    layoutId={`tags-${setup.slug}`}
                    className="flex flex-wrap gap-2"
                >
                    {setup.tags.map((tag, j) => {
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
                </motion.div>
            </motion.div>

            {/* README content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="prose dark:prose-invert max-w-none"
            >
                <div className="rounded-xl bg-white dark:bg-gradient-to-br dark:from-[#1b2838] dark:to-[#0f1626] p-3 md:p-8 shadow-lg">
                    <MarkdownPreview markdown={setup.readme || '# Content not available'} />
                </div>
            </motion.div>

            {/* Footer with author information */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10"
            >
                <div className="flex items-center gap-4">
                    <img
                        src={`https://github.com/${setup.author}.png`}
                        alt={setup.author}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Created by</h3>
                        <a
                            href={`https://github.com/${setup.author}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white/90 transition-colors"
                        >
                            @{setup.author}
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
} 