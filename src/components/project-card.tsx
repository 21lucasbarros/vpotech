import * as React from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  note?: string;
  technologies: string[];
  image: string;
  projectUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
}

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="group flex items-center gap-6 py-6 border-b border-[#f7f7f7]/10 cursor-pointer max-w-3xl"
        {...props}
      >
        <div className="relative w-96 h-56 rounded-xl overflow-hidden shrink-0">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center">
              <span className="text-[#f7f7f7]/30 text-2xl font-semibold">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-[#f7f7f7] group-hover:text-blue-400 transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-[#f7f7f7]/40 mb-3">
            {project.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs text-[#f7f7f7]/30 group-hover:text-blue-400 transition-colors">
            Ver detalhes
            <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
