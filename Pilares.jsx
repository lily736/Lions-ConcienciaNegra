import { motion } from 'framer-motion';
import { Fingerprint, Flame, Scale, HeartHandshake } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const PILARES = [
  {
    icon: Fingerprint,
    title: 'Identidade',
    text: 'Reconhecer-se e ser reconhecido. A escola é lugar de afirmar quem somos: nossa história, nosso cabelo, nossa fé e nossa voz.',
  },
  {
    icon: Flame,
    title: 'Orgulho',
    text: 'Celebrar a herança africana e afro-brasileira não é exceção — é currículo, é cultura e é chão de escola.',
  },
  {
    icon: Scale,
    title: 'Equidade',
    text: 'Igualdade de direitos com atenção às diferenças: oportunidades reais para quem a história deixou para trás.',
  },
  {
    icon: HeartHandshake,
    title: 'Respeito',
    text: 'Nenhuma “brincadeira” racista é inofensiva. Respeito é prática diária, dentro e fora da sala de aula.',
  },
];

export default function Pilares() {
  return (
    <section className="site-container py-16 lg:py-20">
      <SectionHeading
        eyebrow="Nossos quatro pilares"
        title="O que sustenta uma escola antirracista"
        description="Quatro compromissos que orientam o projeto pedagógico da Lions em todas as áreas do conhecimento."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILARES.map((pilar, index) => (
          <motion.article
            key={pilar.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="panel card-lift group p-6"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
              <pilar.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-lg text-foreground">{pilar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pilar.text}</p>
            <span className="mt-5 block h-px w-10 bg-primary/40 transition-all duration-500 group-hover:w-16" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
