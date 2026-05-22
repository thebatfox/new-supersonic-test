export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  slug: string;
}

export const projects: Project[] = [
  { id: 1, title: 'Recording Studio Soundproofing', category: 'Studio', description: 'Complete acoustic treatment for professional recording studio with floating floors and isolated walls.', slug: 'recording-studio-soundproofing' },
  { id: 2, title: 'Home Theatre Acoustic Design', category: 'Residential', description: 'Custom home theatre with optimised acoustics and soundproofing for the ultimate viewing experience.', slug: 'home-theatre-acoustic-design' },
  { id: 3, title: 'Office Noise Control', category: 'Commercial', description: 'Open office acoustic treatment to reduce noise distractions and improve productivity.', slug: 'office-noise-control' },
  { id: 4, title: 'Industrial Machinery Enclosure', category: 'Industrial', description: 'Custom acoustic enclosure for manufacturing equipment reducing noise by 35dB.', slug: 'industrial-machinery-enclosure' },
  { id: 5, title: 'Restaurant Acoustic Treatment', category: 'Commercial', description: 'Elegant acoustic panels and ceiling treatment to control reverberation in dining areas.', slug: 'restaurant-acoustic-treatment' },
  { id: 6, title: 'Broadcast Studio Construction', category: 'Studio', description: 'Room-in-room construction for radio broadcast studio with complete isolation.', slug: 'broadcast-studio-construction' },
];

export const categories = ['All', 'Studio', 'Residential', 'Commercial', 'Industrial', 'Carpentry', 'AV Installation'];

export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  hero?: boolean;
}

