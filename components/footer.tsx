const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-8 px-4 bg-muted/20 dark:bg-muted/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Nahurira Clintonie. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/NahuriraClintonie" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/clinton-nahurira/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="mailto:nahuriraclinton256@gmail.com" className="hover:text-foreground transition-colors">
            Email
          </a>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
        <p>
          <span className="text-secondary font-semibold">"Embrace Challenges, Drive Innovation."</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
