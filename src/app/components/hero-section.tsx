import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="secondary" className="mb-6 bg-gray-800 text-gray-300 border-gray-700">
          Open Source • MIT License • Free Forever
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Consult Us About Dark Mode
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          A set of beautifully designed components that you can customize, extend, 
          and build on. Start from then install in your own. Open Source. Open Code. Just
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="border-gray-700 text-black hover:bg-gray-200 px-8">
            View Documentation
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            50+ Components
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            TypeScript Ready
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Tailwind CSS
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            Dark Mode First
          </div>
        </div>
      </div>
    </section>
  )
}
