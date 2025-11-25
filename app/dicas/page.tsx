import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, Droplets, Brain, Activity, ShieldCheck } from "lucide-react"

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/impacto" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Impacto</span>
          </Link>
          <span className="font-bold tracking-wider text-green-500">RECUPERAÇÃO</span>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          <header className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              O Caminho da <span className="text-green-500">Liberdade</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Parar de fumar é um desafio, mas os benefícios começam quase imediatamente. Veja como seu corpo se
              recupera.
            </p>
          </header>

          <section className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">Linha do Tempo da Recuperação</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <span className="text-green-400 font-bold text-sm">20 Minutos</span>
                <h3 className="text-lg font-bold text-white mt-2">Pressão Normaliza</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  Sua pressão sanguínea e pulsação voltam aos níveis normais.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <span className="text-green-400 font-bold text-sm">12 Horas</span>
                <h3 className="text-lg font-bold text-white mt-2">Oxigênio Sobe</h3>
                <p className="text-sm text-zinc-400 mt-2">O nível de monóxido de carbono no sangue volta ao normal.</p>
              </div>
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <span className="text-green-400 font-bold text-sm">2 Semanas a 3 Meses</span>
                <h3 className="text-lg font-bold text-white mt-2">Circulação Melhora</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  A função pulmonar aumenta, facilitando a caminhada e exercícios.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <span className="text-green-400 font-bold text-sm">1 Ano</span>
                <h3 className="text-lg font-bold text-white mt-2">Coração Protegido</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  O risco de doença cardíaca cai pela metade em comparação a um fumante.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <span className="text-green-400 font-bold text-sm">1 a 9 Meses</span>
                <h3 className="text-lg font-bold text-white mt-2">Menos Tosse</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  Tosse e falta de ar diminuem. Os cílios pulmonares voltam a funcionar.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-green-500/30 transition-colors">
                <span className="text-green-400 font-bold text-sm">10 Anos</span>
                <h3 className="text-lg font-bold text-white mt-2">Risco de Câncer Cai</h3>
                <p className="text-sm text-zinc-400 mt-2">
                  O risco de morrer de câncer de pulmão é cerca de metade do de um fumante.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">4 Pilares para Vencer o Vício</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 bg-zinc-900 p-6 rounded-2xl border border-white/5">
                <div className="shrink-0 w-12 h-12 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hidratação Constante</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Beba muita água gelada. Ela ajuda a eliminar a nicotina do corpo mais rápido e a sensação gelada na
                    garganta pode aliviar a vontade de fumar. Mantenha uma garrafa sempre perto.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-zinc-900 p-6 rounded-2xl border border-white/5">
                <div className="shrink-0 w-12 h-12 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Movimente-se</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A atividade física libera dopamina (o hormônio do prazer) que o cérebro busca no cigarro. Uma
                    caminhada de 10 minutos já ajuda a reduzir a ansiedade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-zinc-900 p-6 rounded-2xl border border-white/5">
                <div className="shrink-0 w-12 h-12 bg-yellow-500/10 text-yellow-400 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Identifique Gatilhos</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Anote os momentos em que você mais sente vontade (café, estresse, álcool). Planeje uma nova rotina
                    para esses momentos específicos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-zinc-900 p-6 rounded-2xl border border-white/5">
                <div className="shrink-0 w-12 h-12 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">A Regra dos 3 Minutos</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A "fissura" forte dura apenas cerca de 3 a 5 minutos. Respire fundo, beba água ou chupe uma bala sem
                    açúcar até passar.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="relative rounded-2xl overflow-hidden bg-green-900/20 border border-green-500/20 p-8 md:p-12 text-center">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-white">Você não precisa fazer isso sozinho</h2>
              <p className="text-zinc-300 max-w-xl mx-auto">
                O SUS oferece tratamento gratuito para tabagismo em todo o Brasil. Disque Saúde 136 ou procure a Unidade
                Básica de Saúde mais próxima.
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-white text-green-900 font-bold rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
