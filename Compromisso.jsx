import { useEffect, useState } from 'react';
import { Check, HandHeart } from 'lucide-react';
import { compromissos } from '@/data/dicas';
import { readJson, writeJson } from '@/lib/storage';

const KEY = 'lions-compromissos-v1';

export default function Compromissos() {
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const stored = readJson(KEY, []);
    if (Array.isArray(stored)) setChecked(stored);
  }, []);

  const toggle = (index) => {
    const next = checked.includes(index) ? checked.filter((i) => i !== index) : [...checked, index];
    setChecked(next);
    writeJson(KEY, next);
  };

  const progress = Math.round((checked.length / compromissos.length) * 100);

  return (
    <div className="panel p-6 sm:p-8">
      <span className="flex items-center gap-2 eyebrow">
        <HandHeart className="h-4 w-4" />
        Meus compromissos
      </span>
      <h3 className="mt-3 font-heading text-xl text-foreground sm:text-2xl">
        O que eu me comprometo a fazer
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Marque as atitudes que você assume a partir de hoje. Suas escolhas ficam salvas neste navegador para
        você acompanhar seu progresso.
      </p>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Progresso</span>
          <span className="font-semibold text-primary">
            {checked.length}/{compromissos.length}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul className="mt-6 space-y-2">
        {compromissos.map((item, index) => {
          const isChecked = checked.includes(index);
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-pressed={isChecked}
                className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors ${
                  isChecked
                    ? 'border-primary/50 bg-primary/[0.08]'
                    : 'border-border hover:border-primary/35 hover:bg-muted/40'
                }`}
              >
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${
                    isChecked ? 'border-primary bg-primary text-primary-foreground' : 'border-border'
                  }`}
                >
                  {isChecked && <Check className="h-3.5 w-3.5" />}
                </span>
                <span
                  className={`text-sm leading-relaxed ${
                    isChecked ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
