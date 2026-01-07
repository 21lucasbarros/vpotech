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
      "Páginas otimizadas para conversão, com design estratégico e performance de alto nível.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Lojas virtuais completas com checkout seguro, gestão de produtos e integração de pagamentos.",
  },
  {
    icon: Settings,
    title: "Sistemas Web",
    description:
      "Aplicações sob medida que automatizam processos e escalam junto com seu negócio.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos com experiência fluida para iOS e Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas e visualmente impactantes, pensadas para encantar usuários.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Suporte contínuo, atualizações de segurança e melhorias para manter tudo funcionando.",
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
        className="mb-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f7f7] mb-3 sm:mb-4 tracking-tight uppercase border-b-2 border-[#f7f7f7]/20 pb-2 sm:pb-3 inline-block">
          Serviços
        </h2>
        <p className="text-base sm:text-lg text-[#f7f7f7]/60 max-w-2xl">
          Soluções sob medida para cada desafio do seu negócio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-5xl">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group flex items-start gap-4 py-4 border-b border-[#f7f7f7]/10"
          >
            <service.icon
              className="w-5 h-5 text-blue-400/70 mt-0.5 group-hover:text-blue-400 transition-colors shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-base font-medium text-[#f7f7f7] mb-1 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#f7f7f7]/50 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
