"use client";
const links = [
  {
    label: "GITHUB_UPLINK",
    icon: "⌥",
    url: "https://github.com/Weslley-322",
  },
  {
    label: "ENCRYPTED_MAIL",
    icon: "✉",
    url: "mailto:weslleyeugenio03@gmail.com",
  },
  {
    label: "WHATSAPP_COMMS",
    icon: "◈",
    url: "https://wa.me/5581999277331",
  },
];
export default function ContactModule() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyber-purple/4"
            style={{
              width: 600, height: 600,
              animation: `ring-expand 4s ease-out infinite`,
              animationDelay: `${i * 1.3}s`,
            }}
          />
        ))}
      </div>
      <p className="font-orbitron text-[9px] tracking-[0.45em] text-cyber-purple/80 mb-4 uppercase">
        / / PROTOCOL_UPLINK
      </p>
      <h2 className="font-orbitron font-black text-white neon-text-purple mb-3
                     text-[clamp(2rem,3.5vw,3.8rem)] leading-none">
        <span className="glitch" data-text="UPLINK_EXTERNO">UPLINK_EXTERNO</span>
      </h2>
      <p className="text-cyber-text-dim text-[12px] tracking-[0.08em] mb-12">
        Iniciando ponte de comunicação externa...
      </p>
      <div className="flex gap-5 justify-center flex-wrap relative z-10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group relative flex flex-col items-center justify-center gap-4
                       bg-[rgba(5,5,12,0.8)] border border-cyber-purple/20
                       px-9 py-10 min-w-55 h-35 overflow-hidden
                       transition-all duration-300
                       hover:border-cyber-purple hover:-translate-y-1.25
                       hover:shadow-[0_0_10px_#a855f7,0_0_30px_rgba(168,85,247,0.35)]"
          >
            <div className="card-corner tl" />
            <div className="card-corner br" />

            <div className="absolute inset-0 z-0 bg-linear-to-br from-cyber-purple-dim to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            pointer-events-none" />

            <span className="relative z-10 text-[32px] text-cyber-orange leading-none neon-text-orange transition-all">
              {link.icon}
            </span>
            <span className="relative z-10 font-orbitron text-[10px] tracking-[0.3em]
                             text-cyber-cyan uppercase font-semibold">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}