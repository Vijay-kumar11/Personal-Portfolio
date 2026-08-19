function Home() {
  return (
    <section className="home" id="home">

      <div className="home-container">

        <div className="home-content">

          <p className="home-greeting">
            Hello, I'm
          </p>

          <h1>
            Vijay Kumar
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="home-description">
            Computer Science graduate passionate about building
            modern, responsive and user-friendly web applications.
            I enjoy turning ideas into practical software solutions
            using React, JavaScript, Node.js and MySQL.
          </p>

          <div className="home-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
  href="/resume.pdf"
  className="secondary-btn"
  target="_blank"
  rel="noreferrer"
>
  Download Resume
</a>

          </div>

          <div className="home-socials">

            <a
              href="https://github.com/Vijay-kumar11"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/vijaykumar-k123"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>


          </div>

        </div>

        <div className="home-image">

          <div className="profile-circle">

            <img
              src="/Vijay.png"
              alt="Vijay Kumar"
              className="profile-photo"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;