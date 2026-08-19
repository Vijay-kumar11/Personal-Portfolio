function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-container">

        <div className="section-heading">
          <p>MY PROJECTS</p>
          <h2>Things I've Built</h2>
        </div>


        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">

            <div className="project-header">
              <span className="project-number">01</span>

              <span className="project-type">
                Full Stack
              </span>
            </div>


            <div className="project-content">

              <h3>
                Employee Management Dashboard
              </h3>

              <p>
                A full-stack employee management application that
                allows users to securely log in and manage employee
                records through a responsive dashboard.
              </p>


              <h4>Key Features</h4>

              <ul>
                <li>
                  User Login and Registration
                </li>

                <li>
                  Add, Edit and Delete Employees
                </li>

                <li>
                  Search and Department Filtering
                </li>

                <li>
                  Employee Statistics Dashboard
                </li>

                <li>
                  Responsive User Interface
                </li>
              </ul>


              <div className="project-tech">

                <span>React</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MySQL</span>

              </div>


              <div className="project-buttons">

                <a
                  href="#"
                  className="project-btn primary-project-btn"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="project-btn secondary-project-btn"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <div className="project-header">
              <span className="project-number">02</span>

              <span className="project-type">
                Machine Learning
              </span>
            </div>


            <div className="project-content">

              <div className="project-date">
                Apr 2025
              </div>

              <h3>
                Mushroom Classification System
              </h3>

              <p>
                An ensemble machine learning system designed to
                classify mushroom toxicity using image and tabular
                data, with model performance benchmarked against
                a CNN approach.
              </p>


              <h4>Key Features</h4>

              <ul>
                <li>
                  Improved classification accuracy from 87% to 96.2%
                </li>

                <li>
                  Processed 8,000+ images and tabular attributes
                </li>

                <li>
                  Implemented Random Forest, SVM and XGBoost models
                </li>

                <li>
                  Benchmarked ensemble models against CNN
                </li>

                <li>
                  Evaluated using confusion matrix, ROC curves and
                  feature importance analysis
                </li>

                <li>
                  Precision and recall exceeded 92% across all classes
                </li>
              </ul>


              <div className="project-tech">

                <span>Python</span>
                <span>scikit-learn</span>
                <span>XGBoost</span>
                <span>CNN</span>

              </div>


              <div className="project-buttons">

                <a
                  href="#"
                  className="project-btn primary-project-btn"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="project-btn secondary-project-btn"
                >
                  Details
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;