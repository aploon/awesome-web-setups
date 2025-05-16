"use client"

const contributors = [
  {
    name: "Arnaud ADJOVI",
    avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    url: "https://github.com/arnaud-coding"
  },
  {
    name: "Contributor 2",
    avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    url: "https://github.com"
  },
  {
    name: "Contributor 3",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    url: "https://github.com"
  },
  {
    name: "Contributor 4",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    url: "https://github.com"
  }
]

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="min-h-[4rem] py-3 flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 dark:border-white/5 gap-3 md:gap-0">
          {/* Left */}
          <span className="text-sm text-gray-500 dark:text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} awesome-web-setups
          </span>

          {/* Right: Contributors */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-sm text-gray-500 dark:text-white/50 hidden md:inline">Contributors:</span>
            <div className="flex -space-x-3">
              {contributors.map((contributor, i) => (
                <a
                  key={i}
                  href={contributor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block transition-transform hover:scale-105 hover:z-10 duration-200"
                >
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800 hover:ring-blue-500 dark:hover:ring-blue-500 transition-all duration-200"
                    title={contributor.name}
                  />
                </a>
              ))}
              <a
                href="#"
                className="relative inline-block transition-transform hover:scale-105 hover:z-10 duration-200"
              >
                <div 
                  className="inline-flex size-8 rounded-full ring-2 ring-white dark:ring-gray-800 hover:ring-blue-500 dark:hover:ring-blue-500 transition-all duration-200 bg-gray-100 dark:bg-gray-800 items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300"
                  title="View all contributors"
                >
                  +8
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 