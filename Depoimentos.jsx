import { useEffect, useState } from 'react';
import PageIntro from '@/components/PageIntro';
import DepoimentoForm from '@/components/depoimentos/DepoimentoForm';
import Mural from '@/components/depoimentos/Mural';
import { createDepoimento, loadDepoimentos, saveDepoimentos } from '@/lib/depoimentos';
import { Info, MessageSquareQuote } from 'lucide-react';

export default function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState([]);

  useEffect(() => {
    setDepoimentos(loadDepoimentos());
  }, []);

  const handleAdd = ({ nome, turma, mensagem }) => {
    const novo = createDepoimento({ nome, turma, mensagem });
    const atualizado = [novo, ...depoimentos];
    setDepoimentos(atualizado);
    saveDepoimentos(atualizado);
  };

  return (
    <>
      <PageIntro
        eyebrow="Mural de vozes"
        title="A escola também se transforma quando alguém conta o que viveu"
        description="Este é o espaço da comunidade escolar para registrar relatos, aprendizados e compromissos. Os depoimentos publicados aqui aparecem imediatamente no mural."
      >
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
          <MessageSquareQuote className="h-3.5 w-3.5 text-primary" />
          {depoimentos.length} {depoimentos.length === 1 ? 'voz publicada' : 'vozes publicadas'}
        </div>
      </PageIntro>

      <div className="site-container space-y-12 pb-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <DepoimentoForm onAdd={handleAdd} />
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              Os depoimentos ficam salvos no armazenamento deste navegador: eles permanecem no mural quando
              você volta ao site neste mesmo dispositivo.
            </p>
          </div>

          <section>
            <h2 className="mb-5 font-heading text-xl text-foreground sm:text-2xl">Vozes do mural</h2>
            <Mural depoimentos={depoimentos} />
          </section>
        </div>
      </div>
    </>
  );
}
