import fs from 'fs'
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

export function getSetups(): Setup[] {
  const setupsDirectory = path.join(process.cwd(), 'public', 'setups')
  const setups: Setup[] = []

  try {
    const folders = fs.readdirSync(setupsDirectory)

    for (const folder of folders) {
      const metaPath = path.join(setupsDirectory, folder, 'meta.json')
      const readmePath = path.join(setupsDirectory, folder, 'README.md')

      if (!fs.existsSync(metaPath) || !fs.existsSync(readmePath)) {
        continue
      }

      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
        const readme = fs.readFileSync(readmePath, 'utf8')

        setups.push({
          title: meta.title ?? 'Aucun titre trouvé',
          slug: meta.slug ?? 'Aucun slug trouvé',
          tags: meta.tags ?? ['Aucune tag trouvée'],
          description: meta.description ?? 'Aucune description trouvée',
          author: meta.author ?? 'Aucun auteur trouvé',
          github: meta.github ?? 'Aucun github trouvé',
          readme: readme ?? 'Aucun readme trouvé'
        })
      } catch (error) {
        console.error(`Erreur de lecture pour le dossier "${folder}" :`, error)
      }
    }

    return setups
  } catch (error) {
    console.error('Erreur lors de la lecture du dossier setups :', error)
    return []
  }
}
