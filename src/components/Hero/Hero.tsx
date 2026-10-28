import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <span className="hero-peek-x" aria-hidden="true">×</span>
      <div className="hero-inner">
        <h1 className="hero-title">
          Iris Contado<span>.</span>
        </h1>
        <p className="hero-summary">Software Developer</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
