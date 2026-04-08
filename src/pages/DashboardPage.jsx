import PageHeader from '../components/common/PageHeader';
import SectionCard from '../components/common/SectionCard';
import StatusBadge from '../components/common/StatusBadge';
import KpiGrid from '../components/dashboard/KpiGrid';
import TodayEvents from '../components/dashboard/TodayEvents';
import PlanningTimeline from '../components/planning/PlanningTimeline';
import mockMachine from '../data/mockMachine';
import mockKpis from '../data/mockKpis';
import mockEvents from '../data/mockEvents';
import mockPlanning from '../data/mockPlanning';

function DashboardPage() {
  const trsKpi = mockKpis[0];
  const ratioKpis = mockKpis.slice(1, 4);
  const timeKpis = mockKpis.slice(4);

  return (
    <div className="page-stack">
      <PageHeader
        meta="Vue opérationnelle"
        title={`Tableau de bord - ${mockMachine.name}`}
        subtitle={`${mockMachine.group} · Suivi TRS journalier d'une machine unique`}
      />

      <section className="hero-grid">
        <SectionCard
          className="trs-hero"
          title="TRS du jour"
          subtitle="Indicateur consolidé de la journée en cours."
          actions={<StatusBadge status={mockMachine.statusCode} label={mockMachine.status} />}
        >
          <div className="trs-hero-value">
            <span>{trsKpi.value}</span>
            <small>%</small>
          </div>
          <div className="trs-hero-details">
            {ratioKpis.map((kpi) => (
              <article key={kpi.key}>
                <p>{kpi.label}</p>
                <strong>{kpi.value}{kpi.unit || ''}</strong>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="État machine actuel" subtitle="Lecture instantanée atelier.">
          <div className="state-grid">
            <article><p>Machine</p><strong>{mockMachine.name}</strong></article>
            <article><p>Groupe</p><strong>{mockMachine.group}</strong></article>
            <article><p>Affaire active</p><strong>{mockMachine.activeBusiness}</strong></article>
            <article><p>Programme</p><strong>{mockMachine.activeProgram}</strong></article>
            <article><p>Horaires</p><strong>{mockMachine.openingHours}</strong></article>
            <article><p>Mise à jour</p><strong>{mockMachine.updatedAt}</strong></article>
          </div>
        </SectionCard>
      </section>

      <SectionCard title="Indicateurs temps" subtitle="Base de calcul des composantes TRS.">
        <KpiGrid kpis={timeKpis} />
      </SectionCard>

      <section className="two-columns two-columns-wide">
        <TodayEvents events={mockEvents} />
        <PlanningTimeline
          items={mockPlanning}
          title="Aperçu planning du jour"
          subtitle="Affaires et événements planifiés sur la journée."
        />
      </section>
    </div>
  );
}

export default DashboardPage;
