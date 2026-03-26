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
        <div className="fixed bottom-10 right-10 z-50 flex gap-4 font-mono pointer-events-none">
            <button
              onClick={() => scroll(-1)}
              title="VOLTAR"
              className="pointer-events-auto group flex items-center justify-center border border-cyber-orange p-4 text-cyber-orange hover:bg-cyber-orange/20 transition-all bg-black/60 shadow-[0_0_15px_rgba(255,140,0,0.1)] active:scale-90"
            >
                <ChevronLeft size={8}/>
            </button>

            <button
              onClick={() => scroll(1)}
              title="AVANÇAR"
              className="pointer-events-auto group flex items-center justify-center border border-cyber-orange p-4 text-cyber-orange hover:bg-cyber-orange/20 transition-all bg-black/60 shadow-[0_0_15px_rgba(255,140,0,0.1)] active:scale-90"
            >
                <ChevronRight size={8}/>
            </button>
        </div>
    );
}