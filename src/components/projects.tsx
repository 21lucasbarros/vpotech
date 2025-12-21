import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { motion } from "motion/react";
import { ArrowRight, Info } from "lucide-react";

const projects = [
  {
    title: "Bricks E-Commerce",
    description:
      "E-commerce completo desenvolvido para cliente com pagamentos Stripe, painel administrativo e gerenciamento de produtos.",
    note: "Projeto pessoal desenvolvido por um dos integrantes da VPO Tech em parceria com seu primo e um amigo, não sendo um projeto oficial da VPO Tech.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Stripe",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Cloudinary",
      "Nodemailer",
    ],
    image: "/imagem/projetos/bricks.png",
  },
  {
    title: "Validy - Sistema de Certificados Digitais",
    description:
      "Aplicação desktop para escritórios contábeis gerenciarem certificados digitais A1 e A3 com alertas de vencimento, gerenciamento seguro de senhas e sincronização em nuvem.",
    technologies: [
      "Tauri",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Zod",
    ],
    image: "/imagem/projetos/validy.png",
  },
  {
    title: "Validy API",
    description:
      "API REST para gerenciamento de certificados digitais A1 e A3 com CRUD completo, validações, múltiplos e-mails de notificação e ordenação automática por vencimento.",
    technologies: [
      "Elysia",
      "TypeScript",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    image: "/imagem/projetos/api.png",
  },
  {
    title: "R&A Comunicação Visual",
    description:
      "Landing page apresentando serviços de comunicação visual. Design limpo, responsivo e navegação intuitiva.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    image: "/imagem/projetos/ra-comunicacao.png",
  },
];

export default function Projects() {
  return (
    <section id="services" className="min-h-screen py-16 px-4 sm:px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-[#f7f7f7] mb-4 tracking-tight uppercase border-b-2 border-[#f7f7f7]/20 pb-3 inline-block">
          Projetos
        </h2>
        <p className="text-lg text-[#f7f7f7]/60 mb-12 max-w-2xl">
          Soluções que desenvolvemos para transformar desafios em resultados
          concretos.
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-[#f7f7f7] border-0 w-full max-w-4xl hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden rounded-2xl p-0">
                  <div className="flex flex-row gap-0 h-full">
                    <div className="w-80 shrink-0">
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

                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <CardHeader className="p-0 pb-2">
                        <CardTitle className="text-lg text-zinc-900 font-semibold leading-tight">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-zinc-600 text-sm leading-relaxed mt-1.5 line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 pt-3">
                        <div className="group/link flex items-center gap-2 text-zinc-900 font-medium text-sm transition-all">
                          Ver mais sobre
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed pt-2">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                {"note" in project && (
                  <Alert className="border-blue-200 bg-blue-50 text-blue-900">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-sm leading-relaxed">
                      {project.note}
                    </AlertDescription>
                  </Alert>
                )}
                {project.image && (
                  <div className="w-full rounded-lg overflow-hidden">
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
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
