import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nahurira Clintonie - Software Engineer',
  description: 'Full Stack Developer | AI & ML Enthusiast | DevOps Practitioner. Building scalable applications and intelligent systems.',
  generator: 'Nahurira Clintonie',
  icons: {
    icon: [
      // Light mode icon
      {
        url: 'https://api.iconify.design/ph/user-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      // Dark mode icon
      {
        url: 'https://api.iconify.design/ph/user-bold.svg',
        media: '(prefers-color-scheme: dark)',
      },
      // Main favicon (SVG)
      {
        url: 'https://api.iconify.design/ph/code-bold.svg',
        type: 'image/svg+xml',
      },
    ],
    // Apple touch icon
    apple: 'https://api.iconify.design/ph/code.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
