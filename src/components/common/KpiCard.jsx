function KpiCard({ label, value, unit, tone = 'neutral' }) {
  return (
    <article className={`kpi-card ${tone}`}>
      <p className="kpi-label">{label}</p>
      <p className="kpi-value">
        {value}
        {unit ? <span className="kpi-unit"> {unit}</span> : null}
      </p>
    </article>
  );
}

export default KpiCard;
