import { Button } from "@/components/ui/button"
import { Github, Twitter, DiscIcon as Discord, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-xl font-bold text-white">DarkUI</div>
            <p className="text-gray-400 text-sm">
              Beautiful dark-themed components for modern web applications. 
              Built with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Discord className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Components</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Buttons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Navigation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Layout</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 DarkUI. All rights reserved.
          </div>
          <div className="flex items-center text-sm text-gray-400 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for the community
          </div>
        </div>
      </div>
    </footer>
  )
}
