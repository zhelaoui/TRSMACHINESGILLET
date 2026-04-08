function PageHeader({ title, subtitle, meta }) {
  return (
    <header className="page-header">
      {meta ? <p className="page-header-meta">{meta}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

export default PageHeader;
