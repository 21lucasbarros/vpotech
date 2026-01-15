import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title:
    "VPO Tech | Portfólio - Desenvolvimento Web, Sites, Sistemas e Soluções Tecnológicas",
  description:
    "Portfólio da VPO Tech: especialistas em desenvolvimento web, criação de sites, sistemas sob medida, landing pages, e-commerce e soluções digitais inovadoras. Transforme sua ideia em resultados com tecnologia, design e performance. Atendemos empresas de todo o Brasil.",
  keywords: [
    "desenvolvimento web",
    "sites profissionais",
    "sistemas sob medida",
    "landing pages",
    "e-commerce",
    "soluções digitais",
    "portfólio tech",
    "agência de tecnologia",
    "VPO Tech",
    "criação de sites",
    "empresa de tecnologia",
    "inovação digital",
    "Next.js",
    "React",
    "tecnologia em Santos",
    "desenvolvimento de software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
