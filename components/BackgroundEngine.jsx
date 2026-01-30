export default function BackgroundEngine() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0a0a0a]">
      {/* Overlay de contraste */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[1px]" />
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-50"
      >
        <source src="/assets/night-city-cyberpunk-2077-moewalls-com.mp4" type="video/mp4" />
      </video>

      {/* Efeito de scanline */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}