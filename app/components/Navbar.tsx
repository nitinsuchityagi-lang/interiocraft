"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-xl font-semibold transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={35}
            height={35}
            className="h-[50px] w-auto object-contain"
            priority
          />
          InterioCraft
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-6 text-sm transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <li>
            <Link href="/" className="hover:opacity-70 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-70 transition">
              About Us
            </Link>
          </li>
          <li>
            <a href="/#portfolio" className="hover:opacity-70 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/#services" className="hover:opacity-70 transition">
              Services
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:opacity-70 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className={`md:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white text-black flex flex-col items-center gap-4 py-4 shadow-md">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <a href="/#portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </a>
          <a href="/#services" onClick={() => setOpen(false)}>
            Services
          </a>
          <a href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}