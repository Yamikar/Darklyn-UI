import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const integrations = [
  {
    name: "React",
    logo: "⚛️",
    description: "Full React 18+ support with hooks",
    status: "Ready",
  },
  {
    name: "Next.js",
    logo: "▲",
    description: "App Router & Pages Router compatible",
    status: "Ready",
  },
  {
    name: "TypeScript",
    logo: "📘",
    description: "Complete type definitions included",
    status: "Ready",
  },
  {
    name: "Tailwind CSS",
    logo: "🎨",
    description: "Pre-configured with custom theme",
    status: "Ready",
  },
  {
    name: "Vite",
    logo: "⚡",
    description: "Lightning fast development setup",
    status: "Ready",
  },
  {
    name: "Remix",
    logo: "💿",
    description: "Server-side rendering support",
    status: "Ready",
  },
]

export function IntegrationSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
            Works Everywhere
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Drop into Any Project</h2>
          <p className="text-gray-400 text-lg">
            DarkUI components work seamlessly with your favorite tools and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 p-4 text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {integration.logo}
              </div>
              <h3 className="font-semibold text-white mb-2">{integration.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{integration.description}</p>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-400 mr-1" />
                <span className="text-xs text-green-400">{integration.status}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Get Started Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-sm text-gray-500 mt-3">Install with npm, yarn, or pnpm • No configuration needed</p>
        </div>
      </div>
    </section>
  )
}
