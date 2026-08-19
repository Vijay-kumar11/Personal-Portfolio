function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <h3>Vijay Kumar</h3>

          <p>
            Full Stack Developer passionate about building
            clean, responsive and practical web applications.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>


        {/* Connect */}
        <div className="footer-connect">

          <h4>Connect</h4>

          <a href="kvijaykumar0822@gmail.com">
            Email
          </a>

          <a
            href="https://github.com/Vijay-kumar11"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vijaykumar-k123"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Vijay Kumar. All rights reserved.
        </p>

        <p>
          Built with React
        </p>

      </div>

    </footer>
  );
}

export default Footer;