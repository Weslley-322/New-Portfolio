import BackgroundEngine from "@/components/BackgroundEngine";
import ScrollContainer from "@/components/ScrollContainer";
import NavigationHUD from "@/components/NavigationHUD";
import HeroTerminal from "@/components/HeroTerminal";
import ProjectModule from "@/components/ProjectModule";
import ContactModule from "@/components/ContactModule";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black font-mono">
      {/* CAMADA 0: Fundo (Sempre atrás de tudo) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundEngine />
      </div>

      {/* CAMADA 1: Efeito de Scanlines (Atrás do conteúdo para não interferir no mouse) */}
      <div className="fixed inset-0 z-1 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20"></div>

      <div className="relative z-10">
        <ScrollContainer>
          
          <section className="min-w-full h-screen snap-start flex flex-col items-center justify-center p-4 md:p-20">
            <div className="flex flex-col gap-2 mb-6 text-center w-full px-4">
              <span className="text-cyber-cyan text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] opacity-40 uppercase block">
                Iniciando Protocolo de Identidade...
              </span>
              <div className="h-[1px] w-24 md:w-32 bg-cyber-cyan/30 mx-auto"></div>
            </div>
            <HeroTerminal />
          </section>

          <section className="min-w-full h-screen snap-start flex flex-col items-center justify-center p-4 md:p-20">
            <div className="flex flex-col gap-2 mb-6 text-center w-full px-4">
              <span className="text-cyber-red text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] opacity-40 uppercase block">
                Acessando Arquivo de Projetos...
              </span>
              <div className="h-[1px] w-24 md:w-32 bg-cyber-red/30 mx-auto"></div>
            </div>
            <ProjectModule />
          </section>

          <section className="min-w-full h-screen snap-start flex flex-col items-center justify-center p-6 md:p-20">
            <div className="flex flex-col items-center gap-8 w-full max-w-4xl text-center px-4">
              <div>
                <h2 className="text-cyber-yellow text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">
                  03_PROTOCOL_UPLINK
                </h2>
                <p className="text-cyber-yellow/40 text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase">
                  Iniciando ponte de comunicação externa
                </p>
                <div className="h-[1px] w-full bg-cyber-yellow/20 mt-4"></div>
              </div>
              <ContactModule />
            </div>
          </section>

        </ScrollContainer>
      </div>

      {/* CAMADA 3: HUD de Navegação (No topo de tudo) */}
      <div className="fixed inset-0 z-[100] pointer-events-none">
        {/* O container interno do NavigationHUD deve ter pointer-events-auto nos botões */}
        <NavigationHUD />
      </div>
    </main>
  );
}