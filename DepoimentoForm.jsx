import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

const inputClass =
  'w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none';

export default function DepoimentoForm({ onAdd }) {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const novosErros = {};
    if (nome.trim().length < 2) novosErros.nome = 'Escreva seu nome.';
    if (turma.trim().length < 2) novosErros.turma = 'Informe sua turma ou função.';
    if (mensagem.trim().length < 10) novosErros.mensagem = 'Conte um pouco mais (mínimo de 10 caracteres).';
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    onAdd({ nome, turma, mensagem });
    setNome('');
    setTurma('');
    setMensagem('');
    setEnviado(true);
    window.setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} id="depoimento-form" className="panel p-6 sm:p-8" noValidate>
      <h2 className="font-heading text-xl text-foreground sm:text-2xl">Deixe sua voz no mural</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Escreva um relato, um aprendizado ou um compromisso antirracista. Seu depoimento aparece
        imediatamente no mural.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Nome
          </label>
          <input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como quer ser chamado(a)"
            className={inputClass}
            aria-invalid={Boolean(erros.nome)}
          />
          {erros.nome && <p className="mt-1.5 text-xs text-accent">{erros.nome}</p>}
        </div>

        <div>
          <label htmlFor="turma" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Turma ou cargo
          </label>
          <input
            id="turma"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            placeholder="Ex.: 2º ano B, professora, merendeiro"
            className={inputClass}
            aria-invalid={Boolean(erros.turma)}
          />
          {erros.turma && <p className="mt-1.5 text-xs text-accent">{erros.turma}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="mensagem" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={5}
          placeholder="Escreva seu depoimento com respeito e cuidado com as pessoas envolvidas."
          className={`${inputClass} resize-none`}
          aria-invalid={Boolean(erros.mensagem)}
        />
        {erros.mensagem && <p className="mt-1.5 text-xs text-accent">{erros.mensagem}</p>}
        <div className="mt-1.5 flex items-center justify-between text-xs text-muted-foreground">
          <span>Evite expor nomes de colegas em situações de conflito.</span>
          <span>{mensagem.trim().length}/600</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-gold">
          Publicar depoimento
          <Send className="h-4 w-4" />
        </button>
        {enviado && (
          <p className="flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 className="h-4 w-4" />
            Depoimento publicado no mural.
          </p>
        )}
      </div>
    </form>
  );
}
