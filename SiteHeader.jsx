import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AccessibilityBar from '@/components/AccessibilityBar';

const LINKS = [
  { to: '/', label: 'Início' },
  { to: '/protocolo', label: 'Protocolo' },
  { to: '/personalidades', label: 'Personalidades' },
  { to: '/dicas', label: 'Dicas' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/sobre', label: 'Sobre' },
];

const navClass = ({ isActive }) =>
  `relative py-2 text-[0.82rem] font-semibold tracking-wide transition-colors ${
    isActive
      ? 'text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:bg-primary'
      : 'text-muted-foreground hover:text-foreground'
  }`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-md">
      <AccessibilityBar />

      <div className="site-container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/60 font-heading text-base text-primary transition-colors group-hover:bg-primary/10">
            L
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-[0.82rem] uppercase tracking-[0.18em] text-foreground">
              Consciência Negra
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
              EEEFM Lions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary/60 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 md:hidden">
          <div className="site-container flex flex-col py-2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `border-b border-border/40 py-3 text-sm font-semibold last:border-0 ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
