import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-24 pb-14 px-6 bg-white text-black">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-black mb-3">
            About InterioCraft
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            A design advisory studio helping homeowners make confident decisions
            by connecting them with vetted interior professionals.
          </p>
        </div>

        {/* VALUE STRIP */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">

          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="font-semibold text-black">Clarity</h3>
            <p className="text-xs text-gray-600 mt-1">
              Structured decisions without confusion.
            </p>
          </div>

          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="font-semibold text-black">Trust</h3>
            <p className="text-xs text-gray-600 mt-1">
              Every professional is personally vetted.
            </p>
          </div>

          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="font-semibold text-black">Precision</h3>
            <p className="text-xs text-gray-600 mt-1">
              Only 3 best-fit experts per project.
            </p>
          </div>

        </div>

        {/* HOW WE WORK */}
        <div className="mb-10">

          <h2 className="text-2xl font-semibold text-center mb-6">
            How We Work
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">

            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-semibold text-black text-sm">
                1. The Audit
              </h3>
              <p className="text-gray-600 text-xs">
                We evaluate designers based on execution quality, ethics, and financial stability.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-semibold text-black text-sm">
                2. The Discovery
              </h3>
              <p className="text-gray-600 text-xs">
                We define your real lifestyle needs, expectations, and budget.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-semibold text-black text-sm">
                3. The Match
              </h3>
              <p className="text-gray-600 text-xs">
                We introduce 3 carefully curated interior professionals for your project.
              </p>
            </div>

          </div>

          <p className="text-center text-gray-500 text-xs mt-6">
            Zero guesswork. Only structured decisions.
          </p>

        </div>

        {/* DIRECTORS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Divya */}
          <div className="text-center">
            <Image
              src="/images/director1.jpg"
              alt="Divya Kero"
              width={500}
              height={320}
              className="rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold mt-3 text-black">
              Divya Kero
            </h3>
            <p className="text-gray-500 text-xs">Managing Director</p>

            <p className="text-gray-600 text-xs mt-3 leading-relaxed px-4">
              With over 12 years of experience in interior design, Divya Kero brings deep expertise
              in project execution, space planning, and client-centric design delivery.
              Her strength lies in transforming complex requirements into highly functional and
              well-structured interiors, ensuring every project is delivered with precision and
              long-term value in mind.
            </p>
          </div>

          {/* Suchita */}
          <div className="text-center">
            <Image
              src="/images/director2.jpg"
              alt="Suchita Tyagi"
              width={500}
              height={320}
              className="rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold mt-3 text-black">
              Suchita Tyagi
            </h3>
            <p className="text-gray-500 text-xs">Managing Director</p>

            <p className="text-gray-600 text-xs mt-3 leading-relaxed px-4">
              Suchita Tyagi leads the creative vision of InterioCraft with a strong focus on
              aesthetics, detailing, and design storytelling. Her approach blends modern trends
              with timeless elegance, ensuring every space feels visually refined, emotionally
              engaging, and thoughtfully curated.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}