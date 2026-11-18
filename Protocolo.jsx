import PageIntro from '@/components/PageIntro';
import MemoriaDivider from '@/components/MemoriaDivider';
import SectionHeading from '@/components/SectionHeading';
import Comparativo from '@/components/protocolo/Comparativo';
import Diretrizes from '@/components/protocolo/Diretrizes';
import Passos from '@/components/protocolo/Passos';
import { Scale, ShieldCheck, TriangleAlert } from 'lucide-react';

const TIMELINE = [
  { year: '1988', text: 'A Constituição Federal reconhece o racismo como crime inafiançável e imprescritível.' },
  { year: '1989', text: 'Lei nº 7.716 define os crimes resultantes de preconceito de raça ou de cor.' },
  { year: '2003', text: 'Lei nº 10.639 altera a LDB e torna obrigatório o ensino de história e cultura afro-brasileira.' },
  { year: '2004', text: 'Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais e para o Ensino de História e Cultura Afro-Brasileira e Africana.' },
  { year: '2008', text: 'Lei nº 11.645 inclui também a história e cultura dos povos indígenas no currículo.' },
  { year: '2023', text: 'O 20 de novembro, Dia Nacional da Consciência Negra, passa a ser feriado nacional.' },
];

export default function Protocolo() {
  return (
    <>
      <PageIntro
        eyebrow="Protocolo de enfrentamento"
        title="Racismo na escola não é brincadeira: é caso de protocolo"
        description="Um guia objetivo para estudantes, professores e gestão. Reúne o que diz a Lei nº 10.639/2003, as diretrizes pedagógicas que orientam nossa prática e o passo a passo de atuação diante de situações de racismo."
      />

      <div className="site-container space-y-16 lg:space-y-20">
        <section>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="panel p-6 sm:p-8">
              <span className="flex items-center gap-2 eyebrow">
                <Scale className="h-4 w-4" />
                Lei nº 10.639/2003
              </span>
              <h2 className="mt-4 font-heading text-2xl leading-snug text-foreground sm:text-3xl">
                O que a lei determina
              </h2>
              <div className="prose-site mt-4">
                <p>
                  A Lei nº 10.639, sancionada em 9 de janeiro de 2003, alterou a Lei de Diretrizes e Bases da
                  Educação Nacional (LDB) e tornou obrigatório, em toda a educação básica — pública e privada —
                  o ensino de <strong>história e cultura afro-brasileira</strong>. A lei acrescentou os artigos
                  26-A, 79-A e 79-B à LDB e instituiu o <strong>20 de novembro</strong> como Dia Nacional da
                  Consciência Negra no calendário escolar.
                </p>
                <p>
                  O texto vai além de uma data comemorativa: determina que o conteúdo seja trabalhado{' '}
                  <strong>em todo o currículo</strong>, com destaque para Educação Artística, Literatura e
                  História Brasileiras, resgatando a contribuição do povo negro na cultura, na economia e na
                  formação social do Brasil.
                </p>
                <p>
                  Na prática, isso significa currículo, material didático, formação de professores e projeto
                  político-pedagógico. Não é disciplina extra, nem projeto de uma semana em novembro: é
                  obrigação legal e compromisso pedagógico permanente.
                </p>
              </div>
            </div>

            <div className="panel p-6 sm:p-8">
              <h3 className="font-heading text-lg text-foreground">Linha do tempo</h3>
              <ol className="mt-5 space-y-4 border-l border-border pl-5">
                {TIMELINE.map((item) => (
                  <li key={item.year} className="relative">
                    <span
                      className="absolute -left-[1.6rem] top-1.5 h-2 w-2 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <p className="font-heading text-sm text-primary">{item.year}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Referência pedagógica"
            title="Diretrizes de Bárbara Pinheiro (2023)"
            description="A educadora Bárbara Pinheiro defende que a educação antirracista seja prática cotidiana e não evento pontual. Estas são as diretrizes que orientam o protocolo da nossa escola."
          />
          <div className="mt-8">
            <Diretrizes />
          </div>
        </section>

        <MemoriaDivider />

        <section>
          <SectionHeading
            eyebrow="Entenda a diferença"
            title="Racismo e bullying não são a mesma coisa"
            description="Confundir os dois enfraquece a resposta da escola. Toque nos botões para comparar origem, alcance e consequências de cada violência."
          />
          <div className="mt-8">
            <Comparativo />
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Atuação imediata"
            title="Guia em 6 passos para lidar com racismo na escola"
            description="Toque em cada passo para ver o que fazer. A ordem importa: primeiro proteger, depois registrar, educar e acompanhar."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <Passos />
            <aside className="panel border-accent/35 bg-accent/[0.06] p-6 lg:sticky lg:top-36">
              <span className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-accent">
                <TriangleAlert className="h-4 w-4" />
                Em situação de risco
              </span>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                Se houver ameaça, agressão física ou risco imediato, procure a direção da escola, a
                coordenação pedagógica ou um adulto de confiança. Em casos de violência e discriminação, o{' '}
                <strong className="text-foreground">Disque 100</strong> (Direitos Humanos) recebe denúncias de
                forma gratuita e sigilosa, 24 horas por dia.
              </p>
              <div className="mt-5 flex items-center gap-2 border-t border-accent/25 pt-4 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
                Nenhum estudante deve enfrentar isso sozinho.
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
