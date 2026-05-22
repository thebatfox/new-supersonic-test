import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic & Soundproofing Definitions | Superzola Customs',
  description: 'Plain-language definitions of common acoustic and soundproofing terms — STC, NRC, decoupling, floating floors, RT60 and more.',
};

const definitions = [
  { term: 'Soundproofing', category: 'Core Concepts', definition: 'Soundproofing is the process of preventing sound from entering or leaving a space. It works by blocking sound wave transmission through walls, floors, ceilings, doors, and windows. True soundproofing isolates a space from the outside world using four key principles: mass, decoupling, absorption, and sealing. It is not the same as acoustic treatment.', related: ['Acoustic Treatment', 'Decoupling', 'Mass Loaded Vinyl', 'STC Rating'] },
  { term: 'Acoustic Treatment', category: 'Core Concepts', definition: 'Acoustic treatment improves the way sound behaves inside a room. Unlike soundproofing, it does not stop sound passing through walls — it controls reflections, echo, and reverberation within the space using absorption panels, diffusers, and bass traps. A restaurant, nightclub, boardroom, or studio needs acoustic treatment to sound its best.', related: ['Soundproofing', 'NRC Rating', 'Reverberation & RT60', 'Bass Trap', 'Diffuser'] },
  { term: 'STC Rating', category: 'Measurements', definition: 'STC (Sound Transmission Class) is a single-number rating that describes how well a partition — wall, floor, door, or ceiling — reduces airborne sound. The higher the STC, the better the isolation. A standard drywall wall rates around STC 33. A properly soundproofed partition can achieve STC 60 or above. STC is the most commonly referenced measurement when specifying soundproofing.', related: ['Soundproofing', 'Decoupling', 'NRC Rating'] },
  { term: 'NRC Rating', category: 'Measurements', definition: 'NRC (Noise Reduction Coefficient) is a rating between 0 and 1 that describes how much sound a material absorbs. An NRC of 0 means total reflection; an NRC of 1 means total absorption. Acoustic panels typically rate 0.7 to 1.0. NRC is used when specifying acoustic treatment materials for a space.', related: ['Acoustic Treatment', 'STC Rating', 'Absorption Coefficient', 'Reverberation & RT60'] },
  { term: 'Decibel (dB)', category: 'Measurements', definition: 'The decibel is the unit used to measure sound intensity. The scale is logarithmic — a 10dB increase is perceived as roughly twice as loud, and a 20dB reduction cuts perceived loudness by about 75%. Normal conversation sits around 60dB, a nightclub can reach 100dB, and a jet engine produces around 140dB. Even a 3dB reduction is clearly audible.', related: ['STC Rating', 'Noise Impact Survey', 'Acoustic Enclosure'] },
  { term: 'Reverberation & RT60', category: 'Measurements', definition: 'Reverberation is the persistence of sound after the source stops. RT60 is the standard measurement — specifically, the time it takes for sound to decay by 60dB. A cathedral may have an RT60 of 8 seconds; a recording studio targets under 0.4 seconds; a restaurant aims for 0.8 to 1.2 seconds for comfortable conversation. Controlling RT60 is the primary goal of acoustic treatment.', related: ['Acoustic Treatment', 'NRC Rating', 'Bass Trap', 'Diffuser'] },
  { term: 'Absorption Coefficient', category: 'Measurements', definition: 'The absorption coefficient of a material describes what fraction of sound energy it absorbs at a specific frequency, ranging from 0 (perfect reflection) to 1 (complete absorption). Most materials behave differently across the frequency spectrum. A thick foam panel may absorb high frequencies well but struggle at low bass. Coefficients are measured at standard octave bands: 125Hz, 250Hz, 500Hz, 1kHz, 2kHz, 4kHz.', related: ['NRC Rating', 'Bass Trap', 'Acoustic Treatment'] },
  { term: 'Decoupling', category: 'Soundproofing Techniques', definition: 'Decoupling physically separates two structures so that vibration cannot travel directly between them. When walls, floors, or ceilings are decoupled, sound has no rigid path to follow — dramatically reducing structure-borne noise. Common methods include resilient channels, acoustic isolation clips, and room-in-room construction with floating floors.', related: ['Room-in-Room Construction', 'Floating Floor', 'Structure-Borne Noise', 'STC Rating'] },
  { term: 'Mass Loaded Vinyl (MLV)', category: 'Soundproofing Techniques', definition: 'Mass Loaded Vinyl is a dense, flexible soundproofing material used to add mass to walls, floors, ceilings, and pipes. Adding mass is a fundamental soundproofing principle — the heavier a partition, the harder sound waves find it to move, and the less sound passes through. MLV is used inside wall cavities, under flooring, around pipes, and inside machinery enclosures.', related: ['Soundproofing', 'STC Rating', 'Decoupling'] },
  { term: 'Floating Floor', category: 'Soundproofing Techniques', definition: 'A floating floor is acoustically decoupled from the structural floor beneath it. The finished surface sits on resilient isolation materials — neoprene pads, springs, or acoustic foam — so impact noise and vibration cannot travel directly into the building. Floating floors are essential in recording studios, home cinemas, nightclubs, and anywhere bass frequencies or footfall impact is a concern.', related: ['Decoupling', 'Room-in-Room Construction', 'Impact Noise', 'Structure-Borne Noise'] },
  { term: 'Airborne Noise', category: 'Noise Types', definition: 'Airborne noise is sound that travels through the air before striking a building surface such as a wall or ceiling. Speech, music, and traffic are typical airborne noise sources. It is controlled through mass, sealing air gaps, and decoupling. The STC rating specifically measures resistance to airborne noise.', related: ['Structure-Borne Noise', 'STC Rating', 'Mass Loaded Vinyl'] },
  { term: 'Structure-Borne Noise', category: 'Noise Types', definition: 'Structure-borne noise travels through solid materials — walls, floors, beams, and pipes — rather than through the air. Footsteps, machinery vibration, plumbing noise, and heavy bass are common sources. It is often harder to control than airborne noise and requires decoupling and vibration isolation, not just mass.', related: ['Airborne Noise', 'Decoupling', 'Floating Floor', 'Anti-Vibration Mounts'] },
  { term: 'Impact Noise', category: 'Noise Types', definition: 'Impact noise is a type of structure-borne noise caused by a physical impact on a building surface — footsteps, dropped objects, or equipment vibration. It travels through the structure and radiates as sound on the other side. Impact noise is measured using the IIC (Impact Isolation Class) rating and is controlled with floating floors and resilient underlays.', related: ['Structure-Borne Noise', 'Floating Floor', 'Decoupling'] },
  { term: 'Bass Trap', category: 'Acoustic Treatment', definition: 'A bass trap is an acoustic panel designed to absorb low-frequency sound energy. Bass is the hardest frequency range to control because of its long wavelengths — it builds up in corners and causes booming, muddy sound. Bass traps are placed in room corners where low-frequency energy accumulates and are essential in studios, home cinemas, and any space where accurate bass reproduction matters.', related: ['Acoustic Treatment', 'Reverberation & RT60', 'Absorption Coefficient'] },
  { term: 'Diffuser', category: 'Acoustic Treatment', definition: 'An acoustic diffuser scatters sound in multiple directions rather than absorbing it. Diffusion adds spaciousness and liveliness to a room without making it acoustically dead. Diffusers break up flutter echo and standing waves while maintaining energy in the space. They are used in studios, performance venues, and home cinemas alongside absorption panels.', related: ['Acoustic Treatment', 'Bass Trap', 'Flutter Echo'] },
  { term: 'Flutter Echo', category: 'Acoustic Treatment', definition: 'Flutter echo is a rapid repeating echo caused by sound bouncing between two parallel reflective surfaces — such as opposite bare walls. It creates a distinctive fluttering or ringing effect, especially noticeable in rooms with hard parallel surfaces. It is solved by adding absorption or diffusion to at least one parallel surface.', related: ['Diffuser', 'Acoustic Treatment', 'Reverberation & RT60'] },
  { term: 'Room-in-Room Construction', category: 'Construction Methods', definition: 'Room-in-room construction is the highest level of acoustic isolation achievable. A completely separate inner room is built inside the outer shell with no rigid connections between the two structures. The inner room has its own floating floor, decoupled walls, and isolated ceiling — preventing both airborne and structure-borne sound from crossing the barrier. Used in professional recording studios, broadcast facilities, and audiology suites.', related: ['Decoupling', 'Floating Floor', 'Soundproofing', 'STC Rating'] },
  { term: 'Acoustic Enclosure', category: 'Industrial Solutions', definition: 'An acoustic enclosure is a structure built around a noise source — generator, compressor, pump, or industrial machine — to contain the sound it produces. Enclosures are built from dense panels with acoustic lining inside and are designed to allow ventilation while blocking sound. A well-designed generator enclosure can reduce noise by 20 to 40dB, allowing machinery to operate in noise-sensitive areas.', related: ['Noise & Vibration Control', 'Acoustic Louvre', 'Decibel (dB)'] },
  { term: 'Acoustic Louvre', category: 'Industrial Solutions', definition: 'An acoustic louvre is a ventilation opening that allows air to pass through while blocking sound. Standard louvres allow sound to travel freely through the airway — acoustic louvres use splitter baffles lined with absorbing material to create a tortuous air path while attenuating sound. They are essential components of generator enclosures and plant rooms where ventilation and noise control must coexist.', related: ['Acoustic Enclosure', 'Noise & Vibration Control'] },
  { term: 'Sound Barrier / Noise Barrier', category: 'Industrial Solutions', definition: 'A sound barrier is a solid structure built to shield a receiver from a noise source. Barriers can be permanent — such as masonry or composite panel walls along a property boundary — or temporary and deployable, such as acoustic curtain fence systems used on construction sites or around outdoor events. The effectiveness of a barrier depends on its height, mass, and how completely it interrupts the line of sight between source and receiver.', related: ['Acoustic Enclosure', 'Noise Impact Survey', 'Decibel (dB)'] },
  { term: 'Noise Impact Survey', category: 'Assessments & Compliance', definition: 'A noise impact survey is a professional measurement and assessment of noise levels at a site — typically to determine compliance with local regulations or to assess the impact of a proposed development. In South Africa, surveys are required for entertainment venues, industrial developments, and construction near residential areas. The result is a report with measured noise levels, analysis, and recommendations.', related: ['Decibel (dB)', 'Environmental Noise Regulations'] },
  { term: 'Environmental Noise Regulations', category: 'Assessments & Compliance', definition: 'In South Africa, environmental noise is governed by SANS 10103 (the recommended noise standards) and municipal by-laws. Entertainment venues, factories, and construction sites are all subject to noise limits that vary by time of day and land-use zone. Exceeding these limits can result in complaints, fines, or forced closure. A noise impact survey identifies whether a site is compliant and what remediation is needed.', related: ['Noise Impact Survey', 'Decibel (dB)', 'Acoustic Enclosure'] },
  { term: 'Active Noise Cancellation (ANC)', category: 'Technology', definition: 'Active Noise Cancellation uses electronics to reduce unwanted sound. A microphone detects incoming noise, a processor generates an inverse (anti-phase) sound wave, and a speaker emits this anti-noise — causing the two waves to cancel. ANC is most effective for low-frequency continuous noise such as HVAC hum, machinery drone, and traffic rumble. It is used in headphones, industrial settings, and architectural applications.', related: ['Noise & Vibration Control', 'Structure-Borne Noise'] },
];

