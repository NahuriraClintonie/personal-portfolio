const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Software Engineer with 3+ years of experience in Full Stack Web Development, AI & Machine Learning, DevOps, and Cloud Technologies. I'm passionate about building scalable applications, AI-driven systems, and modern, user-centric web experiences.
          </p>
          
          <p>
            I hold a Bachelor of Science in Software Engineering from Makerere University's College of Computing and Information Sciences, where I developed strong foundations in software design, data structures, and artificial intelligence. My academic journey, combined with practical industry experience, has shaped my approach to solving complex technical challenges.
          </p>

          <p>
            At Pahappa Company Limited, I progressed from an intern to a Junior Developer, demonstrating strong capabilities in web and mobile development, agile methodologies, and team leadership. My current role at AIBOS Uganda as both a Web & AI Engineer and Project Management Officer allows me to lead AI-driven projects, mentor junior developers, and drive innovation in intelligent systems.
          </p>

          <p>
            Beyond code, I'm an enthusiast of technology blogging, where I share insights and tutorials helping others learn. I'm committed to continuous learning, exploring emerging technologies like cloud platforms and DevOps practices, and leveraging technology to solve real-world problems.
          </p>

          <div className="pt-6 space-y-3">
            <p className="text-base">
              <span className="font-semibold text-foreground">Motto:</span> "Embrace Challenges, Drive Innovation."
            </p>
            <p className="text-base">
              <span className="font-semibold text-foreground">Interests:</span> Cloud Technologies, DevOps, Machine Learning, IoT, and Healthcare Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
