import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // Enables class-based dark mode (required for next-themes)
  content: [
    "./app/**/*.{ts,tsx}",       // App directory (Next.js 13+)
    "./pages/**/*.{ts,tsx}",     // Optional: legacy pages folder
    "./components/**/*.{ts,tsx}",// Your UI components
    "./src/**/*.{ts,tsx}",       // Optional: if you're using /src layout
  ],
  theme: {
    extend: {
      colors: {
        // Customize or extend the theme here
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Needed for framer-motion animations in shadcn/ui
  ],
}
export default config
