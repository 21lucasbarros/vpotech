"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(8, "Mínimo de 8 caracteres"),
});

type FormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/lucasweacked21@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 4000);
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 px-2 sm:py-14 sm:px-4 md:py-16 md:px-8 lg:px-20 2xl:px-48 2xl:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12"
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f7f7] mb-3 md:mb-4 tracking-tight overflow-visible">
          Vamos construir o{" "}
          <span className="font-playfair italic bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent pl-1">
            futuro
          </span>{" "}
          juntos!
        </h2>
        <p className="text-sm xs:text-base sm:text-lg text-[#f7f7f7]/60 max-w-xs xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto font-light">
          Compartilhe sua visão conosco. Transformamos ideias em soluções
          digitais que fazem a diferença.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-lg xs:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <p className="text-xs text-[#f7f7f7]/40 uppercase tracking-widest mb-2">
              Email
            </p>
            <a
              href="mailto:devlucasbarros@gmail.com"
              className="text-lg md:text-xl text-[#f7f7f7] hover:text-blue-400 transition-colors"
            >
              devlucasbarros@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs text-[#f7f7f7]/40 uppercase tracking-widest mb-2">
              Localização
            </p>
            <p className="text-lg md:text-xl text-[#f7f7f7]/70">
              Santos, São Paulo
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-5"
          >
            <div>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                className={`h-12 bg-transparent border-[#f7f7f7]/20 rounded-lg text-[#f7f7f7] placeholder:text-[#f7f7f7]/40 focus-visible:border-blue-500 focus-visible:ring-0 ${
                  errors.name ? "border-red-500/50" : ""
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                id="email"
                type="email"
                placeholder="Seu email"
                className={`h-12 bg-transparent border-[#f7f7f7]/20 rounded-lg text-[#f7f7f7] placeholder:text-[#f7f7f7]/40 focus-visible:border-blue-500 focus-visible:ring-0 ${
                  errors.email ? "border-red-500/50" : ""
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Textarea
                id="message"
                placeholder="Sua mensagem"
                className={`min-h-35 bg-transparent border-[#f7f7f7]/20 rounded-lg text-[#f7f7f7] placeholder:text-[#f7f7f7]/40 focus-visible:border-blue-500 focus-visible:ring-0 resize-none ${
                  errors.message ? "border-red-500/50" : ""
                }`}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1.5">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Enviando...</span>
              ) : isSubmitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enviado!</span>
                </>
              ) : (
                <>
                  <span>Enviar</span>
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
                    <Send className="w-4 h-4" />
                  </motion.div>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
