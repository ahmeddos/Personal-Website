import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarObj() {
    const navItems = [
      { name: "Home", url: "#home", icon: "home" },
      { name: "About", url: "#about", icon: "user" },
      { name: "Projects", url: "#projects", icon: "briefcase" },
      { name: "Resume", url: "#resume", icon: "file-text" },
    ]
    
  
    return <NavBar items={navItems} />
  }