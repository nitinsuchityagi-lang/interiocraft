export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HERO INTRO */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light tracking-wide mb-6">
            About InterioCraft
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are not an interior execution company. We are a design advisory
            studio that helps homeowners make confident, informed decisions by
            connecting them with the right interior experts.
          </p>
        </div>

        {/* VALUE STATEMENT BLOCK */}
        <div className="grid md:grid-cols-3 gap-10 mb-24 text-center">

          <div className="p-6 border border-gray-100 rounded-xl">
            <h3 className="text-xl font-medium mb-3">Clarity</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We remove confusion from design decisions by structuring your project with expert guidance.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl">
            <h3 className="text-xl font-medium mb-3">Trust</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every designer is personally vetted for quality, ethics, and financial stability.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl">
            <h3 className="text-xl font-medium mb-3">Precision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We match you only with professionals aligned to your budget and lifestyle.
            </p>
          </div>

        </div>

        {/* HOW WE WORK */}
        <div className="mb-24">

          <h3 className="text-3xl font-light text-center mb-14">
            How We Work
          </h3>

          <div className="space-y-12 max-w-4xl mx-auto">

            <div className="border-l-2 border-gray-200 pl-6">
              <h4 className="text-lg font-semibold mb-2">1. The Audit</h4>
              <p className="text-gray-600 leading-relaxed">
                We personally evaluate and shortlist interior professionals across Bangalore
                based on execution quality, ethics, and financial credibility.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <h4 className="text-lg font-semibold mb-2">2. The Discovery</h4>
              <p className="text-gray-600 leading-relaxed">
                We understand your lifestyle, space requirements, and real budget to define
                what actually makes sense — not just what looks good.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <h4 className="text-lg font-semibold mb-2">3. The Match</h4>
              <p className="text-gray-600 leading-relaxed">
                We introduce you to 3 carefully selected experts best suited for your project.
              </p>
            </div>

          </div>

          <p className="text-center text-gray-500 mt-10 max-w-2xl mx-auto">
            The result is simple — clarity, confidence, and zero guesswork.
            Our advisory is offered at no cost, because your home deserves decisions
            built on trust, not trial and error.
          </p>

          <p className="text-center mt-6 text-black font-medium">
            Stop the guesswork. Start with experts.
          </p>

        </div>

        {/* FOUNDERS SECTION */}
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-light mb-14">
            Leadership
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Director 1 */}
          <div className="text-center">
            <img
              src="/images/director1.jpg"
              alt="Director"
              className="w-full h-[360px] object-cover rounded-xl mb-6"
            />
            <h4 className="text-xl font-semibold">Divya Kero</h4>
            <p className="text-gray-500 text-sm mb-4">Managing Director</p>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience, Divya leads the advisory vision of InterioCraft,
              focusing on structured design decisions and premium client experience.
            </p>
          </div>

          {/* Director 2 */}
          <div className="text-center">
            <img
              src="/images/director2.jpg"
              alt="Director"
              className="w-full h-[360px] object-cover rounded-xl mb-6"
            />
            <h4 className="text-xl font-semibold">Suchita Tyagi</h4>
            <p className="text-gray-500 text-sm mb-4">Creative Director</p>
            <p className="text-gray-600 leading-relaxed">
              Suchita brings refined aesthetic direction and ensures every recommendation
              aligns with both functionality and visual excellence.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}