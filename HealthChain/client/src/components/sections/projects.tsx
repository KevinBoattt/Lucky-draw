import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";
import ProjectModal from "@/components/ui/project-modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects/featured'],
  });

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <section id="projects" className="glass-panel p-8 mb-8 reveal">
        <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
          <i className="fas fa-code"></i>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-panel rounded-xl p-6 border border-white/5 animate-pulse">
              <div className="h-6 bg-muted/20 rounded mb-3"></div>
              <div className="h-16 bg-muted/20 rounded mb-4"></div>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3].map(j => (
                  <div key={j} className="h-6 w-16 bg-muted/20 rounded"></div>
                ))}
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-24 bg-muted/20 rounded"></div>
                <div className="h-8 w-16 bg-muted/20 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="glass-panel p-8 mb-8 reveal">
      <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
        <i className="fas fa-code"></i>
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="bg-panel rounded-xl p-6 border border-white/5 transition-all duration-300 hover:bg-panel-hover hover:-translate-y-1 cursor-pointer relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-custom to-accent2 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <h3 className="font-semibold text-lg mb-3">{project.title}</h3>
            
            <p className="text-muted-custom mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/5 text-accent-custom px-2 py-1 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => openProjectModal(project)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-custom to-accent2 text-slate-900 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <i className="fas fa-eye"></i>
                View Details
              </button>
              {project.githubUrl && project.githubUrl !== '#' && (
                <button 
                  onClick={() => window.open(project.githubUrl!, '_blank')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white/10 text-accent-custom rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-accent-custom"
                >
                  <i className="fab fa-github"></i>
                  Code
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
