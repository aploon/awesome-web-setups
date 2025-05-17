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

export async function getSetups(): Promise<Setup[]> {
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
        const metaContent = fs.readFileSync(metaPath, 'utf8')
        const readmeContent = fs.readFileSync(readmePath, 'utf8')
        const meta = JSON.parse(metaContent)

        setups.push({
          title: meta.title ?? 'Aucun titre trouvé',
          slug: meta.slug ?? 'Aucun slug trouvé',
          tags: meta.tags ?? ['Aucune tag trouvée'],
          description: meta.description ?? 'Aucune description trouvée',
          author: meta.author ?? 'Aucun auteur trouvé',
          github: meta.github ?? 'Aucun github trouvé',
          readme: readmeContent ?? 'Aucun readme trouvé'
        })
      } catch (error) {
        console.error(`Erreur de lecture/parse dans ${folder} :`, error)
        continue
      }
    }

    return setups
  } catch (error) {
    console.error('Erreur lors de la lecture des setups :', error)
    return []
  }
}