export const services: Service[] = [
  // ─── HERO SERVICES ───────────────────────────────────────────────
  {
    id: 'soundproofing',
    icon: 'Shield',
    title: 'Soundproofing',
    subtitle: 'Blocking Noise at the Source',
    hero: true,
    description: 'Supersonic Customs delivers professional soundproofing solutions for homes, studios, restaurants, nightclubs, offices, and industrial facilities across Southern Africa. Using mass, sealing, decoupling, and damping techniques, we stop unwanted noise in its tracks — whether that\'s a noisy generator, a busy road, a thumping club next door, or machinery on your factory floor.',
    features: ['Mass Loaded Vinyl (MLV)', 'Acoustic Sealing & Gaskets', 'Decoupling & Isolation Systems', 'Soundproof Walls, Floors & Ceilings', 'Acoustic Doors & Windows', 'Generator & Machinery Enclosures']
  },
  {
    id: 'acoustic-treatment',
    icon: 'Volume2',
    title: 'Acoustic Treatment',
    subtitle: 'Making Every Space Sound Its Best',
    hero: true,
    description: 'Great soundproofing keeps noise out — acoustic treatment makes the sound inside your space perform at its best. From controlling echo in busy restaurants and improving speech clarity in boardrooms, to perfecting the energy in nightclubs and precision in recording studios, we design and install custom acoustic treatment solutions that look as good as they sound.',
    features: ['Fabric-Wrapped Acoustic Panels', 'Ceiling Baffles & Acoustic Clouds', 'Bass Traps & Diffusers', 'Perforated & Slatted Timber Panels', 'Wood Wool Acoustic Panels', 'Foam Sound Absorbers']
  },
  {
    id: 'carpentry-manufacturing',
    icon: 'Hammer',
    title: 'Carpentry & Custom Manufacturing',
    subtitle: 'Built in South Africa, Built to Last',
    hero: true,
    description: 'Our in-house carpentry team goes far beyond acoustics. We design and build anything from bespoke acoustic installations and entertainment venue fit-outs to full shopfitting, custom cabinetry, and commercial interiors — all manufactured to your exact specification in South Africa. If you can imagine it, we can build it.',
    features: ['Custom DJ Booths & Entertainment Fit-Outs', 'Shopfitting & Retail Interiors', 'Custom Cabinetry & Built-in Furniture', 'Bar, Restaurant & Club Fit-Outs', 'Acoustic Wall, Ceiling & Feature Work', 'Chain Curtain, Living Wall & LED Installations']
  },
  // ─── SUPPORTING SERVICES ─────────────────────────────────────────
  {
    id: 'noise-vibration-control',
    icon: 'Settings',
    title: 'Noise & Vibration Control',
    subtitle: 'Industrial & Outdoor Solutions',
    description: 'From factory floors to property boundaries, Supersonic Customs designs and builds noise control solutions for any environment — indoor or outdoor. We tackle everything from machinery enclosures and HVAC systems to permanent property boundary barriers and temporary deployable sound curtain fences.',
    features: ['Factory Machinery Enclosures', 'Generator & Compressor Enclosures', 'Property Boundary Sound Barriers', 'Temporary Sound Barrier Fence Curtains', 'Anti-Vibration Mounts & Isolation Pads', 'Acoustic Louvres, Silencers & HVAC Solutions', 'Indoor & Outdoor Applications']
  },
  {
    id: 'anc',
    icon: 'Zap',
    title: 'Active Noise Cancellation',
    subtitle: 'Electronic Noise Control',
    description: 'Where passive solutions reach their limits, active noise cancellation (ANC) steps in. Using advanced digital signal processing, ANC systems electronically cancel low-frequency noise in real-time — ideal for industrial environments, HVAC systems, and large open spaces.',
    features: ['Real-time DSP Processing', 'Low-frequency Noise Cancellation', 'Smart Adaptive Systems', 'Industrial & Commercial Applications']
  },
  {
    id: 'sound-system-design',
    icon: 'Speaker',
    title: 'Sound System Design',
    subtitle: 'Specification & Engineering',
    description: 'Professional audio system design and specification for nightclubs, restaurants, houses of worship, corporate venues, and outdoor events. We model your space acoustically and engineer a system that delivers consistent, high-quality sound to every corner.',
    features: ['Room Acoustic Modelling', 'Speaker Array Design & Specification', 'System Integration Planning', 'Coverage & SPL Optimisation', 'Equipment Specification']
  },
  {
    id: 'noise-impact-surveys',
    icon: 'ClipboardCheck',
    title: 'Noise Impact Surveys',
    subtitle: 'Compliance & Assessment',
    description: 'Comprehensive environmental noise impact assessments and compliance surveys for new developments, entertainment venues, industrial sites, and residential projects. We measure, report, and recommend — helping you meet South African noise regulations before they become a problem.',
    features: ['Environmental Noise Measurement', 'Regulatory Compliance Reporting', 'Pre-construction Impact Analysis', 'Entertainment Venue Assessments', 'Industrial Site Surveys']
  },
  {
    id: 'room-in-room',
    icon: 'HomeIcon',
    title: 'Room-in-Room Construction',
    subtitle: 'Complete Acoustic Isolation',
    description: 'The gold standard in sound isolation. Room-in-room construction creates a completely decoupled inner shell within an existing structure — eliminating airborne and structure-borne noise transmission. Ideal for recording studios, broadcast booths, audiology suites, and home cinemas.',
    features: ['Floating Floor Systems', 'Decoupled Wall Construction', 'Isolated Ceiling Systems', 'Recording Studio Builds', 'Broadcast & Audiology Booths']
  },
  {
    id: 'av-tech-supply',
    icon: 'Monitor',
    title: 'AV Tech Supply & Install',
    subtitle: 'Audio Visual Solutions',
    description: 'Full turnkey audio-visual supply and installation across Southern Africa. From professional speaker and amplifier systems to LED display walls, DJ equipment, lighting, and AV control systems — we supply, install, and integrate everything your venue needs to perform at its best.',
    features: ['Professional Speaker & Amp Systems', 'LED Display & Lighting Systems', 'DJ Equipment Supply & Installation', 'AV Control System Integration', 'Corporate & Venue AV Solutions']
  },
];
