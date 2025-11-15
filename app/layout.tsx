import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nahurira Clintonie - Software Engineer',
  description: 'Full Stack Developer | AI & ML Enthusiast | DevOps Practitioner. Building scalable applications and intelligent systems.',
  generator: 'Nahurira Clintonie',
  icons: {
    icon: [
      {
        url: 'https://api.iconify.design/ph/user-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://api.iconify.design/ph/user-bold.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://api.iconify.design/ph/code-bold.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://api.iconify.design/ph/code.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
