import fs from 'fs'
import path from 'path'

export interface Setup {
  title: string
  slug: string
  tags: string[]
  description: string
  author: string
  github: string
  readme?: string
}

export async function getSetups(): Promise<Setup[]> {
  const setupsDirectory = path.join(process.cwd(), 'public', 'setups')

  try {
    const setupFolders = fs.readdirSync(setupsDirectory)

    console.log('setupFolders', setupFolders)

    const setups = setupFolders
      .filter(folder => {
        const metaPath = path.join(setupsDirectory, folder, 'meta.json')
        const readmePath = path.join(setupsDirectory, folder, 'README.md')

        return fs.existsSync(metaPath) && fs.existsSync(readmePath)
      })
      .map(folder => {
        try {
          const metaPath = path.join(setupsDirectory, folder, 'meta.json')
          const readmePath = path.join(setupsDirectory, folder, 'README.md')

          // Lire meta.json
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))

          // Lire README.md si présent
          const readme = fs.readFileSync(readmePath, 'utf8')

          return {
            ...meta,
            readme
          }
        } catch (error) {
          console.error(`Erreur lors du chargement du setup ${folder}:`, error)
          return null
        }
      })
      .filter((setup): setup is Setup => setup !== null)

    console.log('setups', setups)

    return [
      {
        title: 'test',
        slug: 'test',
        tags: ['test'],
        description: 'test',
        author: 'test',
        github: 'test',
        readme: 'test'
      }
    ]
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return []
  }
} 