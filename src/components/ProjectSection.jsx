import { ArrowRight, Github } from "lucide-react";



const projects = [
  {
    id: 1,
    title: "School Management System",
    description: "A full-stack Spring Boot web app with secure role-based access, CRUD operations, and optimized data handling to streamline school administration",
    image: "/projects/Project1.png",
    tags: ["Spring/Spring Boot", "Thymeleaf", "JavaScript", "PostgreSQL", "Sprig-Security", "Spring-Data-JPA"],
    githubUrl: "https://github.com/itsNandish/Java-Spring-SpringBoot",
  },
  {
    id: 2,
    title: "E-commerce Platform (Amazon-clone)",
    description:
      "A front-end Amazon-inspired e-commerce website built using HTML, CSS, and JavaScript, featuring product listings, cart functionality, and responsive design",
    image: "/projects/Project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/itsNandish/Amazon_proj",
  },
  {
    id: 3,
    title: "Surviellance Robot",
    description:
      "A Raspberry Pi–powered robot with face recognition, weapon detection, and night vision for real-time intelligent surveillance and security.",
    image: "/projects/Project3.png",
    tags: ["Raspberry pi", "Pyhton",  "Night-vision 360 degree camera", "Deep learning", " Bluetooth"],
    githubUrl: "https://github.com/itsNandish/",
  },
];


export const ProjectSection = () => {
  return (
  <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. For more, visit my GitHub
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col  h-[500px]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                  <div className="mt-auto flex justify-start items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/itsNandish"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
  </section>
  );
};
