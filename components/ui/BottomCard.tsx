"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function BottomCard() {
  const [scrollY, setScrollY] = useState(0);
  const [showFooter, setShowFooter] = useState(false);

  // Scroll threshold: footer should start showing after scrolling 50% down the page
  const scrollThreshold = 0.7; // 50% scroll down before footer appears

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);

      // Trigger footer appearance when user has scrolled past the threshold
      if (scrollPercentage > scrollThreshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position (smooth fade out)
  const opacity = showFooter ? Math.min(1, 1 - scrollY / 1000) : 0;

  return (
    <AnimatePresence>
      {showFooter && (
        <motion.footer
          key="bottom-footer"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-screen w-full rounded-t-3xl backdrop-blur-xl bg-[rgba(43,55,80,0.2)] shadow-2xl z-50 flex items-center justify-center px-10 py-20"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg">
                Feel free to reach out via email, LinkedIn, or through the contact form. I’d love to hear from you!
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-medium">
                © {new Date().getFullYear()} Ahmed Mitwalli
              </p>
              <p className="text-md mt-2">All rights reserved.</p>
            </div>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
