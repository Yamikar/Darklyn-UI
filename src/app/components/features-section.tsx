import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Palette, Code2, Smartphone, Globe, Shield, Layers, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized components with minimal bundle size and maximum performance.",
    color: "text-yellow-400",
  },
  {
    icon: Palette,
    title: "Dark Mode First",
    description: "Designed specifically for dark interfaces with perfect contrast ratios.",
    color: "text-purple-400",
  },
  {
    icon: Code2,
    title: "TypeScript Ready",
    description: "Full TypeScript support with comprehensive type definitions.",
    color: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Touch-friendly components that work perfectly on all devices.",
    color: "text-green-400",
  },
  {
    icon: Globe,
    title: "Accessibility First",
    description: "WCAG 2.1 compliant components with keyboard navigation support.",
    color: "text-cyan-400",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Battle-tested components used by thousands of developers worldwide.",
    color: "text-red-400",
  },
  {
    icon: Layers,
    title: "Composable",
    description: "Mix and match components to create complex interfaces effortlessly.",
    color: "text-orange-400",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "Contemporary aesthetics with smooth animations and micro-interactions.",
    color: "text-pink-400",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gray-950/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
            Why Choose DarkUI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Built for Modern Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every component is crafted with attention to detail, performance, and developer experience in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group p-6 hover:bg-gray-900/80"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
