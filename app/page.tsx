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

      {/* CAMADA 1: Efeito de Scanlines */}
      <div className="fixed inset-0 z-1 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-size-[100%_4px] opacity-20"></div>

      <div className="relative z-10">
        <ScrollContainer>
          
          <section className="min-w-full h-screen snap-start flex flex-col items-center justify-center p-4 md:p-20">
            <div className="flex flex-col gap-2 mb-6 text-center w-full px-4">
              <span className="text-cyber-cyan text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] opacity-40 uppercase block">
                Iniciando Protocolo de Identidade...
              </span>
              <div className="h-px w-24 md:w-32 bg-cyber-purple/30 mx-auto"></div>
            </div>
            <HeroTerminal />
          </section>

          <section className="min-w-full h-screen snap-start flex flex-col items-center justify-center p-4 md:p-20">
            <div className="flex flex-col gap-2 mb-6 text-center w-full px-4">
              <span className="text-cyber-cyan text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] opacity-40 uppercase block">
                Acessando Arquivo de Projetos...
              </span>
              <div className="h-px w-24 md:w-32 bg-cyber-purple/30 mx-auto"></div>
            </div>
            <ProjectModule />
          </section>

          <section className="min-w-full h-screen snap-start flex flex-col items-center justify-center p-6 md:p-20">
            <div className="flex flex-col items-center gap-8 w-full max-w-4xl text-center px-4">
              <ContactModule />
            </div>
          </section>

        </ScrollContainer>
      </div>

      {/* CAMADA 3: HUD de Navegação */}
      <div className="fixed inset-0 z-100 pointer-events-none">
        <NavigationHUD />
      </div>
    </main>
  );
}