import { Button } from "@/components/ui/button"
import { Github, Moon, Star } from 'lucide-react'
import Link from "next/link"
export function Header() {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href={"##"}>
            <div className="text-xl font-bold text-white">DarkUI</div>
              </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-400">
              <a href="#components" className="hover:text-white transition-colors">Components</a>
              <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
              <a href="About" className="hover:text-white transition-colors">About</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400">
              <Star className="w-4 h-4 mr-2" />
              Star
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400">
              <Moon className="w-4 h-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
