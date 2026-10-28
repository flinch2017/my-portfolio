interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}
const projects: Project[] = [
  {
    title: "Pointerx — AI Student Reviewer Assistant",
    description:
      "An AI-powered student reviewer assistant that serves as a study companion chatbot and converts PDFs into learning materials.",
    technologies: ["React Native", "TypeScript"],
    image: "/pointerx1.jpg",
    github: "https://github.com/flinch2017/Pointerx",
  },
  {
    title: "Fruityger — Social Media Platform",
    description:
      "A social networking platform built with React, JavaScript, and Supabase.",
    technologies: ["React", "JavaScript", "Node.js", "Supabase"],
    image: "/fruityger1.png",
    github: "https://github.com/flinch2017/fruityger",
    demo: "https://fruityger.onrender.com",
  },
  {
    title: "Fruityger Mobile — Social Platform",
    description:
      "A React Native version of Fruityger featuring messaging, notifications, posts, and an engaging mobile experience.",
    technologies: ["React Native", "Expo", "TypeScript"],
    image: "/fruitygerapp1.jpg",
    github: "https://github.com/flinch2017/FruitygerMobile",
  },
  {
    title: "Barangay Profiling System",
    description:
      "A resident profiling and certificate management system for community records and local officials.",
    technologies: ["React", "Node.js", "Supabase", "Cloudflare R2"],
    image: "/bps1.png",
    github: "https://github.com/flinch2017/barangay-profiling-system",
  },
  {
    title: "Store Management System",
    description:
      "A web-based system for managing store records and daily operations.",
    technologies: ["React", "Supabase", "Node.js"],
    image: "/sms.png",
    github: "https://github.com/flinch2017/store-web-app.git",
  },
];
function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <h2 className="section-title">A few things I’ve built.</h2>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {project.image ? (
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              ) : (
                <div
                  className="project-image project-placeholder"
                  aria-hidden="true"
                >
                  SMS
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
