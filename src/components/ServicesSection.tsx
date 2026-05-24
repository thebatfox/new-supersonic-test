import { Shield, Volume2, Settings, Zap, Speaker, ClipboardCheck, Home as HomeIcon, Hammer, Monitor, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '@/data/projects';
import Link from 'next/link';

const iconMap = { Shield, Volume2, Settings, Zap, Speaker, ClipboardCheck, HomeIcon, Hammer, Monitor };

export default function ServicesSection() {
  const heroServices = services.filter(s => s.hero);
  const supportingServices = services.filter(s => !s.hero);

  return (
    <section id="services" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Comprehensive acoustic shopfitters delivering projects across Southern Africa — from concept to completion.
          </p>
        </div>

        {/* Hero Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {heroServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className="relative bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300 group">
                {/* Blue accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-700" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-500/10 p-3 rounded-2xl">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-blue-400 text-sm font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group-hover:gap-3 duration-200">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportingServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className="bg-white/60 rounded-2xl border border-gray-200 hover:border-blue-500/50 p-6 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-400 text-xs font-medium">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-blue-500/70 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Not sure which service you need?</p>
          <Link
            href="/book-site-visit"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-gray-900 font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
          >
            Book a Free Site Visit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