const categories = [...new Set(definitions.map(d => d.category))];

export default function DefinitionsPage() {
  return (
    <div className="min-h-screen bg-[hsl(220,15%,11%)]">
      <div className="bg-[hsl(220,15%,17%)] border-b border-[hsl(220,15%,22%)] py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Acoustic <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Definitions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Plain-language explanations of the most common acoustic and soundproofing terms — no jargon, just honest definitions to help you understand your project.
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-10 bg-[hsl(220,15%,13%)]/95 backdrop-blur border-b border-[hsl(220,15%,22%)] py-3 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {categories.map(cat => (
            <a key={cat} href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="px-3 py-1 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full text-xs font-medium transition-colors">
              {cat}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {categories.map(cat => (
          <div key={cat} id={cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6 pb-2 border-b border-[hsl(220,15%,22%)]">{cat}</h2>
            <div className="space-y-6">
              {definitions.filter(d => d.category === cat).map(def => (
                <div key={def.term} id={def.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="bg-[hsl(220,15%,17%)]/50 rounded-2xl p-6 border border-[hsl(220,15%,22%)] hover:border-[hsl(220,15%,26%)] transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{def.term}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{def.definition}</p>
                  {def.related.length > 0 && (
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-gray-500 text-xs">Related:</span>
                      {def.related.map(rel => (
                        <a key={rel} href={`#${rel.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="px-2 py-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded text-xs transition-colors">
                          {rel}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">Our team has decades of combined experience across Southern Africa. Book a free site visit and get expert advice specific to your space and budget.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book-site-visit" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Book a Free Site Visit <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/27767702767?text=Hi%20Superzola%20Customs!%20I%20have%20a%20soundproofing%20question." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
