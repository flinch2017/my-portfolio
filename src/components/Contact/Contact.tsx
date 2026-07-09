import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Let's Connect</h2>

      <p className="contact-description">
        I'm always open to discussing new opportunities, collaborations, or
        simply connecting with fellow developers.
      </p>

      <div className="contact-grid">
        <a href="mailto:youremail@example.com" className="contact-card">
          <FaEnvelope className="contact-icon" />

          <div>
            <h3>Email</h3>
            <p>iriscontado@gmail.com</p>
          </div>
        </a>

        <a
          href="https://github.com/flinch2017"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />

          <div>
            <h3>GitHub</h3>
            <p>github.com/flinch2017</p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/iris-contado-2b3ba9375"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />

          <div>
            <h3>LinkedIn</h3>
            <p>Let's connect professionally</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;
