"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'night-clubs',
    label: 'Night Clubs',
    preview: [
      '/gallery/night-clubs/night-clubs-origin-namibia-001.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-002.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-003.jpg',
    ]
  },
  {
    id: 'acoustic-panels',
    label: 'Acoustic Panels',
    preview: [
      '/gallery/acoustic-panels/acoustic-panels-001.jpg',
      '/gallery/acoustic-panels/acoustic-panels-002.jpg',
      '/gallery/acoustic-panels/acoustic-panels-003.jpg',
    ]
  },
  {
    id: 'acoustic-ceilings-wallpaper',
    label: 'Acoustic Ceilings & Wallpaper',
    preview: [
      '/gallery/acoustic-ceilings-wallpaper/acoustic-ceilings-wallpaper-001.jpg',
      '/gallery/acoustic-ceilings-wallpaper/acoustic-ceilings-wallpaper-002.jpg',
      '/gallery/acoustic-ceilings-wallpaper/acoustic-ceilings-wallpaper-003.jpg',
    ]
  },
  {
    id: 'commercial-spaces',
    label: 'Commercial Spaces',
    preview: [
      '/gallery/commercial-spaces/commercial-spaces-001.jpg',
      '/gallery/commercial-spaces/commercial-spaces-002.jpg',
      '/gallery/commercial-spaces/commercial-spaces-003.jpg',
    ]
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    preview: [
      '/gallery/restaurants/restaurants-001.jpg',
      '/gallery/restaurants/restaurants-002.jpg',
      '/gallery/restaurants/restaurants-003.jpg',
    ]
  },
  {
    id: 'industrial-machinery',
    label: 'Industrial & Machinery',
    preview: [
      '/gallery/night-clubs/night-clubs-origin-namibia-004.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-005.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-006.jpg',
    ]
  },
  {
    id: 'schools-worship',
    label: 'Schools & Worship',
    preview: [
      '/gallery/night-clubs/night-clubs-origin-namibia-007.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-008.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-009.jpg',
    ]
  },
  {
    id: 'tech-av',
    label: 'Tech & AV',
    preview: [
      '/gallery/night-clubs/night-clubs-origin-namibia-010.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-011.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-012.jpg',
    ]
  },
  {
    id: 'fun-projects',
    label: 'Fun Projects',
    preview: [
      '/gallery/night-clubs/night-clubs-origin-namibia-013.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-014.jpg',
      '/gallery/night-clubs/night-clubs-origin-namibia-015.jpg',
    ]
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of acoustic and interior installations across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/gallery/${cat.id}`}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-2 gap-0.5 h-52">
                <div className="row-span-2 overflow-hidden">
                  <img
                    src={cat.preview[0]}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={cat.preview[1]}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={cat.preview[2]}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-semibold text-gray-900 text-sm">{cat.label}</span>
                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300 rounded-2xl" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
