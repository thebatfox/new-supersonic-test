"use client";

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

function titleFromFilename(filename: string): string {
  return filename
    .replace(/\.jpg$|\.png$|\.jpeg$|\.webp$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function tagsFromFilename(filename: string): string[] {
  const f = filename.toLowerCase();
  const tags: string[] = [];
  if (/soundproof|barrier|enclosure|isolation|seal|noise/.test(f)) tags.push('Soundproofing');
  if (/acoustic|panel|baffle|absorption|treatment|fabric|mineral|wool/.test(f)) tags.push('Acoustic Treatment');
  if (/ceiling|suspended|baffles|overhead|framework/.test(f)) tags.push('Ceiling Systems');
  if (/dj.booth|dj-booth|booth/.test(f)) tags.push('DJ Booths');
  if (/led|lighting|neon|light/.test(f)) tags.push('Lighting & AV');
  if (/install|installation|work|progress|team|technician|cutting|welding|fabricat/.test(f)) tags.push('Installation');
  if (/generator|enclosure|industrial|machinery|equipment/.test(f)) tags.push('Industrial');
  if (/living.wall|living-wall|plant|green/.test(f)) tags.push('Living Walls');
  if (/carpentry|joinery|wooden|timber|slat|wood/.test(f)) tags.push('Carpentry');
  if (/vip|lounge|premium|luxury|elite/.test(f)) tags.push('VIP Spaces');
  if (tags.length === 0) tags.push('Acoustic Treatment');
  return tags;
}

interface GalleryPageProps {
  title: string;
  description: string;
  folder: string;
  images?: string[];
}

export default function GalleryHoldingPage({ title, description, folder, images: staticImages }: GalleryPageProps) {
  const [images, setImages] = useState<string[]>(staticImages || []);
  const [loading, setLoading] = useState(!staticImages);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    if (staticImages) return;
    fetch(`/gallery/${folder}/images.json`)
      .then(r => r.json())
      .then(data => { setImages(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [folder, staticImages]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    images.forEach(img => tagsFromFilename(img).forEach(t => tagSet.add(t)));
    return ['All', ...Array.from(tagSet).sort()];
  }, [images]);

  const filtered = useMemo(() => {
    if (activeTag === 'All') return images;
    return images.filter(img => tagsFromFilename(img).includes(activeTag));
  }, [images, activeTag]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightboxIndex(i => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-white border-b border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/#gallery" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-5 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-500 mb-1">{description}</p>
          {!loading && <p className="text-gray-400 text-sm">{filtered.length} of {images.length} photos</p>}
        </div>
      </div>

      {!loading && allTags.length > 2 && (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
                {tag !== 'All' && (
                  <span className={`ml-1.5 text-xs ${activeTag === tag ? 'text-blue-100' : 'text-gray-400'}`}>
                    {images.filter(img => tagsFromFilename(img).includes(tag)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10">
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading gallery...</div>
        ) : filtered.length === 0 ? (
          <div className="flex justify-center py-24 px-4">
          <div className="relative bg-[#1A3D8F] text-white rounded-2xl px-10 py-12 max-w-lg w-full text-center shadow-2xl border-4 border-[#00B4D8] overflow-hidden">
            {/* Stripes */}
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 10px, transparent 10px, transparent 20px)"}} />
            {/* Icon */}
            <div className="text-6xl mb-5">🚧</div>
            {/* Heading */}
            <h3 className="text-2xl font-bold tracking-wide mb-3 text-[#00B4D8] uppercase">Under Construction</h3>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              We are busy updating this gallery with fresh project photos.<br/>
              Please be patient — it will be worth the wait.
            </p>
            {/* Divider */}
            <div className="w-16 h-1 bg-[#00B4D8] rounded mx-auto mb-5" />
            {/* Sign off */}
            <p className="text-white/50 text-sm">— The Supersonic Customs Team</p>
          </div>
        </div>
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {filtered.map((filename, index) => {
              const tags = tagsFromFilename(filename);
              return (
                <div
                  key={filename}
                  className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden bg-white mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={`/gallery/${folder}/${filename}`}
                    alt={titleFromFilename(filename)}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-1">
                      {tags.map(tag => (
                        <span key={tag} className="text-xs bg-blue-500/80 text-white px-2 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white z-10 transition-colors" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <img
              src={`/gallery/${folder}/${filtered[lightboxIndex]}`}
              alt={titleFromFilename(filtered[lightboxIndex])}
              className="max-h-[80vh] max-w-full object-contain rounded-xl"
            />
            <div className="flex items-center justify-between mt-3 px-1">
              <div className="flex flex-wrap gap-1">
                {tagsFromFilename(filtered[lightboxIndex]).map(tag => (
                  <span key={tag} className="text-xs bg-blue-500/80 text-white px-2 py-0.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-white/50 text-sm">{lightboxIndex + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
