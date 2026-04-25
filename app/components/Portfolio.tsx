"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Zoom } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/zoom"

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([])
  const [activeProject, setActiveProject] = useState<any>(null)

  // ✅ Default = All
  const [filter, setFilter] = useState("All")

  // Fetch projects
  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])

  // ✅ Categories (with All)
  const categories = ["All", "Home", "Office", "Outdoor"]

  // ✅ Filter logic
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="p-6 md:p-10">
      <h2 className="text-3xl mb-6 text-center">Our Work</h2>

      {/* 🔹 Category Filter */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded transition ${
              filter === cat
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔹 Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            onClick={() => setActiveProject(p)}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-105 transition"
          >
            <img
              src={p.images[0]}
              className="w-full h-64 object-cover"
              alt={p.title}
            />
            <p className="p-3 text-center font-medium">{p.title}</p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No projects available
        </p>
      )}

      {/* 🔥 Modal Slider */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[95%] md:w-[60%]">

            {/* Close */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation
              pagination={{ clickable: true }}
              zoom={true}
            >
              {activeProject.images.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <img
                      src={img}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  )
}