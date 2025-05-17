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

      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))

        let readme = 'README.md non trouvé'
        if (fs.existsSync(readmePath)) {
          readme = fs.readFileSync(readmePath, 'utf8')
        }

        setups.push({
          title: meta.title,
          slug: meta.slug,
          tags: meta.tags,
          description: meta.description,
          author: meta.author,
          github: meta.github,
          readme: readme
        })
      } catch (e) {
        console.warn(`Erreur dans le dossier ${folder} :`, e)
        continue
      }
    }

    return setups
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return []
  }
}
