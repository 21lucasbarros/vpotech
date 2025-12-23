"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Nossa História",
    description:
      "A VPO nasce da união de dois estudantes de Tecnologia da Informação que se conhecem desde a infância. Amigos desde os quatro anos de idade, crescemos compartilhando curiosidade, criatividade e uma afinidade natural por tecnologia, o que com o tempo se transformou em propósito profissional.",
  },
  {
    title: "Nossa Trajetória",
    description:
      "Essa trajetória conjunta evoluiu para uma visão estratégica clara: transformar tecnologia em vantagem competitiva real. Unimos competências técnicas, sensibilidade estética e pensamento de negócio para criar soluções que transcendem o código e geram impacto concreto.",
  },
  {
    title: "Nossa Filosofia",
    description:
      "Acreditamos que um projeto só pode ser considerado concluído quando atinge o equilíbrio ideal entre excelência técnica e experiência intuitiva. Não entregamos apenas sites ou softwares; entregamos ferramentas de crescimento. Cada landing page, e-commerce ou sistema sob medida é tratado como uma peça de portfólio, o que nos impõe um compromisso inegociável com o mais alto padrão de qualidade, precisão e cuidado em cada detalhe.",
  },
];

export default function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <h1 className="mb-6 text-6xl font-bold text-center font-playfair italic bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent">
        Sobre nós
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="max-w-6xl self-center"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 pr-4 basis-full max-h-full"
            >
              <Card className="bg-[#f7f7f7] border-0 hover:bg-white transition-all duration-300 cursor-grab overflow-hidden rounded-3xl h-full pt-0">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="text-center">
                    <h2 className="text-2xl text-zinc-900 font-semibold leading-tight mb-3">
                      {item.title}
                    </h2>
                    <p className=" text-base text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
