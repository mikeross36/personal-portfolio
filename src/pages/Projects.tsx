import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/data";

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Recent <span className="text-secondary text-glow">Projects</span>
          </h2>
          <p className="text-gray-400">
            Selected works that define my journey.
          </p>
        </div>
        <Button variant="outline" className="mt-6 md:mt-0">
          View All GitHub
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-secondary/30 transition-all duration-300"
          >
            <div className="relative overflow-hidden h-72">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                <button className="p-2 bg-background/80 backdrop-blur rounded-full hover:text-secondary">
                  <ExternalLink size={18} />
                </button>
                <button className="p-2 bg-background/80 backdrop-blur rounded-full hover:text-secondary">
                  <Github size={18} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
