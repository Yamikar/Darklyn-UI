"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Flame, Gem,Moon, Sun, Feather, Waves, Leaf, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Grid3X3, List, Copy, Heart, Download, Eye, Code, Star, Zap, Users, TrendingUp } from "lucide-react"

const components = [
  {
    id: 1,
    name: "Neon Button",
    category: "Form",
    type: "dark",
    preview: "button",
    description: "Sleek buttons with customizable neon glow effects and smooth hover animations",
    downloads: "2.1k",
    likes: 45,
    complexity: "Easy",
    rating: 4.8,
    tags: ["Interactive", "Animated", "Customizable"],
    isNew: true,
    isTrending: false,
  },
  {
    id: 2,
    name: "Glassmorphism Input",
    category: "Form",
    type: "light",
    preview: "input",
    description: "Modern input fields with frosted glass effect and floating labels",
    downloads: "1.8k",
    likes: 38,
    complexity: "Medium",
    rating: 4.6,
    tags: ["Glass Effect", "Modern", "Accessible"],
    isNew: false,
    isTrending: true,
  },
  {
    id: 3,
    name: "Holographic Card",
    category: "Layout",
    type: "dark",
    preview: "card",
    description: "Stunning cards with holographic borders and depth effects",
    downloads: "3.2k",
    likes: 67,
    complexity: "Easy",
    rating: 4.9,
    tags: ["3D Effect", "Premium", "Eye-catching"],
    isNew: false,
    isTrending: true,
  },
  {
    id: 4,
    name: "Animated Modal",
    category: "Overlay",
    type: "light",
    preview: "modal",
    description: "Smooth modal transitions with backdrop blur and spring animations",
    downloads: "1.5k",
    likes: 29,
    complexity: "Hard",
    rating: 4.4,
    tags: ["Animation", "Backdrop", "Spring"],
    isNew: true,
    isTrending: false,
  },
  {
    id: 5,
    name: "Collapsible Sidebar",
    category: "Navigation",
    type: "dark",
    preview: "nav",
    description: "Responsive sidebar with smooth collapse animations and icon transitions",
    downloads: "2.7k",
    likes: 52,
    complexity: "Medium",
    rating: 4.7,
    tags: ["Responsive", "Icons", "Smooth"],
    isNew: false,
    isTrending: false,
  },
  {
    id: 6,
    name: "Advanced Data Grid",
    category: "Data",
    type: "light",
    preview: "table",
    description: "Feature-rich data table with sorting, filtering, and pagination",
    downloads: "1.9k",
    likes: 41,
    complexity: "Hard",
    rating: 4.5,
    tags: ["Sorting", "Filtering", "Pagination"],
    isNew: false,
    isTrending: true,
  },
]

