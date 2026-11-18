export default function PageIntro({ eyebrow, title, description, children }) {
  return (
    <header className="site-container pb-10 pt-12 lg:pb-14 lg:pt-16">
      <div className="max-w-3xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 text-balance font-heading text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
