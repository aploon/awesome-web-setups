"use client"

const contributors = [
  {
    name: "Arnaud ADJOVI",
    avatar: "https://github.com/arnaud-coding.png",
    url: "https://github.com/arnaud-coding"
  },
  {
    name: "Contributeur 2",
    avatar: "https://github.com/github.png",
    url: "https://github.com"
  },
  {
    name: "Contributeur 3",
    avatar: "https://github.com/github.png",
    url: "https://github.com"
  },
  {
    name: "Contributeur 4",
    avatar: "https://github.com/github.png",
    url: "https://github.com"
  }
]

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between border-t border-white/5">
          {/* Left */}
          <span className="text-sm text-white/50">
            © {new Date().getFullYear()} awesome-web-setups
          </span>

          {/* Right: Contributors */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/50">Contributors:</span>
            <div className="flex -space-x-2">
              {contributors.map((contributor, i) => (
                <a
                  key={i}
                  href={contributor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block"
                >
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-8 h-8 rounded-full border-2 border-[#0b0c10] transition-transform hover:scale-110 hover:z-10"
                    title={contributor.name}
                  />
                </a>
              ))}
              <a
                href="https://github.com/yourusername/awesome-web-setups/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 border-2 border-[#0b0c10] text-xs text-white/70 hover:text-white/90 transition-all hover:scale-110 hover:z-10"
                title="View all contributors"
              >
                +12
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 