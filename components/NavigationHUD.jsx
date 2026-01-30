"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NavigationHUD() {
    const scroll = (direction) => {
        const container = document.getElementById('main-system-scroll');
        if (container) {
            const width = window.innerWidth; 
            container.scrollBy({ left: direction * width, behavior: 'smooth' });
        }
    };

    return (
        /* Adicionamos pointer-events-none no container para segurança e pointer-events-auto nos botões */
        <div className="fixed bottom-10 right-10 z-50 flex gap-4 font-mono pointer-events-none">
            <button
              onClick={() => scroll(-1)}
              className="pointer-events-auto group flex items-center gap-2 border border-cyber-cyan p-2 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all bg-black/40"
            >
                <ChevronLeft size={20}/>
                <span className="hidden group-hover:block uppercase tracking-widest text-xs">Voltar</span>
            </button>

            <button
              onClick={() => scroll(1)}
              className="pointer-events-auto group flex items-center gap-2 border border-cyber-red p-2 text-cyber-red hover:bg-cyber-red/20 transition-all bg-black/40"
            >
                <span className="hidden group-hover:block uppercase tracking-widest text-xs">Avançar</span>
                <ChevronRight size={20}/>
            </button>
        </div>
    );
}