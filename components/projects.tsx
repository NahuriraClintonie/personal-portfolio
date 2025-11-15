const Projects = () => {
  const projects = [
    {
      name: 'Automated Invoicing System',
      description: 'Full-stack web application for automated invoice generation and management',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL']
    },
    {
      name: 'Pahappa Custom CRM',
      description: 'Enterprise Customer Relationship Management system for business operations',
      tech: ['Java', 'Spring', 'React', 'PostgreSQL']
    },
    {
      name: 'Mildi Web Application',
      description: 'Modern web platform with full-stack capabilities and responsive design',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      name: 'Inventory Management System',
      description: 'Comprehensive inventory tracking and management solution',
      tech: ['Java', 'MySQL', 'JSF']
    },
    {
      name: 'Beauty Salon Management System',
      description: 'Complete salon operations management with booking and billing features',
      tech: ['Full Stack', 'Database Design', 'User Management']
    },
    {
      name: 'Kimwanyi Sacco Management System',
      description: 'Financial management system for savings and credit cooperative',
      tech: ['Full Stack Development', 'Database', 'Security']
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect p-6 md:p-8 rounded-2xl hover:bg-card/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl border border-border/20"
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{project.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs md:text-sm px-3 py-1 bg-secondary/20 text-secondary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
