import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { Info } from "lucide-react";
import type { Project } from "../types/project";

interface ProjectDialogProps {
  project: Project;
}

export default function ProjectDialog({ project }: ProjectDialogProps) {
  return (
    <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-base leading-relaxed pt-2">
          {project.fullDescription}
        </DialogDescription>
      </DialogHeader>

      {project.note && (
        <Alert className="border-blue-200 bg-blue-50 text-blue-900">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-sm leading-relaxed">
            {project.note}
          </AlertDescription>
        </Alert>
      )}

      {project.image && (
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

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
    </DialogContent>
  );
}
