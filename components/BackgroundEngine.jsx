export default function BackgroundEngine() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030307]">
      <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[0.5px]" />
      
      <img
        src="/assets/BackgroundIMG.png"
        alt="Core Tech Background"
        className="h-full w-full object-cover opacity-60"
      />
      
      {/* Efeito de scanline */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(168,85,247,0.04),rgba(0,229,255,0.02),rgba(255,106,0,0.04))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}