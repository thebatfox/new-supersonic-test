import { Hammer, Wrench, Ruler, Package, Users, Award } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { icon: Ruler, value: 'Full-Scale', label: 'Production Facility' },
  { icon: Wrench, value: 'In-House', label: 'Manufacturing & Fabrication' },
  { icon: Package, value: 'Stocked', label: 'Materials & Product Range' },
  { icon: Users, value: 'Skilled', label: 'Craftsmen & Technicians' },
];

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-20 px-6 bg-gray-100 relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, hsl(225,80%,50%) 40px, hsl(225,80%,50%) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, hsl(225,80%,50%) 40px, hsl(225,80%,50%) 41px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Hammer className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Our Workshop & Factory</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Build It <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">In-House</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Supersonic Customs operates from a fully-equipped workshop and production facility. Everything from custom acoustic panels and DJ booths to generator enclosures and shopfitting is designed, fabricated, and quality-checked under one roof — before it ever reaches your site.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Having our own workshop gives us complete control over quality, lead times, and cost — and the flexibility to take on complex, bespoke projects that require real hands-on manufacturing capability. You get a committed production partner from concept through to installation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book-site-visit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-colors">
                Book a Site Visit
              </Link>
              <a href="https://wa.me/27767702767?text=Hi%20Supersonic%20Customs!%20I%27d%20like%20to%20find%20out%20more%20about%20your%20workshop%20capabilities."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-[hsl(220,15%,26%)] text-gray-900 font-semibold px-6 py-3 rounded-xl transition-colors border border-gray-300">
                💬 Ask About Capabilities
              </a>
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
                <Icon className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-gray-900 font-bold text-lg mb-1">{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}

            {/* Workshop highlights card */}
            <div className="col-span-2 bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
              <Award className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="text-gray-900 font-semibold mb-3">What sets us apart</h4>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {[
                  'Full woodworking & steel fabrication',
                  'Acoustic panel cutting & upholstery',
                  'Custom metalwork & enclosures',
                  'Foam & MLV cutting & lamination',
                  'Spray painting & finishing',
                  'On-site installation teams',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
