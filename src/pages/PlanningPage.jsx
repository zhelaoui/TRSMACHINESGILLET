import PageHeader from '../components/common/PageHeader';
import PlanningTimeline from '../components/planning/PlanningTimeline';
import mockPlanning from '../data/mockPlanning';

function PlanningPage() {
  return (
    <div>
      <PageHeader
        title="Planning machine"
        subtitle="Affaires planifiées pour la machine unique de la V1."
      />
      <PlanningTimeline items={mockPlanning} />
    </div>
  );
}

export default PlanningPage;
