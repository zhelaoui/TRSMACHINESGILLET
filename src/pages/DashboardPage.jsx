import PageHeader from '../components/common/PageHeader';
import KpiGrid from '../components/dashboard/KpiGrid';
import TodayEvents from '../components/dashboard/TodayEvents';
import PlanningTimeline from '../components/planning/PlanningTimeline';
import mockMachine from '../data/mockMachine';
import mockKpis from '../data/mockKpis';
import mockEvents from '../data/mockEvents';
import mockPlanning from '../data/mockPlanning';

function DashboardPage() {
  return (
    <div>
      <PageHeader
        title={`Tableau de bord - ${mockMachine.name}`}
        subtitle={`${mockMachine.group} · Statut actuel : ${mockMachine.status}`}
      />
      <KpiGrid kpis={mockKpis} />
      <section className="two-columns">
        <TodayEvents events={mockEvents.slice(0, 4)} />
        <PlanningTimeline items={mockPlanning.slice(0, 3)} />
      </section>
    </div>
  );
}

export default DashboardPage;
