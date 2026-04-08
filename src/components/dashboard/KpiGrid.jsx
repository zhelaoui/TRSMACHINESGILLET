import KpiCard from '../common/KpiCard';

function KpiGrid({ kpis }) {
  return (
    <section className="kpi-grid">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </section>
  );
}

export default KpiGrid;
