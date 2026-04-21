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
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">Noida, India</p>
          <p className="text-gray-300 text-sm mt-1">+91 9036206790</p>
          <p className="text-gray-300 text-sm mt-1">info@interiorstudio.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} InterioCraft Design Co. All rights reserved.
      </div>
    </footer>
  )
}