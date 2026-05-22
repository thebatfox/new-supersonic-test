"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

function titleFromFilename(filename: string): string {
  return filename
    .replace(/\.jpg$|\.png$|\.jpeg$|\.webp$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

interface GalleryPageProps {
  title: string;
  description: string;
  images: string[]; // just the filenames, e.g. 'halo-nightclub-main-floor.jpg'
  folder: string;   // e.g. 'night-clubs'
}

export default function GalleryHoldingPage({ title, description, images, folder }: GalleryPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightboxIndex(i => (i !== null ? (i + 1) % images.length : null));

  return (
    <div className="min-h-screen bg-[hsl(220,15%,11%)]">
      {/* Header */}
      <div className="bg-[hsl(220,15%,17%)] border-b border-[hsl(220,15%,22%)] py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/#gallery" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-500 text-sm mt-1">{images.length} photos</p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((filename, index) => (
            <div
              key={filename}
              className="break-inside-avoid group relative cursor-pointer rounded-2xl overflow-hidden bg-[hsl(220,15%,17%)] mb-4"
              onClick={() => openLightbox(index)}
            >
              <img
                src={`/gallery/${folder}/${filename}`}
                alt={titleFromFilename(filename)}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[hsl(220,15%,11%)]/0 group-hover:bg-[hsl(220,15%,11%)]/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium truncate">{titleFromFilename(filename)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[hsl(220,15%,11%)]/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-10" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 z-10 bg-[hsl(220,15%,11%)]/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 z-10 bg-[hsl(220,15%,11%)]/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <img
              src={`/gallery/${folder}/${images[lightboxIndex]}`}
              alt={titleFromFilename(images[lightboxIndex])}
              className="max-h-[80vh] max-w-full object-contain rounded-xl"
            />
            <div className="text-center mt-3">
              <span className="text-white font-medium">{titleFromFilename(images[lightboxIndex])}</span>
              <span className="text-gray-500 text-sm ml-3">{lightboxIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
