"use client";

import { useState } from 'react';
import Link from 'next/link';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

// Auto-generate clean title from filename
function titleFromFilename(filename: string): string {
  return filename
    .replace(/\.jpg$|\.png$|\.jpeg$|\.webp$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const categories = [
  { id: 'night-clubs', label: 'Night Clubs' },
  { id: 'acoustic-panels', label: 'Acoustic Panels' },
  { id: 'acoustic-ceilings-wallpaper', label: 'Acoustic Ceilings & Wallpaper' },
  { id: 'commercial-spaces', label: 'Commercial Spaces' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'industrial-machinery', label: 'Industrial & Machinery' },
  { id: 'schools-worship', label: 'Schools & Worship' },
  { id: 'tech-av', label: 'Tech & AV' },
  { id: 'fun-projects', label: 'Fun Projects' },
];

// Sample images per category for the masonry preview
const previewImages = [
  { src: '/gallery/night-clubs/halo-nightclub-main-floor.jpg', category: 'Night Clubs', categoryId: 'night-clubs' },
  { src: '/gallery/night-clubs/dj-booth-geometric-ceiling.jpg', category: 'Night Clubs', categoryId: 'night-clubs' },
  { src: '/gallery/acoustic-panels/architectural-ceiling-panels.jpg', category: 'Acoustic Panels', categoryId: 'acoustic-panels' },
  { src: '/gallery/night-clubs/vip-lounge-living-wall.jpg', category: 'Night Clubs', categoryId: 'night-clubs' },
  { src: '/gallery/commercial-spaces/conference-room-coffered-ceiling.jpg', category: 'Commercial Spaces', categoryId: 'commercial-spaces' },
  { src: '/gallery/night-clubs/led-ceiling-system.jpg', category: 'Night Clubs', categoryId: 'night-clubs' },
  { src: '/gallery/restaurants/fine-dining-acoustic-panels.jpg', category: 'Restaurants', categoryId: 'restaurants' },
  { src: '/gallery/acoustic-panels/geometric-ceiling-design.jpg', category: 'Acoustic Panels', categoryId: 'acoustic-panels' },
  { src: '/gallery/night-clubs/custom-dj-booth.jpg', category: 'Night Clubs', categoryId: 'night-clubs' },
  { src: '/gallery/commercial-spaces/wooden-slat-living-wall.jpg', category: 'Commercial Spaces', categoryId: 'commercial-spaces' },
  { src: '/gallery/schools-worship/church-sanctuary-pipe-organ-acoustics.jpg', category: 'Schools & Worship', categoryId: 'schools-worship' },
  { src: '/gallery/industrial-machinery/generator-acoustic-enclosure-system.jpg', category: 'Industrial', categoryId: 'industrial-machinery' },
  { src: '/gallery/night-clubs/chain-curtain-led-installation.jpg', category: 'Night Clubs', categoryId: 'night-clubs' },
  { src: '/gallery/restaurants/lounge-acoustic-treatment.jpg', category: 'Restaurants', categoryId: 'restaurants' },
  { src: '/gallery/tech-av/funktion-one-amplifier-rack.jpg', category: 'Tech & AV', categoryId: 'tech-av' },
  { src: '/gallery/acoustic-panels/suspended-ceiling-panels.jpg', category: 'Acoustic Panels', categoryId: 'acoustic-panels' },
  { src: '/gallery/night-clubs/contemporary-club-acoustic-design.jpg', category: 'Night Clubs', categoryId: 'night-clubs' },
  { src: '/gallery/commercial-spaces/marble-wall-office-lounge.jpg', category: 'Commercial Spaces', categoryId: 'commercial-spaces' },
  { src: '/gallery/fun-projects/euphoria-communication-truck-display.jpg', category: 'Fun Projects', categoryId: 'fun-projects' },
  { src: '/gallery/schools-worship/church-complete-acoustic-installation.jpg', category: 'Schools & Worship', categoryId: 'schools-worship' },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === 'all'
    ? previewImages
    : previewImages.filter(img => img.categoryId === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex(i => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of acoustic and interior installations across industries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-gray-900'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            All Projects
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? 'bg-blue-600 text-gray-900'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, index) => (
            <div
              key={img.src}
              className="break-inside-avoid group relative cursor-pointer rounded-2xl overflow-hidden bg-white mb-4"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={titleFromFilename(img.src.split('/').pop() || '')}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gray-100/0 group-hover:bg-gray-100/50 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-8 h-8 text-gray-900 mb-2" />
                <span className="text-gray-900 text-xs font-medium px-2 py-1 bg-blue-600 rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Browse all photos by category</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <Link
                key={cat.id}
                href={`/gallery/${cat.id}`}
                className="px-5 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-gray-900 rounded-xl text-sm font-medium transition-all duration-200"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-gray-100/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-gray-900 hover:text-gray-600 z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 hover:text-blue-400 z-10 bg-gray-100/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 hover:text-blue-400 z-10 bg-gray-100/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={titleFromFilename(filtered[lightboxIndex].src.split('/').pop() || '')}
              className="max-h-[80vh] max-w-full object-contain rounded-xl"
            />
            <div className="text-center mt-3">
              <span className="text-gray-900 font-medium">
                {titleFromFilename(filtered[lightboxIndex].src.split('/').pop() || '')}
              </span>
              <span className="text-gray-500 text-sm ml-3">
                {filtered[lightboxIndex].category}
              </span>
              <span className="text-gray-500 text-sm ml-3">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
