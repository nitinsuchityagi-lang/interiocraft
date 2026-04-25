export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold">InterioCraft Design Co.</h2>
          <p className="mt-3 text-sm text-gray-400">
            Designing modern, elegant, and functional spaces for your home and office.
          </p>
        </div>

        {/* Links */}
<div>
  <h3 className="text-lg mb-3">Quick Links</h3>

  <ul className="space-y-2 text-gray-300">
    <li>
      <a href="/" className="hover:text-white">Home</a>
    </li>

    <li>
      <a href="#portfolio" className="hover:text-white">Portfolio</a>
    </li>

    <li>
      <a href="#services" className="hover:text-white">Services</a>
    </li>

    <li>
      <div className="flex items-center gap-2">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/interio.craft.studios?igsh=MXAyYWhrMmM2bW83OA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4z"/>
            <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            <circle cx="17.5" cy="6.5" r="1.2"/>
          </svg>
        </a>

        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </div>
    </li>
  </ul>
</div>

        {/* Contact */}
        <div>
          <h3 className="text-lg mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">Noida, India</p>
          <p className="text-gray-300 text-sm mt-1">+91 9036206790</p>
          <p className="text-gray-300 text-sm mt-1">contact@interiocraft.co.in</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} InterioCraft Design Co. All rights reserved.
      </div>
    </footer>
  )
}