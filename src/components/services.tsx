"use client";

import { motion } from "motion/react";
import {
  Globe,
  ShoppingCart,
  Settings,
  Smartphone,
  Palette,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão, otimizadas para transformar visitantes em clientes.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Lojas virtuais completas, seguras e prontas para escalar suas vendas.",
  },
  {
    icon: Settings,
    title: "Sistemas Web",
    description:
      "Aplicações robustas e escaláveis que automatizam e otimizam processos.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos com experiência fluida em qualquer dispositivo.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas e visualmente impactantes que encantam usuários.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Suporte contínuo e atualizações para manter seu produto sempre no ar.",
  },
];

export default function Services() {
  return (
    <section
      id="services-section"
      className="py-12 sm:py-16 px-4 sm:px-8 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f7f7] mb-3 sm:mb-4 tracking-tight uppercase border-b-2 border-[#f7f7f7]/20 pb-2 sm:pb-3 inline-block">
          Serviços
        </h2>
        <p className="text-base sm:text-lg text-[#f7f7f7]/60 mb-8 sm:mb-12 max-w-2xl">
          Soluções sob medida para cada desafio do seu negócio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl border border-[#f7f7f7]/10 bg-[#f7f7f7]/2 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
          >
            <div className="mb-4 p-3 rounded-xl bg-blue-500/10 w-fit">
              <service.icon
                className="w-6 h-6 text-blue-400"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-lg font-semibold text-[#f7f7f7] mb-2 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-[#f7f7f7]/60 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
