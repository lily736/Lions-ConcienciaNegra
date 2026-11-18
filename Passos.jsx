import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const PASSOS = [
  {
    title: 'Identificar e interromper',
    text:
      'Pare a situação no momento em que ela acontece. Diga com clareza que aquilo é racismo — não "brincadeira", não "exagero". Interrompa sem expor a pessoa agredida e sem transformar o momento em espetáculo. Se a agressão ocorrer em sala, retome o conteúdo depois de garantir a proteção de todos.',
  },
  {
    title: 'Acolher e proteger',
    text:
      'Escute sem julgamento, acredite no relato e não peça provas. Evite obrigar o estudante a repetir a história várias vezes para pessoas diferentes: isso revitimiza. Garanta que ele não fique sozinho em espaços de risco, ofereça apoio pedagógico e, se necessário, encaminhamento ao serviço de orientação e à rede de saúde.',
  },
  {
    title: 'Registrar',
    text:
      'Faça o registro escrito do ocorrido: data, local, relato da vítima, testemunhas e encaminhamentos. Comunique a direção e a coordenação pedagógica. O registro protege o estudante, orienta a intervenção e permite acompanhar se os casos se repetem. Trate os dados com sigilo.',
  },
  {
    title: 'Interlocução com as famílias',
    text:
      'Converse com os responsáveis da vítima e do autor da agressão, separadamente, com respeito e foco educativo. Explique o que aconteceu, quais medidas a escola adotará e como a família pode colaborar. Evite confrontos públicos, julgamentos antecipados e exposição de menores.',
  },
  {
    title: 'Implementar ações pedagógicas',
    text:
      'Transforme o episódio em conteúdo: rodas de conversa, leitura de autores negros, projetos interdisciplinares sobre história e cultura afro-brasileira, revisão de materiais didáticos. Previna a repetição trabalhando letramento racial com toda a turma — não apenas com os envolvidos.',
  },
  {
    title: 'Acompanhar',
    text:
      'Volte ao caso depois: a vítima está bem? O grupo mudou de postura? Houve reincidência? Registre o acompanhamento periodicamente, envolva grêmio estudantil e conselho escolar e reavalie o clima da escola. Enfrentamento sem acompanhamento é só um episódio isolado.',
  },
];

export default function Passos() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {PASSOS.map((passo, index) => {
        const isOpen = open === index;
        return (
          <div key={passo.title} className="panel overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-muted/30"
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border font-heading text-sm transition-colors ${
                  isOpen
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-primary/35 text-primary'
                }`}
              >
                {index + 1}
              </span>
              <span className="flex-1 font-heading text-base text-foreground sm:text-lg">{passo.title}</span>
              {isOpen ? (
                <Minus className="h-4 w-4 shrink-0 text-primary" />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
              )}
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-muted-foreground">
                  {passo.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
