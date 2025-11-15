const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-card/70 via-card/60 to-card/50 dark:from-card/25 dark:via-card/20 dark:to-card/15 rounded-xl shadow-lg"
      style={{ backgroundColor: 'var(--card)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 gradient-text">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
          <p>
            I'm a Software Engineer with 3+ years of experience in Full Stack Web Development, AI & Machine Learning, DevOps, and Cloud Technologies. I build scalable, intelligent systems with user-centric design.
          </p>
          <p>
            Bachelor of Science in Software Engineering from Makerere University, combining strong foundations in software design, data structures, and AI with practical industry experience.
          </p>
          <p>
            At Pahappa Company Limited, I grew from intern to Junior Developer. Currently at AIBOS Uganda as Web & AI Engineer and Project Management Officer, leading AI projects and mentoring teams.
          </p>
          <p>
            Tech blogging and continuous learning are passions of mine — exploring cloud platforms, DevOps, and emerging AI technologies.
          </p>

          <div className="pt-6 space-y-3">
            <p className="text-base">
              <span className="font-semibold text-secondary">Motto:</span> "Embrace Challenges, Drive Innovation."
            </p>
            <p className="text-base">
              <span className="font-semibold text-secondary">Interests:</span> Cloud Technologies, DevOps, Machine Learning, IoT, Healthcare Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About