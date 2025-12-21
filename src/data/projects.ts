import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Bricks E-Commerce",
    shortDescription:
      "E-commerce completo desenvolvido para cliente com pagamentos Stripe, painel administrativo e gerenciamento de produtos.",
    fullDescription:
      "Plataforma completa de e-commerce desenvolvida com as mais modernas tecnologias do mercado. O projeto oferece uma experiência de compra fluida e segura para os clientes, com integração completa ao Stripe para processamento de pagamentos internacionais. O sistema inclui gestão completa de catálogo de produtos com categorias e subcategorias, controle inteligente de estoque com alertas automáticos, processamento seguro de pagamentos com múltiplos métodos, sistema robusto de envio de e-mails automatizados para notificações de pedidos e atualizações de status, e upload otimizado de imagens via Cloudinary com redimensionamento automático. O painel administrativo oferece dashboard completo com métricas de vendas em tempo real, gráficos de performance, gestão avançada de produtos e categorias, controle total de pedidos e seus status, relatórios detalhados de vendas e análise de comportamento do cliente.",
    note: "Projeto pessoal desenvolvido por um dos integrantes da VPO Tech em parceria com seu primo e um amigo, não sendo um projeto oficial da VPO Tech.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Stripe",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Cloudinary",
      "Nodemailer",
    ],
    image: "/imagem/projetos/bricks.png",
  },
  {
    title: "Validy - Sistema de Certificados Digitais",
    shortDescription:
      "Aplicação desktop para escritórios contábeis gerenciarem certificados digitais A1 e A3 com alertas de vencimento, gerenciamento seguro de senhas e sincronização em nuvem.",
    fullDescription:
      "Sistema desktop completo e profissional para gestão de certificados digitais A1 e A3, especialmente desenvolvido para atender as necessidades de escritórios contábeis. A aplicação oferece interface intuitiva e moderna para cadastro rápido de certificados com preenchimento inteligente, armazenamento criptografado de senhas com algoritmos de segurança de nível militar, notificações automáticas e personalizáveis de vencimento com antecedência configurável (7, 15, 30 dias), sincronização automática entre múltiplos dispositivos via nuvem segura, histórico completo de renovações com timeline visual, relatórios detalhados e personalizáveis em PDF e Excel, busca avançada com filtros múltiplos, organização por clientes e empresas, e dashboard com visão geral de todos os certificados próximos ao vencimento. Desenvolvido com Tauri para garantir performance nativa de aplicação desktop, segurança máxima dos dados sensíveis, e consumo mínimo de memória comparado a alternativas Electron.",
    technologies: [
      "Tauri",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Zod",
    ],
    image: "/imagem/projetos/validy.png",
  },
  {
    title: "Validy API",
    shortDescription:
      "API REST para gerenciamento de certificados digitais A1 e A3 com CRUD completo, validações, múltiplos e-mails de notificação e ordenação automática por vencimento.",
    fullDescription:
      "Backend robusto e escalável desenvolvido para suportar todas as operações do sistema Validy. Desenvolvido com Elysia, framework ultra-rápido construído especificamente para Bun runtime, que fornece performance até 3x superior comparado a frameworks tradicionais Node.js. A API implementa endpoints RESTful seguros e bem documentados para todas as operações CRUD de certificados, clientes e empresas, validação robusta e detalhada de dados com Zod garantindo integridade em todas as requisições, persistência confiável com Prisma ORM e PostgreSQL como banco de dados, sistema completo de notificações por e-mail para múltiplos destinatários com templates customizáveis, autenticação JWT e autorização baseada em roles para diferentes níveis de acesso, ordenação inteligente de certificados por proximidade de vencimento com algoritmos otimizados, backup automático e incremental de dados críticos com versionamento, logs detalhados de auditoria para rastreamento de todas as operações, rate limiting e proteção contra ataques DDoS, e API documentation completa com Swagger/OpenAPI.",
    technologies: [
      "Elysia",
      "TypeScript",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    image: "/imagem/projetos/api.png",
  },
  {
    title: "R&A Comunicação Visual",
    shortDescription:
      "Landing page apresentando serviços de comunicação visual. Design limpo, responsivo e navegação intuitiva.",
    fullDescription:
      "Landing page moderna e profissional desenvolvida para empresa de comunicação visual, focada em conversão e experiência do usuário. O projeto apresenta design minimalista e elegante que destaca os serviços oferecidos, com seções estrategicamente posicionadas para apresentação detalhada dos serviços de comunicação visual (adesivos, banners, fachadas, etc.), portfolio interativo com galeria de trabalhos realizados em alta qualidade, depoimentos de clientes com sistema de avaliações e feedback visual, formulário de contato integrado com validação em tempo real e envio de e-mail automático. A aplicação é totalmente responsiva com design que se adapta perfeitamente a todos os dispositivos (mobile-first approach), implementa animações suaves e sofisticadas via Framer Motion para melhor experiência e engagement, possui validação completa de formulários com React Hook Form e Zod garantindo dados corretos, otimização SEO completa para melhor posicionamento em buscadores, performance excepcional com lazy loading de imagens e code splitting, e acessibilidade seguindo padrões WCAG para inclusão de todos os usuários.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    image: "/imagem/projetos/ra-comunicacao.png",
  },
];
