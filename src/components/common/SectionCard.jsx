function SectionCard({ title, subtitle, actions, className = '', children }) {
  return (
    <section className={`panel section-card ${className}`.trim()}>
      {(title || subtitle || actions) ? (
        <header className="section-card-head">
          <div>
            {title ? <h3>{title}</h3> : null}
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
          {actions ? <div className="section-card-actions">{actions}</div> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}

export default SectionCard;
