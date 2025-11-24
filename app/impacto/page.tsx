import Link from "next/link"
import Image from "next/image"
import { Heart, Wind, AlertTriangle, ArrowLeft, XCircle } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
          <span className="font-bold tracking-wider">PARE DE FUMAR</span>
        </div>
      </nav>

      <header className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-medium">
            <AlertTriangle className="w-4 h-4" />
            <span>Alerta de Saúde Grave</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            O que acontece com o seu corpo <br />
            <span className="text-red-500">a cada tragada?</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            O tabagismo é a principal causa de morte evitável no mundo. Conheça os danos irreversíveis causados aos seus
            órgãos vitais.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-24">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-blue-400">
              <Wind className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Sistema Respiratório</h2>
            <p className="text-zinc-400 leading-relaxed">
              A fumaça inalada queima os cílios que protegem seus pulmões. Com o tempo, isso leva à Doença Pulmonar
              Obstrutiva Crônica (DPOC) e enfisema. O tecido pulmonar saudável fica preto e cicatrizado, dificultando
              cada respiração.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500" />
                Destruição dos alvéolos
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500" />
                Risco 25x maior de câncer de pulmão
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500" />
                Bronquite crônica irreversível
              </li>
            </ul>
          </div>
          <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <Image
              src="/lungs-damage-medical-illustration-anatomy-dark-sty.jpg"
              alt="Ilustração de dano pulmonar"
              fill
              className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <span className="text-white font-medium">Danos progressivos no tecido pulmonar</span>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl order-last md:order-first group">
            <Image
              src="/heart-disease-artery-blockage-illustration-medical.jpg"
              alt="Ilustração de problemas cardíacos"
              fill
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <span className="text-white font-medium">Obstrução das artérias</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-red-500">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Sistema Cardiovascular</h2>
            <p className="text-zinc-400 leading-relaxed">
              As substâncias tóxicas do cigarro tornam o sangue mais espesso e aumentam a formação de placas nas
              artérias. Isso força o coração a trabalhar mais, aumentando drasticamente a pressão arterial.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500" />
                Aumento imediato da frequência cardíaca
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500" />
                Risco elevado de AVC (Derrame)
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500" />
                Doença arterial periférica
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Efeitos Visíveis e Invisíveis</h2>
            <p className="text-zinc-400">O impacto vai muito além do que os exames mostram.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-zinc-950 p-6 rounded-xl border border-white/5">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src="/premature-aging-skin-smoke-damage-face.jpg"
                  alt="Envelhecimento precoce"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Envelhecimento Precoce</h3>
              <p className="text-sm text-zinc-400">
                A nicotina estreita os vasos sanguíneos da pele, reduzindo o oxigênio e causando rugas prematuras e pele
                acinzentada.
              </p>
            </div>

            <div className="space-y-4 bg-zinc-950 p-6 rounded-xl border border-white/5">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/brain-mri-scan-neurology-dark.jpg" alt="Danos cerebrais" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white">Declínio Cognitivo</h3>
              <p className="text-sm text-zinc-400">
                Fumantes têm maior risco de demência e perda de volume cerebral com o passar da idade.
              </p>
            </div>

            <div className="space-y-4 bg-zinc-950 p-6 rounded-xl border border-white/5">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/damaged-teeth-gums-smoking-dentist.jpg" alt="Saúde bucal" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white">Saúde Bucal</h3>
              <p className="text-sm text-zinc-400">
                Maior risco de perda de dentes, doenças gengivais graves, mau hálito crônico e câncer de boca.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 space-y-6">
          <h2 className="text-4xl font-bold">Nunca é tarde para parar.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            20 minutos após parar, sua pressão arterial cai. 12 horas depois, o nível de monóxido de carbono no sangue
            volta ao normal. Sua jornada começa agora.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link
              href="/dicas"
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-bold transition-colors border border-zinc-700 flex items-center justify-center"
            >
              Ver Dicas para Parar
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Campanha de Conscientização. Imagens meramente ilustrativas.</p>
      </footer>
    </div>
  )
}
