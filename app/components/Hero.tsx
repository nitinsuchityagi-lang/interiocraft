"use client"

import { useEffect, useState } from "react"

const images = [
  "/images/interior1.jpg",
  "/images/interior2.jpg",
  "/images/interior3.jpg",
  "/images/interior4.jpg",
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000) // change every 4 sec

    return () => clearInterval(interval)
  }, [])

  return (
    
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Images */}
        {images.map((img, i) => (
        <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[4000ms] ${
            i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url(${img})` }}
        />
        ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Design Your Dream Space
        </h1>
        <p className="mb-6 text-lg">
          Modern interiors tailored to your lifestyle
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Free Consultation
        </button>
      </div>
    </section>
  )
}