function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

export default PageHeader;
