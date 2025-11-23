import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
      >
       <source src="/YTDown.com_YouTube_Media_hU7M-ifJ1sI_001_720p.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      <div className="z-10 max-w-2xl text-center px-6 space-y-8 animate-in fade-in duration-1000 zoom-in-95">
        <div className="space-y-2">
          <h2 className="text-zinc-400 text-sm uppercase tracking-[0.3em] font-medium">Conscientização</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            A Realidade Por Trás da Fumaça
          </h1>
        </div>

        <p className="text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
          O cigarro não afeta apenas quem fuma, mas muda histórias, destrói futuros e apaga vidas. Você está pronto para
          ver os fatos?
        </p>

        <div className="pt-8">
          <Link
            href="/impacto"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-white/50 focus:outline-none"
          >
            Acessar Informações
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
