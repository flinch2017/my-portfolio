import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "React Native", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 90 },
  { name: "Supabase", level: 80 },
  { name: "Git & GitHub", level: 90 },
  { name: "C++", level: 75 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "PostgreSQL", level: 80 },
  { name: "HTML & CSS", level: 95 },
  { name: "AWS EC2", level: 80 },
  { name: "AWS S3", level: 80 },
  { name: "Cloudflare R2", level: 95 },
  { name: "Cloudflare Domain", level: 95 },
  { name: "Cloudflare Turnstile", level: 95 },
  { name: "Google ReCAPTCHA", level: 95 },
];

function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: isVisible ? `${skill.level}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
