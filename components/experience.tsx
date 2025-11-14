const Experience = () => {
  const experiences = [
    {
      title: 'Project Management Officer & Web & AI Engineer',
      company: 'AIBOS Uganda (Affiliate to AIBOS Japan)',
      period: 'Jan 2025 - Present',
      responsibilities: [
        'Lead and manage AI-driven web application projects under the Project Management Office',
        'Oversee project teams, guide development strategies, and mentor engineers',
        'Develop intelligent, AI-powered web applications and contribute to ML research',
        'Collaborate across teams to design efficient systems and ensure scalable solutions',
      ]
    },
    {
      title: 'Junior Fullstack Developer',
      company: 'Pahappa Company Limited',
      period: 'May 2024 - Sept 2024',
      responsibilities: [
        'Developed and maintained full-stack web applications using Java, Spring, JSF, Hibernate, MySQL, and React',
        'Collaborated with cross-functional teams to define, design, and ship new features',
        'Mentored and trained interns, guiding best practices and professional development',
        'Participated in code reviews ensuring code integrity and organization',
      ]
    },
    {
      title: 'Probationary Junior Developer',
      company: 'Pahappa Company Limited',
      period: 'Aug 2023 - May 2024',
      responsibilities: [
        'Assisted in developing web applications focusing on client-side and server-side logic',
        'Tested and deployed applications ensuring high performance and responsiveness',
        'Integrated user-facing elements developed by front-end developers with server-side logic',
        'Contributed to the training of new interns',
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Pahappa Company Limited',
      period: 'Jun 2023 - Aug 2023',
      responsibilities: [
        'Gained practical experience in web development on real-world projects',
        'Learned and applied industry-standard practices under senior developer supervision',
        'Supported the development team in building and maintaining web applications',
        'Engaged in project meetings and contributed to troubleshooting tasks',
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-effect p-6 md:p-8 rounded-lg hover:bg-card/80 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-secondary font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-muted-foreground flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
