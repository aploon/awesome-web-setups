import { Setup } from "@/lib/setup-loader"
import { Button } from "./ui/button"
import { ArrowLeft, Github } from "lucide-react"
import MarkdownPreview from "./MarkdownPreview"

interface SetupDetailsProps {
    setup: Setup
    onBack: () => void
}

export function SetupDetails({ setup, onBack }: SetupDetailsProps) {
    return (
        <div className="w-full animate-in fade-in duration-500">
            {/* Header avec bouton retour et titre */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onBack}
                        className="hover:bg-gray-100 dark:hover:bg-white/5"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{setup.title}</h1>
                </div>
                <a
                    href={setup.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white/90 transition-colors bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10"
                >
                    <Github className="w-4 h-4" />
                    Voir sur GitHub
                </a>
            </div>

            {/* Description et tags */}
            <div className="mb-8">
                <p className="text-lg text-gray-600 dark:text-white/70 mb-4">{setup.description}</p>
                <div className="flex flex-wrap gap-2">
                    {setup.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-sm text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contenu du README */}
            <div className="prose dark:prose-invert max-w-none">
                <div className="rounded-xl bg-white dark:bg-gradient-to-br dark:from-[#1b2838] dark:to-[#0f1626] p-8 shadow-lg">
                    <MarkdownPreview markdown={setup.readme || '# Contenu non disponible'} />
                </div>
            </div>

            {/* Footer avec informations sur l'auteur */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-4">
                    <img
                        src={`https://github.com/${setup.author}.png`}
                        alt={setup.author}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Créé par</h3>
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
            </div>
        </div>
    )
} 