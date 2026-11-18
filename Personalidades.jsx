import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageIntro from '@/components/PageIntro';
import PersonalityCard from '@/components/PersonalityCard';
import MemoriaDivider from '@/components/MemoriaDivider';
import { areas, personalities } from '@/data/personalities';

export default function Personalidades() {
  const [activeArea, setActiveArea] = useState('Todos');

  const filtered = useMemo(
    () => (activeArea === 'Todos' ? personalities : personalities.filter((p) => p.area === activeArea)),
    [activeArea]
  );

  const filters = ['Todos', ...areas];

  return (
    <>
      <PageIntro
        eyebrow="Galeria de trajetórias"
        title="Personalidades negras que abriram caminhos"
        description="Dez histórias de pessoas negras que enfrentaram barreiras estruturais e deixaram marca na história, na literatura, na filosofia, no esporte, nas artes e no jornalismo. Clique em qualquer retrato para ler a biografia completa."
      />

      <div className="site-container">
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto pb-2">
          {filters.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => setActiveArea(area)}
              aria-pressed={activeArea === area}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                activeArea === area
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((person, index) => (
            <motion.div
              key={person.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
            >
              <PersonalityCard person={person} />
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? 'personalidade exibida' : 'personalidades exibidas'} —
          use as categorias para navegar por área de atuação.
        </p>
      </div>

      <MemoriaDivider />
    </>
  );
}
