import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card border border-white/10 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-accent-custom mb-2">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {project.imageUrl && (
            <img 
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl border border-white/10"
            />
          )}
          
          <div>
            <h3 className="text-lg font-semibold text-blue-100 mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-100 mb-3">Project Details</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {project.content}
              </p>
            </div>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-blue-100 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-accent-custom/20 to-accent2/20 border border-accent-custom/30 text-accent-custom px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4 border-t border-white/10">
            {project.projectUrl && project.projectUrl !== '#' && (
              <Button
                onClick={() => window.open(project.projectUrl!, '_blank')}
                className="bg-gradient-to-r from-accent-custom to-accent2 text-slate-900 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                View Live Project
              </Button>
            )}
            
            {project.githubUrl && project.githubUrl !== '#' && (
              <Button
                onClick={() => window.open(project.githubUrl!, '_blank')}
                variant="outline"
                className="border-white/20 text-accent-custom hover:bg-white/5"
              >
                <i className="fab fa-github mr-2"></i>
                View Code
              </Button>
            )}
            
            <Button
              onClick={onClose}
              variant="ghost"
              className="text-muted-foreground hover:text-blue-100"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
