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

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const setups = setupFolders
      .filter(folder => {
        const metaPath = path.join(setupsDirectory, folder, 'meta.json')
        const readmePath = path.join(setupsDirectory, folder, 'README.md')

        return fs.existsSync(metaPath) && fs.existsSync(readmePath)
      })
      .map(folder => {
        try {
          // const metaPath = path.join(setupsDirectory, folder, 'meta.json')
          // const readmePath = path.join(setupsDirectory, folder, 'README.md')

          // Lire meta.json
          // const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))

          // Lire README.md si présent
          // const readme = fs.readFileSync(readmePath, 'utf8')

          return {
            title: 'test',
            slug: 'test',
            tags: ['test'],
            description: 'test',
            author: 'test',
            github: 'test',
            readme: 'test'
          } as Setup
        } catch (error) {
          console.error(`Erreur lors du chargement du setup ${folder}:`, error)
          return null
        }
      })
      .filter((setup): setup is Setup => setup !== null)

    return [
      {
        title: 'test',
        slug: 'test',
        tags: ['test'],
        description: 'test',
        author: 'test',
        github: 'test',
        readme: '# Next.js + shadcn/ui Starter\n' +
                '\n' +
                'A clean and minimal Next.js 14 starter template with shadcn/ui components and TailwindCSS.\n' +
                '\n' +
                '## Features\n' +
                '\n' +
                '- ⚡ Next.js 14 with App Router\n' +
                '- 🎨 shadcn/ui components\n' +
                '- 🎯 TypeScript\n' +
                '- 🎨 TailwindCSS\n' +
                '- 📱 Responsive design\n'

      }
    ]
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return []
  }
} 