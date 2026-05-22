"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkshopSection from '@/components/WorkshopSection';
import GallerySection from "@/components/GallerySection";
import QuestionnaireSection from "@/components/QuestionnaireSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySchema from "@/components/gallery-schema";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkshopSection />
      <GallerySection />
      <QuestionnaireSection />
      <ContactSection />
      <Footer />
      <GallerySchema projects={projects} />
    </div>
  );
}
