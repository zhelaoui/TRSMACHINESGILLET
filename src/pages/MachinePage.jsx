import PageHeader from '../components/common/PageHeader';
import MachineSummary from '../components/machine/MachineSummary';
import KpiGrid from '../components/dashboard/KpiGrid';
import mockMachine from '../data/mockMachine';
import mockKpis from '../data/mockKpis';

function MachinePage() {
  return (
    <div>
      <PageHeader title="Fiche machine" subtitle="Informations détaillées et synthèse d'indicateurs." />
      <MachineSummary machine={mockMachine} />
      <KpiGrid kpis={mockKpis.slice(1)} />
    </div>
  );
}

export default MachinePage;
