export const dynamic = 'force-static'

const BASE_URL = 'https://van-vlymen.com'

// All indexable routes. Add new project pages here when you create them.
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/projects/Interpicker-full-stack-startup', priority: 0.8 },
  { path: '/projects/besHandyman-services-marketplace', priority: 0.8 },
  { path: '/projects/1frontendMastery', priority: 0.8 },
  { path: '/projects/1frontendMastery/AstroDash', priority: 0.6 },
  { path: '/projects/1frontendMastery/Paws', priority: 0.6 },
  { path: '/projects/1frontendMastery/TicTacToe', priority: 0.6 },
  { path: '/projects/2systemArch', priority: 0.8 },
  { path: '/projects/2systemArch/MernEcommercePro', priority: 0.6 },
]

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
