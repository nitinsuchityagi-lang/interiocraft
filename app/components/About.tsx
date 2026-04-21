export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 mb-12">
          Crafting elegant interiors with passion, precision, and purpose.
        </p>

        {/* Directors Section */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Director 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <img
              src="/images/director1.jpg"
              alt="Managing Director"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Divya Kero</h3>
            <p className="text-sm text-gray-500 mb-3">Managing Director</p>
            <p className="text-gray-600">
              With over 12 years of experience in interior design, Amit leads
              InterioCraft with a vision to transform spaces into timeless
              experiences. His expertise lies in modern luxury and functional design.
            </p>
          </div>

          {/* Director 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <img
              src="/images/director2.jpg"
              alt="Creative Director"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Suchita Tyagi</h3>
            <p className="text-sm text-gray-500 mb-3">Creative Director</p>
            <p className="text-gray-600">
              Neha brings creativity and innovation into every project. She specializes
              in aesthetic detailing and ensures each design reflects the client’s personality
              while maintaining elegance and functionality.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}