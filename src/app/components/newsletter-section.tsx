import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight, Sparkles } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-950 via-purple-950/20 to-gray-950">
      <div className="container mx-auto">
        <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="p-12 text-center">
            <Badge variant="secondary" className="mb-6 bg-purple-900/30 text-purple-300 border-purple-700">
              <Sparkles className="w-3 h-3 mr-1" />
              Stay Updated
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get New Components First
            </h2>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new components, updates, and exclusive design
              resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-12"
                />
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 h-12">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>

            <div className="flex justify-center items-center space-x-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                5,000+ Subscribers
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Weekly Updates
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Exclusive Content
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
