"use client";
import projects from "@/data/projects.json";
import { Github, Terminal, Archive, ExternalLink, Database, Cpu } from "lucide-react";

const ProjectCard = ({ proj }) => {
  const isFlagship = proj.isFlagship;

  return (
    <div 
      className={`terminal-card project-card group relative bg-black/80 p-5 transition-all overflow-hidden flex flex-col justify-between
        ${isFlagship ? "md:col-span-2 xl:col-span-3 min-h-55" : "min-h-55"}`}
    >
      <div className="card-corner tl" />
      <div className="card-corner tr" />
      <div className="card-corner bl" />
      <div className="card-corner br" />
      <div className="card-notch" />

      {/* Bloco Superior: Informações textuais */}
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Terminal
              size={12}
              className="text-cyber-purple opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-orbitron text-[8px] text-cyber-purple/50 tracking-[0.3em] uppercase group-hover:text-cyber-purple/80 transition-colors">
              {proj.categoria}
            </span>
          </div>
          <span className="font-orbitron text-[8px] text-cyber-cyan/30 group-hover:text-cyber-cyan/60 transition-colors">
            {isFlagship ? "CORE_SYSTEM" : `#${proj.id}`}
          </span>
        </div>

        <h3 className="font-orbitron font-bold text-cyber-purple neon-text-purple uppercase tracking-tight text-[clamp(0.85rem,1.4vw,1.1rem)] mb-1.5 leading-tight">
          {proj.titulo}
        </h3>

        <div className="flex items-center gap-2 mb-2.5">
          <div className="h-px flex-1 bg-linear-to-r from-cyber-purple/40 to-transparent" />
          <span className="text-cyber-purple/20 text-[8px] font-mono">▸</span>
        </div>

        <p className="text-cyber-text text-[11px] font-mono leading-relaxed mb-4 line-clamp-4">
          {proj.descricao}
        </p>
      </div>

      {/* Bloco Inferior: Rodapé estendendo e travando os botões */}
      <div className="relative z-10 w-full border-t border-cyber-purple/10 pt-3 mt-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 w-full">
          
          {/* Tecnologias */}
          <div className="flex gap-1 flex-wrap flex-1 min-w-0">
            {proj.tecnologias.map((tech) => (
              <span
                key={tech}
                className="text-[8px] font-mono text-cyber-text-dim border border-cyber-text-dim/20 px-1.5 py-0.5 uppercase
                           group-hover:border-cyber-cyan/40 group-hover:text-cyber-cyan/60 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Ações e Links */}
          <div className="flex gap-1.5 flex-wrap shrink-0 items-center justify-start sm:justify-end">
            {isFlagship ? (
              <>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest
                             text-cyber-orange border border-cyber-orange/30 px-2 py-1.5
                             hover:bg-cyber-orange hover:text-black hover:border-cyber-orange
                             hover:shadow-[0_0_12px_rgba(255,106,0,0.4)] transition-all duration-200 uppercase"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={10} />
                  LIVE_DEMO
                </a>
                
                <a
                  href={proj.repositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest
                             text-cyber-text-dim border border-cyber-text-dim/30 px-2 py-1.5
                             hover:bg-cyber-text hover:text-black hover:border-cyber-text transition-all duration-200 uppercase"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Cpu size={10} />
                  UI_SRC
                </a>

                <a
                  href={proj.repositorioBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest
                             text-cyber-orange border border-cyber-orange/30 px-2 py-1.5
                             hover:bg-cyber-orange hover:text-black hover:border-cyber-orange
                             hover:shadow-[0_0_12px_rgba(255,106,0,0.4)] transition-all duration-200 uppercase"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Database size={10} />
                  API_SRC
                </a>
              </>
            ) : (
              <a
                href={proj.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-widest
                           text-cyber-orange border border-cyber-orange/30 px-2.5 py-1.5
                           hover:bg-cyber-orange hover:text-black hover:border-cyber-orange
                           hover:shadow-[0_0_12px_rgba(255,106,0,0.4)] transition-all duration-200 uppercase"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={10} />
                SRC
              </a>
            )}
          </div>

        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]
                      bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)]
                      bg-size-[100%_4px]" />
    </div>
  );
};

export default function ProjectModule() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl px-4">
      <div className="w-full mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyber-purple/30 to-transparent" />
        <div className="flex items-center gap-3 font-orbitron text-[9px] tracking-[0.4em] text-cyber-purple/50 uppercase">
          <span className="status-dot status-dot-purple" />
          REPOSITÓRIOS_ATIVOS
          <span className="text-cyber-cyan/40">[{projects.length}]</span>
        </div>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyber-purple/30 to-transparent" />
      </div>

      {/* Grid restaurado com scroll seguro sem clipping de elementos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-11
                      w-full max-h-[60vh] overflow-y-auto no-scrollbar pr-2 items-start">
        {projects.filter(Boolean).map((proj) => (
          <ProjectCard key={proj.id} proj={proj} />
        ))}
      </div>

      <div className="mt-8 opacity-30 hover:opacity-100 transition-opacity duration-300">
        <a
          href="https://github.com/Weslley-322/Porfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[9px] font-mono text-cyber-text-dim
                     hover:text-cyber-purple transition-colors group"
        >
          <Archive size={11} className="group-hover:animate-pulse" />
          <span className="tracking-[0.3em] uppercase">
            ACESSAR_DIRETÓRIO_OBSOLETO_v1.0
          </span>
          <span className="text-cyber-purple/40 group-hover:text-cyber-purple transition-colors">▸</span>
        </a>
      </div>
    </div>
  );
}