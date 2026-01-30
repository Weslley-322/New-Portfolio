"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterLine = ({ label, text, currentIndex, activeLine }) => {
  const letters = Array.from(text);
  const isTyping = activeLine === currentIndex;
  const isVisible = activeLine >= currentIndex;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { display: "none" },
    visible: { display: "inline" },
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate={isVisible ? "visible" : "hidden"}
      className="flex flex-col md:grid md:grid-cols-[180px_1fr] md:gap-6 items-start py-1 md:py-0.5"
    >
      <span className="text-cyber-yellow font-bold text-[10px] md:text-xs tracking-wider uppercase shrink-0">
        {label}:
      </span>

      <span className="text-white text-[10px] md:text-xs uppercase leading-relaxed relative break-all md:break-words w-full">
        {letters.map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        
        {isTyping && (
          <motion.span 
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
            className="inline-block w-2 h-3 bg-cyber-cyan ml-1 align-middle"
          />
        )}
      </span>
    </motion.div>
  );
};

export default function HeroTerminal() {
  const [activeLine, setActiveLine] = useState(0);

  const systemData = {
    USER: "WESLLEY EUGÊNIO",
    STATUS: "ONLINE",
    POSITION: "ESTUDANTE DE DESENVOLVIMENTO DE SISTEMAS EM FORMAÇÃO",
    SKILLS_and_TOOLS: ["HTML", "CSS", "JS", "NODE.JS", "MYSQL", "GIT", "JEST"],
    CURRENT_FOCUS: "DESENVOLVIMENTO FRONT-END ESCALÁVEL",
    LANGUAGES: ["PORTUGUÊS_NATIVO", "INGLÊS_TÉCNICO"]
  };

  const dataEntries = Object.entries(systemData);

  useEffect(() => {
    if (activeLine < dataEntries.length) {
      const currentText = Array.isArray(dataEntries[activeLine][1]) 
        ? dataEntries[activeLine][1].join(" // ") 
        : dataEntries[activeLine][1];
      
      const duration = (currentText.length * 55) + 600; 
      const timer = setTimeout(() => {
        setActiveLine((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [activeLine, dataEntries]);

  return (
    <div className="font-mono text-cyber-cyan p-6 md:p-8 border border-cyber-cyan/30 bg-black/60 backdrop-blur-xl max-w-3xl w-[95%] md:w-full relative mx-auto h-auto min-h-fit overflow-visible md:overflow-hidden">
      
      {/* Detalhe de canto */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-cyan"></div>
      
      {/* Header */}
      <div className="flex justify-between border-b border-cyber-cyan/30 pb-2 mb-6 text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-60">
        <span>ID_IDENTITY_UNIT</span>
        <span>VER_2.0.4</span>
      </div>

      {/* Conteúdo: Garantindo que o container cresça */}
      <div className="space-y-4 md:space-y-2 pb-4 md:pb-0">
        {dataEntries.map(([key, value], index) => {
          const textContent = Array.isArray(value) ? value.join(" // ") : value;
          return (
            <TypewriterLine 
              key={key}
              label={key}
              text={textContent}
              currentIndex={index}
              activeLine={activeLine}
            />
          );
        })}
      </div>

      {/* Overlay de Scanlines sutil (agora com z-index baixo para não cobrir o texto) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] opacity-20"></div>
    </div>
  );
}