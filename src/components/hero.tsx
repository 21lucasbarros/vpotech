"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import {
  Send,
  ChevronDown,
  CheckCircle2,
  Briefcase,
  Award,
} from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect, useRef } from "react";

function Counter({
  value,
  suffix = "",
  speed = "normal",
}: {
  value: number;
  suffix?: string;
  speed?: "fast" | "normal";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: speed === "fast" ? 40 : 80,
    stiffness: speed === "fast" ? 40 : 20,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      // delay para sincronizar com a animação do card
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    {
      value: 4,
      suffix: "",
      label: "Projetos Entregues",
      icon: Briefcase,
      speed: "fast" as const,
    },
    {
      value: 100,
      suffix: "%",
      label: "Aprovação dos Clientes",
      icon: CheckCircle2,
      speed: "normal" as const,
    },
    {
      value: 3,
      suffix: "+",
      label: "Anos de Experiência",
      icon: Award,
      speed: "fast" as const,
    },
  ];

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

      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-bl from-blue-500/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-linear-to-tr from-blue-600/5 via-transparent to-transparent" />

      <div className="absolute top-1/4 right-0 w-96 h-px bg-linear-to-l from-blue-400/20 to-transparent" />
      <div className="absolute top-1/3 right-20 w-64 h-px bg-linear-to-l from-blue-300/15 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-80 h-px bg-linear-to-r from-blue-400/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#1a1a1a] to-transparent z-10"></div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-40 max-w-5xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 leading-tight tracking-tight text-[#f7f7f7] animate-in fade-in slide-in-from-bottom-4 duration-700">
          Soluções digitais com{" "}
          <span className="font-playfair italic bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            precisão
          </span>{" "}
          e{" "}
          <span className="font-playfair italic bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            propósito
          </span>
        </h1>

        <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-0">
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
            className="sm:ml-3 font-medium text-blue-400"
            repeat={Infinity}
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-[#f7f7f7]/60 max-w-2xl mb-6 leading-relaxed font-light">
          Criamos sites, sistemas e produtos digitais sob medida, pensados para
          funcionar bem hoje e crescer junto com o seu negócio. Unimos
          estratégia, design e tecnologia para transformar ideias em soluções
          claras, eficientes e confiáveis.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-blue-600 hover:bg-blue-500 group w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="flex items-center justify-center gap-2"
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
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </a>
        </Button>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
              className="bg-[#f7f7f7]/5 border border-[#f7f7f7]/10 rounded-lg p-4 sm:p-6 hover:border-[#f7f7f7]/20 transition-colors duration-300"
            >
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400/80 mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-semibold text-[#f7f7f7] mb-1 flex items-baseline gap-1">
                <Counter value={stat.value} speed={stat.speed} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-[#f7f7f7]/50 text-xs sm:text-sm font-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => {
          document
            .querySelector("#projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[#f7f7f7]/40 text-[10px] sm:text-xs font-light tracking-wider uppercase">
          Role para explorar
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#f7f7f7]/40" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
