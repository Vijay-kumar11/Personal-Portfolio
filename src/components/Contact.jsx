import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_5dq6pqe",
        "template_ahadcgx",
        form.current,
        "WH5Rv1YEd4vlV2e8i"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>Have a project or opportunity?</h3>

            <p>
              I'm currently open to software development opportunities,
              internships, and projects where I can contribute my
              technical skills and continue growing as a developer.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <span>Email</span>

                  <a href="mailto:kvijaykumar0822@gmail.com">
                    kvijaykumar0822@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <span>Phone</span>

                  <a href="tel:+919177870533">
                    +91 9177870533
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <span>Location</span>

                  <p>
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

            </div>

            <div className="contact-socials">

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

          {/* Contact Form */}
          <div className="contact-form-container">

            <form
              ref={form}
              className="contact-form"
              onSubmit={sendEmail}
            >

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">
                  Subject
                </label>

                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
              </button>

              {status && (
                <p className="contact-status">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;