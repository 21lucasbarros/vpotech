"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqItems = [
  {
    question: "Por que escolher a VPO em vez de apenas usar IA?",
    answer:
      "A IA hoje faz muita coisa, rápido e até de graça. Mas tecnologia sozinha não resolve problemas reais. Nosso trabalho vai além de gerar código ou layouts: entendemos o seu negócio, objetivos e público. Usamos IA como ferramenta, não como atalho — as decisões são humanas, garantindo soluções únicas, confiáveis e com responsabilidade pelo resultado.",
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Landing pages são entregues em 1-2 semanas, enquanto sistemas mais robustos podem levar de 4 a 12 semanas. Sempre alinhamos expectativas antes de iniciar.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Trabalhamos em 4 etapas: Descoberta (entendemos seu negócio e objetivos), Design (criamos protótipos e validamos), Desenvolvimento (codificamos com as melhores práticas) e Entrega (lançamos e acompanhamos). Você participa de cada fase.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Oferecemos planos de manutenção mensal que incluem atualizações de segurança, pequenos ajustes e suporte técnico. Também estamos disponíveis para evoluções e novas funcionalidades.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Utilizamos tecnologias modernas como React, Next.js, TypeScript, Node.js, e bancos de dados como PostgreSQL e MongoDB. Escolhemos a stack ideal para cada projeto, priorizando performance e escalabilidade.",
  },
  {
    question: "Como é feito o orçamento?",
    answer:
      "Após uma conversa inicial para entender suas necessidades, elaboramos uma proposta detalhada com escopo, prazo e investimento. Trabalhamos com preço fechado, sem surpresas no final.",
  },
  {
    question: "Vocês trabalham com clientes de outras cidades?",
    answer:
      "Absolutamente. Atendemos clientes de todo o Brasil e exterior. Nossa comunicação é 100% remota, utilizando ferramentas como Google Meet, Slack e Notion para manter tudo organizado e transparente.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-12 sm:py-16 px-4 sm:px-8 lg:px-20 2xl:px-48 3xl:px-72 4xl:px-96"
    >
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-20 2xl:gap-32 3xl:gap-40 4xl:gap-56 max-w-screen-2xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:max-w-sm mb-8 lg:mb-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f7f7f7] mb-3 sm:mb-4 tracking-tight uppercase border-b-2 border-[#f7f7f7]/20 pb-2 sm:pb-3 inline-block">
            Dúvidas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-[#f7f7f7]/60 max-w-md">
            Respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 max-w-2xl"
        >
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#f7f7f7]/10"
              >
                <AccordionTrigger className="text-[#f7f7f7] hover:text-[#f7f7f7] hover:no-underline text-left text-base font-medium py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#f7f7f7]/60 text-sm leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
