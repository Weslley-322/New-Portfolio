"use client"; 

export default function ScrollContainer({ children }) {
  return (
    <div 
      id="main-system-scroll"
      className="flex w-screen h-screen overflow-x-auto snap-x snap-mandatory no-scrollbar"
    >
      {children}
    </div>
  );
}