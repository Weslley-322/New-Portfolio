import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WESLLEY EUGÊNIO // IDENTITY_UNIT",
  description: "Portfólio de desenvolvimento front-end. Acessando protocolos de interfaces escaláveis.",
  icons: {
    icon: "/icon.png", 
  },
};

// AJUSTE AQUI: Adicionamos a tipagem do React para o children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black selection:bg-cyber-red selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}