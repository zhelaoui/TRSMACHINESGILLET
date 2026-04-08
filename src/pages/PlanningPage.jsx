import PageHeader from '../components/common/PageHeader';
import PlanningTimeline from '../components/planning/PlanningTimeline';
import SectionCard from '../components/common/SectionCard';
import StatusBadge from '../components/common/StatusBadge';
import mockPlanning from '../data/mockPlanning';

function PlanningPage() {
  return (
    <div className="page-stack">
      <PageHeader
        meta="Agenda machine"
        title="Planning machine"
        subtitle="Organisation de la journée pour la machine unique de la V1."
      />

      <SectionCard title="Légende des créneaux" subtitle="Types d'éléments visibles dans la timeline.">
        <div className="legend-row">
          <StatusBadge status="job" subtle />
          <StatusBadge status="maintenance" subtle />
          <StatusBadge status="quality" subtle />
          <StatusBadge status="stop" subtle />
        </div>
      </SectionCard>

      <PlanningTimeline
        items={mockPlanning}
        title="Timeline de production"
        subtitle="Créneaux horaires, affaires planifiées, et événements atelier."
      />
    </div>
  );
}

export default PlanningPage;
