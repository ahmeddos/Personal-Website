// app/page.tsx
import * as React from "react";

import { Hero } from "@/components/ui/animated-hero";
import { NavBarObj } from "@/Objects/Navbar";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { DefaultToggle } from "@/Objects/ModeToggle";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Gallery4Demo } from "@/Objects/projectGallery";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { DemoVariant1 } from "@/Objects/hoverButton";
import { GlowingEffectDemo } from "@/Objects/resume";
import { BottomCard } from "@/components/ui/BottomCard";
import { HeroScrollDemo } from "@/Objects/bottomfooter";
import { ScrollVelocityDemo } from "@/Objects/scrollimages";




export default function HomePage() {
  return (
    <main>
      <NavBarObj /> 
      <DefaultToggle />
  <section id="home" className="min-h-screen relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none z-0">
    <SplashCursor />
  </div>
  <div className="relative z-100 pointer-events-auto">
    <Hero />
  </div>
</section>
      <section id="about" className="min-h-screen">
      <div className="w-full">
      <Feature />
      </div>
      </section>
      <section id="projects" className="min-h-screen"> <Gallery4Demo /></section>
      
      <ScrollVelocityDemo/>
      <section id="resume" className="min-h-screen">
        <GlowingEffectDemo />
        <HeroScrollDemo />
      </section>
      
    </main>
  )
}

