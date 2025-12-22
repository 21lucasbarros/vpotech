"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f7f7f7_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f7_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#1a1a1a] to-transparent z-10"></div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-40 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-semibold mb-4 leading-tight tracking-tight text-[#f7f7f7] animate-in fade-in slide-in-from-bottom-4 duration-700">
          Soluções Digitais com{" "}
          <span className="bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            Precisão
          </span>{" "}
          e{" "}
          <span className="bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            Propósito
          </span>
        </h1>

        <div className="text-xl md:text-2xl mb-6 h-16 flex items-center">
          <span className="text-[#f7f7f7]/70 font-light">Atuamos com</span>
          <TypeAnimation
            sequence={[
              "engenharia de software",
              2000,
              "arquitetura digital",
              2000,
              "inovação orientada a resultados",
              2000,
              "transformação tecnológica",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="ml-3 font-medium text-blue-400"
            repeat={Infinity}
          />
        </div>

        <p className="text-base md:text-lg text-[#f7f7f7]/60 max-w-2xl mb-6 leading-relaxed font-light">
          Criamos sites, sistemas e produtos digitais sob medida, pensados para
          funcionar bem hoje e crescer junto com o seu negócio. Unimos
          estratégia, design e tecnologia para transformar ideias em soluções
          claras, eficientes e confiáveis.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-blue-600 hover:bg-blue-500 group"
        >
          <a
            href="#contact"
            className="flex items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Começar um Projeto
            <motion.div
              animate={
                isHovered
                  ? {
                      x: [0, 4, 6],
                      y: [0, -4, -6],
                      rotate: [0, 5, 8],
                    }
                  : { x: 0, y: 0, rotate: 0 }
              }
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
          </a>
        </Button>
      </div>
    </motion.section>
  );
}
