import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Accessibility, Minus, Plus, Square, Sun, Moon, Volume2 } from 'lucide-react';
import { readStorage, writeStorage } from '@/lib/storage';

const SMALL_PILL =
  'inline-flex items-center justify-center gap-1.5 rounded-full border border-border/80 px-2.5 py-1 text-[0.7rem] font-semibold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground';

export default function AccessibilityBar() {
  const location = useLocation();
  const [theme, setTheme] = useState(() =>
    readStorage('lions-theme') === 'light' ? 'light' : 'dark'
  );
  const [scale, setScale] = useState(() => {
    const saved = Number(readStorage('lions-scale'));
    return saved >= 90 && saved <= 140 ? saved : 100;
  });
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    writeStorage('lions-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${scale}%`;
    writeStorage('lions-scale', String(scale));
  }, [scale]);

  useEffect(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [location.pathname]);

  useEffect(() => () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }, []);

  const stopReading = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const readPage = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const source = document.querySelector('[data-read-root]');
    const text = (source?.innerText || '')
      .replace(/\s+/g, ' ')
      .replace(/[·•]/g, '.')
      .trim()
      .slice(0, 9000);
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.98;
    utterance.pitch = 1;
    const ptVoice = window.speechSynthesis
      .getVoices()
      .find((voice) => voice.lang && voice.lang.toLowerCase().startsWith('pt'));
    if (ptVoice) utterance.voice = ptVoice;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  return (
    <div className="border-b border-border/60 bg-background/60">
      <div className="site-container flex min-h-[2.75rem] flex-wrap items-center justify-between gap-x-4 gap-y-1.5 py-1.5">
        <span className="hidden items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:flex">
          <Accessibility className="h-3.5 w-3.5 text-primary" />
          Acessibilidade
        </span>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Fonte
            </span>
            <button
              type="button"
              onClick={() => setScale((s) => Math.max(90, s - 10))}
              disabled={scale <= 90}
              aria-label="Diminuir tamanho da fonte"
              className={`${SMALL_PILL} disabled:opacity-40`}
            >
              <Minus className="h-3 w-3" /> A
            </button>
            <span className="min-w-[2.6rem] text-center text-[0.68rem] font-semibold tabular-nums text-foreground/80">
              {scale}%
            </span>
            <button
              type="button"
              onClick={() => setScale((s) => Math.min(140, s + 10))}
              disabled={scale >= 140}
              aria-label="Aumentar tamanho da fonte"
              className={`${SMALL_PILL} disabled:opacity-40`}
            >
              <Plus className="h-3 w-3" /> A
            </button>
          </div>

          <span className="hidden h-4 w-px bg-border sm:block" />

          <button
            type="button"
            onClick={speaking ? stopReading : readPage}
            aria-pressed={speaking}
            className={`${SMALL_PILL} ${speaking ? 'border-primary/70 bg-primary/10 text-primary' : ''}`}
          >
            {speaking ? <Square className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
            {speaking ? 'Parar leitura' : 'Ouvir a página'}
          </button>

          <span className="hidden h-4 w-px bg-border sm:block" />

          <button
            type="button"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className={SMALL_PILL}
          >
            {theme === 'dark' ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
            {theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          </button>
        </div>
      </div>
    </div>
  );
}
