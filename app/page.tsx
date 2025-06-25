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






const navItems = [
  { name: "Home", url: "#home", icon: "home" },
  { name: "About", url: "#about", icon: "user" },
  { name: "Projects", url: "#projects", icon: "briefcase" },
  { name: "Resume", url: "#resume", icon: "file-text" },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Home")

  const sectionIds = ["home", "about", "projects", "resume"]

const observerRef = useRef<IntersectionObserver | null>(null)
const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

useEffect(() => {
  const handleVisibleSection = (id: string) => {
    setActiveTab(id.charAt(0).toUpperCase() + id.slice(1))
    if (window.location.hash !== `#${id}`) {
      history.replaceState(null, "", `#${id}`)
    }
  }

  const callback: IntersectionObserverCallback = (entries) => {
    let visibleEntry: IntersectionObserverEntry | null = null

    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (
          !visibleEntry ||
          entry.intersectionRatio > visibleEntry.intersectionRatio
        ) {
          visibleEntry = entry
        }
      }
    }

    if (visibleEntry) {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        requestAnimationFrame(() =>
          handleVisibleSection(visibleEntry!.target.id)
        )
      }, 50)
    }
  }

  observerRef.current = new IntersectionObserver(callback, {
    threshold: 0.6,
  })

  const sectionElements = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[]

  sectionElements.forEach((section) => observerRef.current!.observe(section))

  return () => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }
  }
}, [])

  return (
    <main>
      <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
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


