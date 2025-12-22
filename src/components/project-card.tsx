import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight } from "lucide-react";

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
      <Card
        ref={ref}
        className="bg-[#f7f7f7] border-0 w-full max-w-4xl hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden rounded-2xl p-0"
        {...props}
      >
        <div className="flex flex-col md:flex-row gap-0 h-full">
          <div className="w-full md:w-80 h-48 md:h-auto shrink-0">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white/30 text-6xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
            <CardHeader className="p-0 pb-2">
              <CardTitle className="text-base sm:text-lg text-zinc-900 font-semibold leading-tight">
                {project.title}
              </CardTitle>
              <CardDescription className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-1.5 line-clamp-2 sm:line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 pt-3">
              <div className="group/link flex items-center gap-2 text-zinc-900 font-medium text-xs sm:text-sm transition-all">
                Ver mais sobre
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