export function ComponentGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = ["All", "Form", "Layout", "Navigation", "Overlay", "Data", "Feedback", "Display"]

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderComponentPreview = (component: any) => {
    const baseClasses = "w-full h-full flex items-center justify-center relative overflow-hidden"

    switch (component.preview) {
      case "button":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <button className="relative px-8 py-3 bg-gray-900 text-white font-medium rounded-lg group overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            <Flame size={18} />
            Alacakaranlık
          </span>
          <div
            className="absolute inset-0 rounded-lg p-[3px]"
            style={{
              background: "linear-gradient(45deg, #f59e0b, #4f46e5, #f59e0b)",
            }}
          >
            <div className="bg-gray-900 rounded-md h-full w-full group-hover:bg-gray-800 transition-colors duration-300"></div>
          </div>
        </button>
            </div>
          </div>
        )
      case "input":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900`}>
            <button
          className="px-8 py-3 bg-gradient-to-br from-purple-300 to-green-200 text-gray-800 font-medium rounded-full hover:from-green-200 hover:to-purple-300 transition-all duration-500 hover:scale-105 shadow-lg"
          style={{
            background: "linear-gradient(135deg, #c7d2fe, #bbf7d0)",
            boxShadow: "0 10px 25px rgba(199, 210, 254, 0.3)",
          }}
        >
          <span className="flex items-center gap-2">
            <Leaf size={18} />
            Bahçe
          </span>
        </button>
          </div>
        )
      case "card":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-900 to-black p-4`}>
            <div className="relative w-4/5 h-4/5">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-sm"></div>
              <div className="relative h-full bg-gray-800/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 p-4 flex flex-col justify-between">
                <div>
                  <div className="w-3/4 h-2 bg-gray-600 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-gray-700 rounded"></div>
                </div>
                <div className="w-full h-6 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded"></div>
              </div>
            </div>
          </div>
        )
      case "modal":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-200 to-gray-300`}>
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-lg p-6 border border-white/50 shadow-2xl">
                <div className="w-32 h-2 bg-gray-400 rounded mb-3"></div>
                <div className="w-24 h-2 bg-gray-300 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="w-12 h-6 bg-blue-500 rounded text-xs"></div>
                  <div className="w-12 h-6 bg-gray-300 rounded text-xs"></div>
                </div>
              </div>
            </div>
          </div>
        )
      case "nav":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-900 to-gray-800`}>
            <div className="w-4/5 h-4/5 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <div className="w-16 h-2 bg-gray-600 rounded"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <div className="w-12 h-2 bg-gray-600 rounded"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <div className="w-14 h-2 bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )
      case "table":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-100 to-white p-2`}>
            <div className="w-full h-full bg-white rounded border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 p-2 border-b border-gray-200">
                <div className="flex space-x-4">
                  <div className="w-8 h-2 bg-gray-400 rounded"></div>
                  <div className="w-12 h-2 bg-gray-400 rounded"></div>
                  <div className="w-10 h-2 bg-gray-400 rounded"></div>
                </div>
              </div>
              <div className="p-2 space-y-1">
                <div className="flex space-x-4">
                  <div className="w-8 h-2 bg-gray-300 rounded"></div>
                  <div className="w-12 h-2 bg-gray-300 rounded"></div>
                  <div className="w-10 h-2 bg-gray-300 rounded"></div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-8 h-2 bg-gray-300 rounded"></div>
                  <div className="w-12 h-2 bg-gray-300 rounded"></div>
                  <div className="w-10 h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300`}>
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">{component.name}</div>
              <div className="text-xs opacity-60">{component.preview}</div>
            </div>
          </div>
        )
    }
  }

  return (
    <section className="py-20 px-4 bg-gray-950/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Premium Component Library</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handcrafted components with stunning visuals and smooth interactions. Each component is production-ready and
            fully customizable.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`border-gray-700 ${viewMode === "grid" ? "bg-gray-800" : ""}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode("list")}
              className={`border-gray-700 ${viewMode === "list" ? "bg-gray-800" : ""}`}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredComponents.map((component) => (
            <Card
              key={component.id}
              className="bg-gray-900/80 border-gray-800 hover:border-gray-600 transition-all duration-500 group overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm relative"
            >
              {/* Status Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {component.isNew && (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    <Zap className="w-3 h-3 mr-1" />
                    New
                  </Badge>
                )}
                {component.isTrending && (
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>

              {/* Complexity Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  className={`text-xs ${
                    component.complexity === "Easy"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : component.complexity === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}
                >
                  {component.complexity}
                </Badge>
              </div>

              <div className="p-6">
                {/* Enhanced Component Preview */}
                <div className="h-48 rounded-xl mb-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg">
                  {renderComponentPreview(component)}
                </div>

                {/* Component Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-white text-lg">{component.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-400 ml-1">{component.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed mb-3">{component.description}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {component.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 border-gray-700 text-xs px-2 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between text-xs text-gray-500 py-2 border-t border-gray-800">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {component.downloads}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {component.likes}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {Math.floor(Number.parseInt(component.downloads.replace("k", "")) * 0.3)}k users
                      </span>
                    </div>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700 text-xs">
                      {component.category}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button size="sm" className="flex-1 bg-white text-black hover:bg-gray-200 font-medium">
                      <Eye className="w-3 h-3 mr-2" />
                      Live Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 bg-transparent"
                    >
                      <Code className="w-3 h-3 mr-2" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 px-3 bg-transparent"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No components found</div>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Enhanced Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Components", value: "80+", icon: Zap, color: "text-purple-400" },
            { label: "Downloads", value: "25k+", icon: Download, color: "text-green-400" },
            { label: "Active Users", value: "4.2k", icon: Users, color: "text-blue-400" },
            { label: "Avg Rating", value: "4.8", icon: Star, color: "text-yellow-400" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gray-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
