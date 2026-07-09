import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-logo">Iris Contado</h3>

      <p className="footer-description">
        The only constant in this world is change.
      </p>

      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/flinch2017"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/iris-contado-2b3ba9375"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="footer-copy">
        Made with <FaHeart className="heart" /> using React & TypeScript
      </p>

      <p className="footer-copy">
        © {new Date().getFullYear()} Iris Contado. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
