"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterLine = ({ label, text, currentIndex, activeLine }) => {
  const letters = Array.from(text);
  const isTyping   = activeLine === currentIndex;
  const isVisible  = activeLine >= currentIndex;

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.045 } },
  };
  const letterVariants = {
    hidden:  { display: "none" },
    visible: { display: "inline" },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="flex flex-col md:grid md:grid-cols-[180px_1fr] md:gap-4 items-start py-1"
    >
      <span className="font-orbitron text-cyber-orange text-[9px] md:text-[10px] tracking-wider uppercase shrink-0 neon-text-orange">
        {label}
      </span>

      <span className="text-cyber-text text-[10px] md:text-[11px] uppercase leading-relaxed relative break-all md:warp-break-word w-full">
        {letters.map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char
          }</motion.span>
        ))}
        {isTyping && <span className="terminal-cursor" />}
      </span>
    </motion.div>
  );
};

const StatusCard = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const pad = (v) => String(v).padStart(2, "0");
    const tick = () => {
      const n = new Date();
      setTime(`${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative border border-cyber-purple/20 bg-cyber-black/80 p-6 w-full h-full
                    hover:border-cyber-purple/50 transition-border duration-300">

      <div className="card-corner tl" />
      <div className="card-corner tr" />
      <div className="card-corner bl" />
      <div className="card-corner br" />
      <div className="card-notch" />

      <div className="font-orbitron text-[8px] tracking-[0.3em] text-cyber-purple/60 border-b border-cyber-purple/15 pb-3 mb-5 flex justify-between">
        <span>STATUS_CARD</span>
        <span className="text-cyber-cyan/60">{time}</span>
      </div>

      <div className="space-y-4 text-[11px]">
        <div className="flex items-center gap-3">
          <span className="status-dot status-dot-cyan" />
          <span className="text-cyber-cyan tracking-widest uppercase text-[10px]">SYSTEM_ONLINE</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="status-dot status-dot-purple" />
          <span className="text-cyber-text tracking-wide uppercase text-[10px]">SECURITY: ENCRYPTED</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="status-dot status-dot-cyan" />
          <span className="text-cyber-cyan tracking-wide uppercase text-[10px]">DATABASE_CONNECTED</span>
        </div>

        <div className="border-t border-cyber-purple/10 pt-4 space-y-1">
          <p className="font-orbitron text-[8px] text-cyber-text-dim tracking-[0.15em] uppercase">
            NODE_LOCATION
          </p>
          <p className="text-cyber-text uppercase tracking-wide">RECIFE // PE // BR</p>
        </div>

        <div className="border-t border-cyber-purple/10 pt-4 space-y-1">
          <p className="font-orbitron text-[8px] text-cyber-text-dim tracking-[0.15em] uppercase">
            CURRENT_OBJECTIVE
          </p>
          <p className="text-cyber-orange neon-text-orange uppercase tracking-wide">
            JUNIOR_DEV_POSITION
          </p>
        </div>

        <div className="border-t border-cyber-purple/10 pt-4 space-y-1">
          <p className="font-orbitron text-[8px] text-cyber-text-dim tracking-[0.15em] uppercase">
            SECURITY_CLEARANCE
          </p>
          <p className="text-cyber-cyan neon-text-cyan uppercase tracking-wide">
            ENCRYPTED_ACCESS
          </p>
        </div>

        <div className="border-t border-cyber-purple/10 pt-4 flex items-center gap-3">
          <span className="status-dot status-dot-purple" />
          <span className="text-cyber-text text-[10px] uppercase tracking-widest">UPLINK_ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default function HeroTerminal() {
  const [activeLine, setActiveLine] = useState(0);

  const systemData = {
    POSITION:       "TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS",
    SKILLS:         ["TYPESCRIPT", "JAVASCRIPT", "REACT", "NODE.JS", "MYSQL"],
    FOCUS:          ["INTERFACES FRONTEND", "INTEGRAÇÃO FULLSTACK"],
    LANGUAGES:      ["PORTUGUÊS_NATIVO", "INGLÊS_TÉCNICO"],
  };

  const dataEntries = Object.entries(systemData);

  useEffect(() => {
    if (activeLine < dataEntries.length) {
      const currentText = Array.isArray(dataEntries[activeLine][1])
        ? dataEntries[activeLine][1].join(" // ")
        : dataEntries[activeLine][1];
      const duration = currentText.length * 50 + 600;
      const timer = setTimeout(() => setActiveLine((p) => p + 1), duration);
      return () => clearTimeout(timer);
    }
  }, [activeLine, dataEntries]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-center">
      <div className="terminal-card relative p-6 md:p-8 w-full">
        <div className="card-corner tl" />
        <div className="card-corner tr" />
        <div className="card-corner bl" />
        <div className="card-corner br" />
        <div className="card-notch" />
        <div className="scan-line" />

        <div className="font-orbitron text-[8px] tracking-[0.4em] text-cyber-purple/60 mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-cyber-purple/40 inline-block" />
          PROTOCOLO DE IDENTIDADE
        </div>

        <h1 className="font-orbitron font-black leading-none mb-2 text-white">
          <div className="text-[clamp(2rem,4vw,3.8rem)]">
            <span className="glitch neon-text-purple" data-text="WESLLEY">WESLLEY</span>
          </div>
          <div className="text-[clamp(2rem,4vw,3.8rem)] text-cyber-purple">
            <span className="glitch neon-text-purple" data-text="EUGÊNIO">EUGÊNIO</span>
          </div>
        </h1>

        <p className="font-orbitron text-cyber-cyan text-[clamp(0.7rem,1.2vw,1rem)] tracking-[0.2em] neon-text-cyan mb-8">
          / / IDENTITY_UNIT
        </p>

        <div className="flex justify-end border-b border-cyber-purple/20 pb-2 mb-5
                        font-orbitron text-[8px] md:text-[9px] uppercase tracking-[0.3em]
                        text-cyber-purple/50">
          <span>VER_2.0.4</span>
        </div>

        <div className="space-y-3">
          {dataEntries.map(([key, value], index) => (
            <TypewriterLine
              key={key}
              label={key}
              text={Array.isArray(value) ? value.join(" // ") : value}
              currentIndex={index}
              activeLine={activeLine}
            />
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.04]
                        bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)]
                        bg-size-[100%_4px]" />
      </div>

      <div className="hidden lg:block h-full">
        <StatusCard />
      </div>
    </div>
  );
}