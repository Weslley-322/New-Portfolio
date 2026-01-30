import projects from "@/data/projects.json";
import { Github, Terminal, Archive } from "lucide-react";

export default function ProjectModule() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl">
      {/* Container de Grid com Scroll Interno */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 w-full max-h-[70vh] overflow-y-auto no-scrollbar">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            className="terminal-card relative border border-cyber-red/30 bg-black/60 p-5 backdrop-blur-md group transition-all"
          >
            <div className="relative z-20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-cyber-red opacity-70" />
                  <span className="text-[10px] text-cyber-red/50 font-mono tracking-widest uppercase">
                    {proj.categoria}
                  </span>
                </div>
                <span className="text-[10px] text-cyber-red/30 font-mono italic">#{proj.id}</span>
              </div>

              <h3 className="text-cyber-red font-mono text-xl mb-2 uppercase tracking-tighter neon-text-red">
                {proj.titulo}
              </h3>

              <p className="text-gray-400 text-xs font-mono mb-6 leading-relaxed min-h-[40px]">
                {proj.descricao}
              </p>

              <div className="flex justify-between items-center border-t border-cyber-red/20 pt-4">
                <div className="flex gap-2 flex-wrap">
                  {proj.tecnologias.map((tech) => (
                    <span key={tech} className="text-[9px] text-gray-500 border border-gray-800 px-1 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={proj.repositorio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-mono text-white bg-cyber-red/20 px-3 py-2 hover:bg-cyber-red hover:text-black transition-all"
                >
                  <Github size={14} /> VER_REPOSITÓRIO
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RODAPÉ DISCRETO: Link para o Portfólio Antigo */}
      <div className="mt-8 mb-4 opacity-40 hover:opacity-100 transition-opacity">
        <a 
          href="https://github.com/Weslley-322/Porfolio" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[10px] font-mono text-gray-500 hover:text-cyber-red transition-colors group"
        >
          <Archive size={12} className="group-hover:animate-pulse" />
          <span className="tracking-[0.3em] uppercase underline decoration-cyber-red/20 underline-offset-4">
            Acessar_diretório_obsoleto_v1.0.exe
          </span>
        </a>
      </div>
    </div>
  );
}