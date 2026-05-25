import Link from 'next/link';

const graphPaper = {
  backgroundImage: "linear-gradient(hsla(0,0%,100%,0.04) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.04) 1px, transparent 1px), linear-gradient(hsla(0,0%,100%,0.015) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.015) 1px, transparent 1px)",
  backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px"
};

const services = [
  { label: 'Soundproofing', href: '/#services' },
  { label: 'Acoustic Treatment', href: '/#services' },
  { label: 'Noise Control', href: '/#services' },
  { label: 'Custom Manufacturing', href: '/#services' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Definitions', href: '/definitions' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book a Site Visit', href: '/book-site-visit' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6" style={graphPaper}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">Supersonic Customs</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional acoustic solutions for entertainment, residential, commercial and industrial applications across Southern Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {company.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+27212030054" className="hover:text-blue-400 transition-colors">+27 21 203 0054</a>
              </li>
              <li>
                <a href="tel:+27767702767" className="hover:text-blue-400 transition-colors">+27 76 770 2767</a>
              </li>
              <li>
                <a href="mailto:leads@supersonicafrica.co.za" className="hover:text-blue-400 transition-colors">leads@supersonicafrica.co.za</a>
              </li>
              <li className="pt-1">
                25B Gray Rd,<br />Paarden Eiland,<br />Cape Town, 7405
              </li>
              <li className="pt-2">
                <a href="https://wa.me/27767702767" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-xs font-medium transition-colors">
                  💬 WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 Supersonic Customs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
