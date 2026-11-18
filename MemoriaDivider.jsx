export default function MemoriaDivider() {
  return (
    <div className="site-container">
      <div className="flex items-center gap-4 py-2" aria-hidden="true">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/45 to-primary/45" />
        <span className="h-1.5 w-1.5 rotate-45 bg-primary/70" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/45 to-primary/45" />
      </div>
    </div>
  );
}
