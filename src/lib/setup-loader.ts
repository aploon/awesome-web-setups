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

  try {
    const setupFolders = fs.readdirSync(setupsDirectory)

    const setups = setupFolders
      .filter(async folder => {
        const metaPath = path.join(setupsDirectory, folder, 'meta.json')
        const readmePath = path.join(setupsDirectory, folder, 'README.md')

        if (fs.existsSync(metaPath) && fs.existsSync(readmePath)){
          return true
        }else{
          return false
        }
      })
      .map(async folder => {
        try {
          const metaPath = path.join(setupsDirectory, folder, 'meta.json')
          const readmePath = path.join(setupsDirectory, folder, 'README.md')

          // Lire meta.json
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))

          // Lire README.md si présent
          const readme = fs.readFileSync(readmePath, 'utf8')

          return {
            title: meta.title,
            slug: meta.slug,
            tags: meta.tags,
            description: meta.description,
            author: meta.author,
            github: meta.github,
            readme: readme
          }
        } catch (error) {
          console.error(`Erreur lors du chargement du setup ${folder}:`, error)
          return null
        }
      })

    const datas = await Promise.all(setups)

    console.log(datas)

    return datas.map(setup => ({
      title: setup?.title ?? 'Aucun titre trouvé',
      slug: setup?.slug ?? 'Aucun slug trouvé',
      tags: setup?.tags ?? ['Aucune tag trouvée'],
      description: setup?.description ?? 'Aucune description trouvée',
      author: setup?.author ?? 'Aucun auteur trouvé',
      github: setup?.github ?? 'Aucun github trouvé',
      readme: setup?.readme ?? 'Aucun readme trouvé'
    }))
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return []
  }
} 