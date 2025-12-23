"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(8, "Mensagem deve ter no mínimo 8 caracteres"),
});

type FormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 4000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f7f7] mb-3 sm:mb-4 tracking-tight uppercase border-b-2 border-[#f7f7f7]/20 pb-2 sm:pb-3 inline-block">
          Contato
        </h2>
        <p className="text-base sm:text-lg text-[#f7f7f7]/60 mb-8 sm:mb-12 max-w-2xl">
          Vamos transformar sua ideia em realidade digital. Entre em contato e
          conte-nos sobre seu projeto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-48 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <p className="text-[#f7f7f7]/70 leading-relaxed text-lg">
              Tem um projeto em mente? Estamos prontos para transformá-lo em
              realidade.
            </p>
          </div>

          <div className="space-y-8">
            <motion.a
              href="mailto:contato@vpotech.com"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              className="group block"
            >
              <p className="text-xs text-[#f7f7f7]/40 mb-2 uppercase tracking-widest">
                Email
              </p>
              <p className="text-xl text-[#f7f7f7] group-hover:text-blue-400 transition-colors">
                contato@vpotech.com
              </p>
            </motion.a>

            <div>
              <p className="text-xs text-[#f7f7f7]/40 mb-2 uppercase tracking-widest">
                Localização
              </p>
              <p className="text-xl text-[#f7f7f7]/70">Santos, São Paulo</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-[#f7f7f7]/70 mb-2"
              >
                Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                className={`bg-[#1a1a1a] border-[#f7f7f7]/20 text-[#f7f7f7] placeholder:text-[#f7f7f7]/30 focus-visible:border-blue-400 focus-visible:ring-1 focus-visible:ring-blue-400/50 transition-all ${
                  errors.name ? "border-red-400/50" : ""
                }`}
                {...register("name")}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-2"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              viewport={{ once: true }}
            >
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-[#f7f7f7]/70 mb-2"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className={`bg-[#1a1a1a] border-[#f7f7f7]/20 text-[#f7f7f7] placeholder:text-[#f7f7f7]/30 focus-visible:border-blue-400 focus-visible:ring-1 focus-visible:ring-blue-400/50 transition-all ${
                  errors.email ? "border-red-400/50" : ""
                }`}
                {...register("email")}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-2"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Label
                htmlFor="message"
                className="block text-sm font-medium text-[#f7f7f7]/70 mb-2"
              >
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Descreva seu projeto e como podemos ajudar..."
                className={`min-h-35 bg-[#1a1a1a] border-[#f7f7f7]/20 text-[#f7f7f7] placeholder:text-[#f7f7f7]/30 focus-visible:border-blue-400 focus-visible:ring-1 focus-visible:ring-blue-400/50 transition-all resize-none ${
                  errors.message ? "border-red-400/50" : ""
                }`}
                {...register("message")}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-2"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              viewport={{ once: true }}
              className="pt-2 flex justify-center"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="group w-full sm:w-auto px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span>Enviando</span>
                    <motion.div className="flex gap-1">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 bg-white rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay,
                          }}
                        />
                      ))}
                    </motion.div>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
                    <span>Mensagem Enviada!</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <motion.div className="group-hover:translate-x-0.75 group-hover:-translate-y-0.75 transition-transform duration-200">
                      <Send className="w-4 h-4" strokeWidth={2} />
                    </motion.div>
                  </>
                )}
              </motion.button>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-blue-400 mt-4"
                >
                  Recebemos sua mensagem! Entraremos em contato em breve.
                </motion.p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
