import KpiCard from '../common/KpiCard';

function KpiGrid({ kpis, highlightFirst = false, className = '' }) {
  return (
    <section className={`kpi-grid ${className}`.trim()}>
      {kpis.map((kpi, index) => (
        <KpiCard key={kpi.key || kpi.label} {...kpi} emphasis={highlightFirst && index === 0} />
      ))}
    </section>
  );
}

export default KpiGrid;
