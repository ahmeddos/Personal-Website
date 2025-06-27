"use client"
// app/page.tsx
import * as React from "react";

import { Hero } from "@/components/ui/animated-hero";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { DefaultToggle } from "@/Objects/ModeToggle";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Gallery4Demo } from "@/Objects/projectGallery";
import { GlowingEffectDemo } from "@/Objects/resume";
import { ScrollVelocityDemo } from "@/Objects/scrollimages";
import { Footer } from "@/components/ui/footer";
import { useState, useEffect, useRef } from "react";
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import GeometricBackground from "@/components/ui/geometric";


const navItems = [
  { name: "Home", url: "#home", icon: "home" },
  { name: "About", url: "#about", icon: "user" },
  { name: "Projects", url: "#projects", icon: "briefcase" },
  { name: "Resume", url: "#resume", icon: "file-text" },
]

export default function HomePage() {

  return (
    <main>
      <div className="absolute inset-0 pointer-events-none z-0">
         <SplashCursor />
        </div>
        
      
      <NavBar items={navItems}/>
      <DefaultToggle />
      
       <section id="home" className="min-h-screen relative overflow-hidden">
  
        
        <div className="relative z-100 pointer-events-auto">
          <Hero />
        </div>
        
      </section>

      <section id="about" className="min-h-screen">
         
        <div className="w-full z-10">
          <Feature />
        </div>
       
      </section>

      <section id="projects" className="min-h-screen">
        <Gallery4Demo />
      </section>

      <ScrollVelocityDemo />

      <section id="resume" className="min-h-screen">
        <GlowingEffectDemo />
        <Footer />
      </section>
      
    </main>
  )
}


