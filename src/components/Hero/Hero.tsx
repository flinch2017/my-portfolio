import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="hero">
      <h1 className="hero-title">
        Hi, I'm <span className="hero-highlight">Iris Contado</span>
      </h1>

      <TypeAnimation
        sequence={[
          "Programmer",
          1800,
          "Computer Engineer",
          1800,
          "Project Manager",
          1800,
          "AWS Skilled",
          1800,
        ]}
        wrapper="p"
        speed={40}
        repeat={Infinity}
        className="hero-typing"
      />
    </section>
  );
}

export default Hero;
