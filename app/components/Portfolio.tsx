"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Zoom } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/zoom"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<any>(null)
  const [filter, setFilter] = useState("All")

  // 🔥 Updated structure (multiple images per category)
  const projects = [
    {
      title: "Living Room",
      category: "Home",
      images: ["/images/p1.jpg", "/images/p1-2.jpg", "/images/p1-3.jpg"],
    },
    {
      title: "Bedroom",
      category: "Home",
      images: ["/images/p2.jpg", "/images/p2-2.jpg"],
    },
    {
      title: "Kitchen",
      category: "Home",
      images: ["/images/p3.jpg"],
    },
    {
      title: "Office",
      category: "Work",
      images: ["/images/p4.jpg", "/images/p4-2.jpg"],
    },
    {
      title: "Dining",
      category: "Home",
      images: ["/images/p5.jpg"],
    },
    {
      title: "Luxury Hall",
      category: "Premium",
      images: ["/images/p6.jpg", "/images/p6-2.jpg"],
    },
  ]

  const categories = ["All", "Home", "Work", "Premium"]

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="p-10">
      <h2 className="text-3xl mb-6 text-center">Our Work</h2>

      {/* 🔹 Category Filter */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded ${
              filter === cat ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔹 Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            onClick={() => setActiveCategory(p)}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-105 transition"
          >
            <img
              src={p.images[0]}
              className="w-full h-64 object-cover"
            />
            <p className="p-3 text-center">{p.title}</p>
          </div>
        ))}
      </div>

      {/* 🔥 Modal Slider */}
      {activeCategory && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[60%]">

            {/* Close Button */}
            <button
              onClick={() => setActiveCategory(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation
              pagination={{ clickable: true }}
              zoom={true}
              className="rounded-lg"
            >
              {activeCategory.images.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <img
                      src={img}
                      className="w-full h-[500px] object-cover"
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