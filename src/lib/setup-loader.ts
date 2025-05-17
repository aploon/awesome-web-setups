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

        // console.log('metaPath', metaPath)
        // console.log('readmePath', readmePath)

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

          // console.log('meta', meta)
          // console.log('readme', readme)

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

    return setups
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return []
  }
} 