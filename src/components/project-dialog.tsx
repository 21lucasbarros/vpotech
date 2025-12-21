import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { Info, ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

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

interface ProjectDialogProps {
  project: Project;
}

export default function ProjectDialog({ project }: ProjectDialogProps) {
  return (
    <DialogContent className="sm:max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-base leading-relaxed pt-2">
          {project.description}
        </DialogDescription>
      </DialogHeader>

      {project.note && (
        <Alert className="border-red-200 bg-red-50 text-red-900">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-sm leading-relaxed">
            {project.note}
          </AlertDescription>
        </Alert>
      )}

      {project.image && project.videoUrl ? (
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full rounded-lg overflow-hidden border border-zinc-200 bg-black">
                <video
                  src={project.videoUrl}
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      ) : project.image ? (
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : project.videoUrl ? (
        <div className="w-full rounded-lg overflow-hidden border border-zinc-200 bg-black">
          <video
            src={project.videoUrl}
            controls
            className="w-full h-auto"
            preload="metadata"
          >
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      ) : null}

      <div className="space-y-3 pt-4">
        <h3 className="font-semibold text-base text-zinc-900">
          Tecnologias Utilizadas
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs bg-zinc-100 text-zinc-700 rounded-md font-medium border border-zinc-200 hover:bg-zinc-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.projectUrl || project.githubUrl) && (
        <div className="flex flex-wrap gap-3 pt-6 border-t border-zinc-200 mt-2">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ExternalLink className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Ver Projeto</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white rounded-lg hover:bg-zinc-900 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Github className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Repositório</span>
            </a>
          )}
        </div>
      )}
    </DialogContent>
  );
}
