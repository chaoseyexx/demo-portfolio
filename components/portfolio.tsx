"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Play } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Brand Motion Film",
    category: "Video Editing",
    description: "Full-production brand film featuring dynamic transitions and color grading",
    image: "/modern-corporate-motion-graphics-video.jpg",
    tags: ["Motion Design", "Color Grading", "Branding"],
  },
  {
    id: 2,
    title: "Character Animation Series",
    category: "Animation",
    description: "3D character animation series for animated storytelling",
    image: "/3d-character-animation-colorful-style.jpg",
    tags: ["3D Animation", "Character Design", "Rigging"],
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "Video Editing",
    description: "High-end product visualization with particle effects and transitions",
    image: "/sleek-product-visualization-with-effects.jpg",
    tags: ["Post Production", "Product Design", "Editing"],
  },
  {
    id: 4,
    title: "Music Video",
    category: "Video Editing",
    description: "Creative music video with synchronized effects and transitions",
    image: "/vibrant-music-video-editing.jpg",
    tags: ["Music Video", "Editing", "Motion"],
  },
  {
    id: 5,
    title: "UI Animation Pack",
    category: "Animation",
    description: "Smooth UI animations and transitions for web and app experiences",
    image: "/smooth-ui-animation-interface-design.jpg",
    tags: ["UI/UX", "Web Animation", "Interactive"],
  },
  {
    id: 6,
    title: "Documentary Edit",
    category: "Video Editing",
    description: "Long-form documentary with color correction and sound design",
    image: "/cinematic-documentary-editing-warm-tones.jpg",
    tags: ["Documentary", "Color Grading", "Sound"],
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const categories = ["All", "Animation", "Video Editing"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 },
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card")
    cards.forEach((card) => {
      if (observerRef.current) {
        observerRef.current.observe(card)
      }
    })
  }, [filteredProjects])

  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of projects showcasing animation and video editing expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40 scale-105"
                  : "bg-card text-foreground hover:border-primary border border-border hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group project-card transition-all duration-700 ${
                visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              data-index={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Play size={56} className="text-white fill-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm text-primary font-semibold mb-1">{project.category}</p>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink
                      size={20}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45"
                    />
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
