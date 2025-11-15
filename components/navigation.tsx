'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/theme-toggle'

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-border/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-extrabold gradient-text hover:scale-105 transition-transform">
            NC
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-card/30 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 mt-2' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col px-4 py-2 space-y-2 bg-background/80 rounded-lg shadow-md">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary/20 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
