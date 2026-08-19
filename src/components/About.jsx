function About() {
  return (
    <section className="about" id="about">

      <div className="section-container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Get to Know Me</h2>
        </div>


        <div className="about-content">

          {/* Left Side */}
          <div className="about-text">

            <h3>
              I'm Vijay Kumar, a Full Stack Developer.
            </h3>

            <p>
              I am a Computer Science graduate with a strong interest
              in software development and web technologies. I enjoy
              building responsive, user-friendly and practical
              applications.
            </p>

            <p>
              I have experience working with technologies such as
              HTML, CSS, JavaScript, React, Node.js, Express and MySQL.
              I enjoy learning new technologies and applying them to
              real-world projects.
            </p>

            <p>
              My goal is to begin my career as a software developer,
              contribute to meaningful projects and continuously
              improve my technical and problem-solving skills.
            </p>

          </div>


          {/* Right Side */}
          <div className="about-info">

            <div className="info-card">
              <span>🎓</span>

              <div>
                <h4>Education</h4>
                <p>B.Tech - Computer Science Engineering</p>
              </div>
            </div>


            <div className="info-card">
              <span>💻</span>

              <div>
                <h4>Focus</h4>
                <p>Full Stack Web Development</p>
              </div>
            </div>


            <div className="info-card">
              <span>⚡</span>

              <div>
                <h4>Interests</h4>
                <p>Web Applications & Software Development</p>
              </div>
            </div>


            <div className="info-card">
              <span>📍</span>

              <div>
                <h4>Availability</h4>
                <p>Open to Software Development Opportunities</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;