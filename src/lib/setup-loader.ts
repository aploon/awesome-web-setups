import fs from 'fs/promises'
import path from 'path'

export interface Setup {
  title: string
  slug: string
  tags: string[]
  description: string
  author: string
  github: string
  readme: string
}

export async function getSetups(): Promise<Setup[]> {
  const setupsDirectory = path.join(process.cwd(), 'public', 'setups')

  try {
    const folders = await fs.readdir(setupsDirectory)
    const setups: Setup[] = []

    for (const folder of folders) {
      const metaPath = path.join(setupsDirectory, folder, 'meta.json')
      const readmePath = path.join(setupsDirectory, folder, 'README.md')

      try {
        const [metaData, readmeContent] = await Promise.all([
          fs.readFile(metaPath, 'utf8'),
          fs.readFile(readmePath, 'utf8')
        ])

        const meta = JSON.parse(metaData)

        setups.push({
          title: meta.title ?? 'Aucun titre trouvé',
          slug: meta.slug ?? 'Aucun slug trouvé',
          tags: meta.tags ?? ['Aucune tag trouvée'],
          description: meta.description ?? 'Aucune description trouvée',
          author: meta.author ?? 'Aucun auteur trouvé',
          github: meta.github ?? 'Aucun github trouvé',
          readme: readmeContent ?? 'Aucun readme trouvé'
        })
      } catch {
        // Ignorer les dossiers incomplets ou avec erreurs
        continue
      }
    }

    return setups
  } catch (error) {
    console.error('Erreur lors du chargement des setups :', error)
    return []
  }
}
