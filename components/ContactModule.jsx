"use client";
import Github from "lucide-react/dist/esm/icons/github";
import Mail from "lucide-react/dist/esm/icons/mail";
import MessageSquare from "lucide-react/dist/esm/icons/message-square";

export default function ContactModule() {
  const links = [
    { 
      label: "GITHUB_UPLINK", 
      url: "https://github.com/Weslley-322", 
      icon: <Github size={24} />,
      detail: "Repositórios e Código"
    },
    { 
      label: "ENCRYPTED_MAIL", 
      url: "mailto:weslleyeugenio03@gmail.com", 
      icon: <Mail size={24} />,
      detail: "Comunicação Direta"
    },
    { 
      label: "WHATSAPP_COMMS", 
      url: "https://wa.me/5581999277331", 
      icon: <MessageSquare size={24} />,
      detail: "Mensagem Instantânea"
    }
  ];

  return (
    <div className="flex flex-col gap-10 items-center w-full max-w-4xl px-4">
      {/* Grade de Canais de Contato - Agora o foco principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-cyber-yellow/30 bg-black/60 p-8 transition-all hover:border-cyber-yellow hover:translate-y-[-5px] overflow-hidden"
          >
            {/* Efeito de Scanline no Hover */}
            <div className="absolute inset-0 bg-cyber-yellow/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
            
            <div className="text-cyber-yellow mb-6 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
              {link.icon}
            </div>
            
            <h4 className="text-cyber-yellow font-mono text-sm font-bold tracking-widest mb-1 text-center md:text-left">
              {link.label}
            </h4>
            
            <p className="text-white/40 text-[10px] uppercase font-mono text-center md:text-left">
              {link.detail}
            </p>

            {/* Detalhe estético de canto Cyberpunk */}
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyber-yellow opacity-20 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
}