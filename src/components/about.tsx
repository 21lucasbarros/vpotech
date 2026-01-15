"use client";

import { motion } from "motion/react";
import { Sparkles, Target, Heart } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Nossa História",
    description:
      "A VPO nasce da união de dois estudantes de Tecnologia da Informação que se conhecem desde a infância. Amigos desde os quatro anos de idade, crescemos compartilhando curiosidade, criatividade e uma afinidade natural por tecnologia.",
  },
  {
    icon: Target,
    title: "Nossa Trajetória",
    description:
      "Essa trajetória conjunta evoluiu para uma visão estratégica clara: transformar tecnologia em vantagem competitiva real. Unimos competências técnicas, sensibilidade estética e pensamento de negócio.",
  },
  {
    icon: Heart,
    title: "Nossa Filosofia",
    description:
      "Acreditamos que um projeto só pode ser considerado concluído quando atinge o equilíbrio ideal entre excelência técnica e experiência intuitiva. Não entregamos apenas sites; entregamos ferramentas de crescimento.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-8 lg:px-20 2xl:px-48 3xl:px-72 4xl:px-96 bg-[#1a1a1a]"
    >
      <div className="max-w-6xl 2xl:max-w-screen-2xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-blue-400 mb-4 font-medium">
            Quem somos
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            <span className="text-[#f7f7f7]">Nascemos para </span>
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              criar
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#f7f7f7]/60 max-w-2xl mx-auto leading-relaxed">
            Tecnologia com propósito. Design com intenção. Resultados com
            impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full flex flex-col"
            >
              <div className="relative flex flex-col flex-1">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f7f7f7] flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <item.icon
                      className="w-5 h-5 text-zinc-900 group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#f7f7f7] mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-base text-[#f7f7f7]/50 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex-1" />
                <div className="mt-6 h-px bg-[#f7f7f7]/10 group-hover:bg-blue-500/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 text-center"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#f7f7f7] tracking-tight max-w-4xl mx-auto leading-snug">
            Cada projeto é tratado como uma peça de portfólio — um compromisso
            inegociável com o{" "}
            <span className="text-blue-500">mais alto padrão</span> de
            qualidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
