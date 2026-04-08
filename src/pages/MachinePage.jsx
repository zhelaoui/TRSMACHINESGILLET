import PageHeader from '../components/common/PageHeader';
import MachineSummary from '../components/machine/MachineSummary';
import KpiGrid from '../components/dashboard/KpiGrid';
import SectionCard from '../components/common/SectionCard';
import mockMachine from '../data/mockMachine';
import mockKpis from '../data/mockKpis';

function MachinePage() {
  return (
    <div className="page-stack">
      <PageHeader
        meta="Fiche technique"
        title="Fiche machine"
        subtitle="Informations machine et résumé des indicateurs de suivi TRS."
      />

      <MachineSummary machine={mockMachine} />

      <SectionCard title="Résumé des indicateurs" subtitle="Synthèse globale (données fictives).">
        <KpiGrid kpis={mockKpis} />
      </SectionCard>
    </div>
  );
}

export default MachinePage;
