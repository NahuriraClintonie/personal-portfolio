import { Download, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span>Hi, I'm </span>
            <span className="gradient-text">Nahurira Clintonie</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer | AI & ML Enthusiast | DevOps Practitioner
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Building scalable applications, AI-driven systems, and modern, user-centric web experiences
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-accent transition-colors flex items-center gap-2 group"
          >
            Get In Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/cv.pdf"
            className="px-8 py-3 border border-border/50 text-foreground font-semibold rounded-lg hover:bg-card/50 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        <div className="pt-8 flex justify-center gap-6">
          <a
            href="https://github.com/NahuriraClintonie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v-3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-nahurira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.643h3.554v1.364c.429-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.384 3.704 4.362v5.516zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.951.77-1.71 1.952-1.71 1.18 0 1.918.759 1.94 1.71 0 .947-.76 1.705-1.977 1.705zm1.595 11.597H3.635V9.809h3.297v10.643zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
          <a
            href="mailto:nahuriraclinton256@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">Email</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
