import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "./Footer"
import { Heart, Users, Code } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-950/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
            About DarkUI
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built by Developers, for Developers</h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            DarkUI started as a simple idea: create beautiful, accessible components that developers actually want to
            use. Today, it powers thousands of applications worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To provide developers with high-quality, dark-themed components that are both beautiful and functional. We
              believe great design should be accessible to everyone.
            </p>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Open Source</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              DarkUI is completely open source and free to use. We believe in the power of community-driven development
              and welcome contributions from developers worldwide.
            </p>
          </Card>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
