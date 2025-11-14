const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Flask', 'Django']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'NoSQL', 'Firebase']
    },
    {
      category: 'AI & ML',
      skills: ['Machine Learning', 'AI Agents', 'Chatbots', 'Data Analysis', 'Model Fine-tuning']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'Kubernetes', 'CI/CD']
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'Linux', 'Shell Scripting', 'WordPress', 'Agile Methodologies']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-foreground mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-secondary/10 border border-secondary/30 text-foreground rounded-lg text-sm font-medium hover:bg-secondary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 glass-effect rounded-lg">
          <h3 className="text-lg font-bold text-foreground mb-4">Additional Competencies</h3>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">Leadership & Soft Skills</p>
              <ul className="space-y-1 text-sm">
                <li>• Team Collaboration & Building</li>
                <li>• Problem-Solving</li>
                <li>• Project Management</li>
                <li>• Mentoring & Knowledge Sharing</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Other</p>
              <ul className="space-y-1 text-sm">
                <li>• Technical Blogging & Writing</li>
                <li>• Continuous Learning</li>
                <li>• Adaptability</li>
                <li>• Communication Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
