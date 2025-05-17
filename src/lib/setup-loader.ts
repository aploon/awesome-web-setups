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

  try {
    const setupFolders = fs.readdirSync(setupsDirectory)

    const setups: Setup[] = []

    for(const folder of setupFolders){
      const metaPath = path.join(setupsDirectory, folder, 'meta.json')
      const readmePath = path.join(setupsDirectory, folder, 'README.md')

      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
      const readme = fs.readFileSync(readmePath, 'utf8').trim()

      setups.push({
        title: meta.title,
        slug: meta.slug,
        tags: meta.tags,
        description: meta.description,
        author: meta.author,
        github: meta.github,
        readme: readme
      })
    }

    return setups
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return []
  }
} 