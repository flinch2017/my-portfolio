interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Fruityger",
    description:
      "A nostalgic Frutiger Aero-inspired social networking platform built with React, JavaScript, and Supabase.",
    technologies: ["React", "JavaScript", "Node.js", "Supabase", "Render"],
    image: "/fruityger1.png",
    github: "https://github.com/flinch2017/fruityger",
    demo: "https://fruityger.onrender.com",
  },
  {
    title: "Fruityger Mobile",
    description:
      "A React Native version of Fruityger featuring messaging, tapes, notifications, and posts.",
    technologies: ["React Native", "Expo", "TypeScript"],
    image: "/fruitygerapp1.jpg",
    github: "https://github.com/flinch2017/FruitygerMobile",
  },
  {
    title: "Barangay Profiling System (BPS)",
    description:
      "A profiling and certificate management system with resident records and officials.",
    technologies: ["React", "Node.js", "Supabase", "Cloudflare R2"],
    image: "/bps1.png",
    github: "https://github.com/flinch2017/barangay-profiling-system",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
            style={{
              backgroundImage: `
      linear-gradient(
        to top,
        rgba(0, 20, 40, .85) 0%,
        rgba(0, 20, 40, .45) 45%,
        rgba(0, 20, 40, .15) 100%
      ),
      url(${project.image})
    `,
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github}>GitHub</a>

              {project.demo && <a href={project.demo}>Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
