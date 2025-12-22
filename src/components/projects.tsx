"use client";

import { Dialog, DialogTrigger } from "./ui/dialog";
import { motion } from "motion/react";
import ProjectCard from "./project-card";
import ProjectDialog from "./project-dialog";
import { projects } from "../data/projects";

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
                <ProjectCard project={project} />
              </DialogTrigger>
              <ProjectDialog project={project} />
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
