'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from "@/components/theme-toggle"


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold gradient-text">
            NC
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

            {/* Theme Toggle */}
            <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        </div>


        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
