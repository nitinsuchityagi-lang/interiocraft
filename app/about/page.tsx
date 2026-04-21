import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 mb-12">
          Meet the visionaries behind InterioCraft Design Co.
        </p>

        {/* Directors */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Director 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <Image
              src="/images/director1.jpg"
              alt="Managing Director"
              width={500}
              height={300}
              className="object-contain max-h-full"
            />
            <h3 className="text-xl font-semibold">Divya Kero</h3>
            <p className="text-sm text-gray-500 mb-3">Managing Director</p>
            <p className="text-gray-600">
              With over 12 years of experience in interior design, Divya leads
              InterioCraft with a vision to transform spaces into timeless
              experiences. Her expertise lies in modern luxury and functional design.
            </p>
          </div>

          {/* Director 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <Image
              src="/images/director2.jpg"
              alt="Managing Director"
              width={500}
              height={300}
              className="object-contain max-h-full"
            />
            <h3 className="text-xl font-semibold">Suchita Tyagi</h3>
            <p className="text-sm text-gray-500 mb-3">Managing Director</p>
            <p className="text-gray-600">
              Suchita brings creativity and innovation into every project. She specializes
              in aesthetic detailing and ensures each design reflects the client’s personality
              while maintaining elegance and functionality.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}