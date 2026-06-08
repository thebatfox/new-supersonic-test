"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

function titleFromFilename(filename: string): string {
  return filename
    .replace(/\.(jpg|png|jpeg|webp)$/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function tagsFromFilename(filename: string): string[] {
  const f = filename.toLowerCase();
  const tags: string[] = [];
  if (/soundproof|barrier|enclosure|isolation|noise/.test(f)) tags.push("Soundproofing");
  if (/acoustic|panel|baffle|absorption|treatment|fabric/.test(f)) tags.push("Acoustic Treatment");
  if (/ceiling|suspended|baffles|overhead/.test(f)) tags.push("Ceiling Systems");
  if (/dj.booth|dj-booth|booth/.test(f)) tags.push("DJ Booths");
  if (/led|lighting|neon/.test(f)) tags.push("Lighting & AV");
  if (/install|installation|work|progress|team|fabricat/.test(f)) tags.push("Installation");
  if (/generator|industrial|machinery|equipment/.test(f)) tags.push("Industrial");
  if (/living.wall|living-wall|plant|green/.test(f)) tags.push("Living Walls");
  if (/wooden|timber|slat|carpentry/.test(f)) tags.push("Carpentry");
  if (/vip|premium|luxury|elite/.test(f)) tags.push("VIP Spaces");
  if (tags.length === 0) tags.push("Acoustic Treatment");
  return tags;
}

interface Props {
  title: string;
  description: string;
  folder: string;
  images: string[];
}

export default function GalleryHoldingPage({ title, description, folder, images }: Props) {
  const [activeTag, setActiveTag] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [popupDismissed, setPopupDismissed] = useState(false);

  const isEmpty = images.length === 0;

  const allTags = useMemo(() => {
    const set = new Set<string>();
    images.forEach((img) => tagsFromFilename(img).forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [images]);

  const filtered = useMemo(() => {
    if (activeTag === "All") return images;
    return images.filter((img) => tagsFromFilename(img).includes(activeTag));
  }, [images, activeTag]);

  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % filtered.length : null
    );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#gallery"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-5 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-500 mb-1">{description}</p>
          <p className="text-gray-400 text-sm">{filtered.length} of {images.length} photos</p>
        </div>
      </div>

      {/* Tag filters */}
      {allTags.length > 2 && (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTag === tag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tag}
                {tag !== "All" && (
                  <span className={`ml-1.5 text-xs ${activeTag === tag ? "text-blue-100" : "text-gray-400"}`}>
                    {images.filter((img) => tagsFromFilename(img).includes(tag)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {!isEmpty && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {filtered.map((filename, index) => (
              <div
                key={filename}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden bg-white mb-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={`/gallery/${folder}/${filename}`}
                  alt={titleFromFilename(filename)}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-1">
                    {tagsFromFilename(filename).map((tag) => (
                      <span key={tag} className="text-xs bg-blue-500/80 text-white px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white/70 hover:text-white"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/gallery/${folder}/${filtered[lightboxIndex]}`}
              alt={titleFromFilename(filtered[lightboxIndex])}
              className="max-h-[80vh] max-w-full object-contain rounded-xl"
            />
            <div className="flex justify-between items-center mt-3 px-1">
              <div className="flex flex-wrap gap-1">
                {tagsFromFilename(filtered[lightboxIndex]).map((tag) => (
                  <span key={tag} className="text-xs bg-blue-500/80 text-white px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-white/50 text-sm">{lightboxIndex + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}

      {/* Under construction popup - empty galleries only */}
      {isEmpty && !popupDismissed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            className="relative bg-[#1A3D8F] text-white rounded-2xl px-10 py-12 max-w-md w-full text-center shadow-2xl border-4 border-[#00B4D8] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 10px,transparent 10px,transparent 20px)" }}
            />
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold tracking-wide mb-3 text-[#00B4D8] uppercase">
              Gallery Under Construction
            </h3>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              We are busy updating this gallery with fresh project photos.
              <br />
              Please be patient — it will be worth the wait.
            </p>
            <div className="w-16 h-1 bg-[#00B4D8] rounded mx-auto mb-6" />
            <p className="text-white/50 text-sm mb-8">— The Supersonic Customs Team</p>
            <Link
              href="/"
              className="inline-block bg-[#00B4D8] hover:bg-[#0090b0] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Got it
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
