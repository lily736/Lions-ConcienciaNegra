import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Image } from '@/components/ui/image';

const HERO_IMAGE =
  'https://media.base44.com/images/public/6aeb328789cb4494c1c22dc8/a2328d6c0_generated_1b161348.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="site-container grid gap-12 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-20 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            EEEFM Lions «Sebastião de Paiva Vidaurre»
          </p>

          <h1 className="mt-5 text-balance font-heading text-5xl leading-[0.96] text-foreground sm:text-6xl lg:text-[4.4rem]">
            Consciência
            <br />
            <span className="text-primary">Negra</span>
          </h1>

          <p className="mt-4 text-[0.68rem] uppercase tracking-[0.26em] text-muted-foreground">
            Cachoeiro de Itapemirim — Espírito Santo
          </p>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="font-heading text-xl leading-snug text-foreground sm:text-2xl">
              “Não basta não ser racista, é preciso ser antirracista.”
            </p>
            <footer className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              Angela Davis
            </footer>
          </blockquote>

          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
            Um espaço de memória, orgulho e ação criado por estudantes e educadores da nossa escola. Aqui
            você encontra o protocolo de enfrentamento ao racismo, histórias de quem venceu barreiras e
            caminhos práticos para construir uma escola antirracista todos os dias.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/protocolo" className="btn-gold">
              Conhecer o protocolo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/personalidades" className="btn-line">
              Personalidades negras
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/25">
            <div className="aspect-[4/5] w-full sm:aspect-[5/5.4]">
              <Image
                src={HERO_IMAGE}
                alt="Estudantes negros reunidos em retrato de estilo arquivo histórico, com luz dourada"
                className="block h-full w-full"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="font-heading text-[0.72rem] uppercase tracking-[0.26em] text-foreground">
                Memória · Presença · Futuro
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Vinte de novembro, todos os dias do ano letivo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
