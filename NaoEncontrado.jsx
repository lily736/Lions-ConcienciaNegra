import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NaoEncontrado() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'prerender-status-code';
    meta.content = '404';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="site-container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-heading text-6xl text-primary/40">404</p>
      <h1 className="mt-4 font-heading text-2xl text-foreground sm:text-3xl">Esta página não existe</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        O endereço acessado não foi encontrado. Talvez o link esteja incompleto ou o conteúdo tenha sido
        movido.
      </p>
      <Link to="/" className="btn-gold mt-7">
        <ArrowLeft className="h-4 w-4" />
        Voltar ao início
      </Link>
    </div>
  );
}
