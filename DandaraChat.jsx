import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { findAnswer, SUGGESTIONS, WELCOME } from '@/data/dandaraKnowledge';

const AVATAR =
  'https://media.base44.com/images/public/6aeb328789cb4494c1c22dc8/48968e1da_generated_ac0176b2.png';

export default function DandaraChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('dandara:open', handleOpen);
    return () => window.removeEventListener('dandara:open', handleOpen);
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: 'welcome', role: 'dandara', text: WELCOME }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const send = (text) => {
    const clean = text.trim();
    if (!clean || typing) return;
    const userMessage = { id: `u-${Date.now()}`, role: 'user', text: clean };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTyping(true);
    timerRef.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `d-${Date.now()}`, role: 'dandara', text: findAnswer(clean) },
      ]);
      setTyping(false);
    }, 750);
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Assistente virtual Dandara IA"
          className="fixed inset-x-3 bottom-24 z-50 flex h-[min(74vh,580px)] flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-2xl sm:inset-x-auto sm:right-5 sm:w-[392px]"
        >
          <div className="flex items-center gap-3 border-b border-border/70 bg-background/60 px-4 py-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/40">
              <Image src={AVATAR} alt="Avatar da Dandara IA" className="block h-full w-full" />
            </span>
            <div className="flex-1 leading-tight">
              <p className="font-heading text-sm text-foreground">Dandara IA</p>
              <p className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Assistente do projeto
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar conversa"
              className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) =>
              message.role === 'user' ? (
                <div
                  key={message.id}
                  className="ml-auto max-w-[86%] whitespace-pre-line rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-[0.82rem] leading-relaxed text-primary-foreground"
                >
                  {message.text}
                </div>
              ) : (
                <div key={message.id} className="flex items-start gap-2">
                  <span className="mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full border border-primary/30">
                    <Image src={AVATAR} alt="" className="block h-full w-full" />
                  </span>
                  <div className="max-w-[84%] whitespace-pre-line rounded-2xl rounded-tl-sm border border-border bg-background/60 px-4 py-2.5 text-[0.82rem] leading-relaxed text-foreground/90">
                    {message.text}
                  </div>
                </div>
              )
            )}

            {typing && (
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-primary/30">
                  <Image src={AVATAR} alt="" className="block h-full w-full" />
                </span>
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-border bg-background/60 px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border/70 bg-background/40 px-3 pt-3">
            <div className="no-scrollbar mb-2 flex gap-1.5 overflow-x-auto">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => send(suggestion)}
                  className="shrink-0 rounded-full border border-border px-3 py-1.5 text-[0.7rem] text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 pb-3"
            >
              <label htmlFor="dandara-input" className="sr-only">
                Escreva sua pergunta
              </label>
              <input
                id="dandara-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escreva sua dúvida..."
                className="flex-1 rounded-full border border-border bg-background/70 px-4 py-2.5 text-[0.82rem] text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Enviar mensagem"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Fechar Dandara IA' : 'Abrir Dandara IA'}
        aria-expanded={open}
        className="fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full border border-primary/45 bg-card/95 py-1.5 pl-1.5 pr-4 shadow-xl backdrop-blur transition-transform hover:-translate-y-0.5 sm:right-6"
      >
        <span className="relative h-11 w-11 overflow-hidden rounded-full border border-primary/40">
          <Image src={AVATAR} alt="" className="block h-full w-full" />
        </span>
        <span className="text-left leading-tight">
          <span className="block font-heading text-[0.78rem] text-foreground">Dandara IA</span>
          <span className="flex items-center gap-1 text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="h-2.5 w-2.5 text-primary" />
            Fale comigo
          </span>
        </span>
      </button>
    </>
  );
}
