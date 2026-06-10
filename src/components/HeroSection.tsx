import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 px-6 text-white"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'centre',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Graph paper overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: "linear-gradient(hsla(0,0%,100%,0.05) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.05) 1px, transparent 1px), linear-gradient(hsla(0,0%,100%,0.02) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.02) 1px, transparent 1px)", backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px"}} />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950/70" />
      <div className="relative max-w-7xl mx-auto text-centre z-10">
        <div className="mb-6 flex justify-centre">
          <img
            src="https://ugc.same-assets.com/mPV43MWKgtE4HVSGMz-VP38DKbAO2OjZ.svg"
            alt="Supersonic Customs Logo"
            className="h-64 md:h-80 w-auto"
          />
        </div>
        <p className="text-xl md:text-2xl mb-6 opacity-90">
          Specialist Soundproofing & Acoustic Treatment Company
        </p>

        <div className="text-lg mb-8 opacity-90 max-w-4xl mx-auto">
          <p className="mb-6">We provide expert solutions for:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
            <ul className="space-y-3">
              <li className="flex items-centre">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Nightclubs, bars & entertainment venues
              </li>
              <li className="flex items-centre">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Corporate offices & meeting spaces
              </li>
              <li className="flex items-centre">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Schools, universities & classrooms
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-centre">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Residential homes, apartments & estates
              </li>
              <li className="flex items-centre">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Churches and houses of worship
              </li>
              <li className="flex items-centre">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Generator & equipment noise treatment
              </li>
            </ul>
          </div>

          <p className="text-centre mb-8 text-lg opacity-80">
            Our work spans <strong>South Africa, DRC, Zambia, Mozambique, and Namibia</strong>,
            with proven results across diverse industries and environments.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-centre">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
            <a href="/about">Who are we?</a>
          </Button>
          <Button size="lg" className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl border-0 shadow-lg shadow-blue-900/40 transition-all" asChild>
            <a href="/book-site-visit">Book a Site Visit</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900 bg-[#1339AA]"
            asChild
          >
            <a href="#questionnaire">Get Started Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
