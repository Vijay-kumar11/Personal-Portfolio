function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-container">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <div className="skill-icon">🎨</div>

            <h3>Frontend</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>


          {/* Backend */}
          <div className="skill-card">
            <div className="skill-icon">⚙️</div>

            <h3>Backend</h3>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST API</span>
            </div>
          </div>


          {/* Database */}
          <div className="skill-card">
            <div className="skill-icon">🗄️</div>

            <h3>Database</h3>

            <div className="skill-list">
              <span>MySQL</span>
              <span>SQL</span>
            </div>
          </div>


          {/* Programming */}
          <div className="skill-card">
            <div className="skill-icon">💻</div>

            <h3>Programming</h3>

            <div className="skill-list">
              <span>C</span>
              <span>C++</span>
              <span>Java</span>
              <span>Python</span>
            </div>
          </div>


          {/* Tools */}
          <div className="skill-card">
            <div className="skill-icon">🛠️</div>

            <h3>Tools</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>npm</span>
            </div>
          </div>


          {/* Other */}
          <div className="skill-card">
            <div className="skill-icon">🚀</div>

            <h3>Other</h3>

            <div className="skill-list">
              <span>REST APIs</span>
              <span>Responsive Design</span>
              <span>Problem Solving</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;