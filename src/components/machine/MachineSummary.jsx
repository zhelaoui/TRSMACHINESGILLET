import SectionCard from '../common/SectionCard';
import StatusBadge from '../common/StatusBadge';

function MachineSummary({ machine }) {
  return (
    <SectionCard
      title="Informations générales"
      subtitle="Référentiel machine fictif (données mockées V1)."
      actions={<StatusBadge status={machine.statusCode} label={machine.status} />}
    >
      <div className="machine-info-grid">
        <article>
          <p>Nom machine</p>
          <strong>{machine.name}</strong>
        </article>
        <article>
          <p>Groupe</p>
          <strong>{machine.group}</strong>
        </article>
        <article>
          <p>Horaires d’ouverture</p>
          <strong>{machine.openingHours}</strong>
        </article>
        <article>
          <p>Plages de travail</p>
          <strong>{machine.workRanges.join(' / ')}</strong>
        </article>
        <article>
          <p>Zone atelier</p>
          <strong>{machine.location}</strong>
        </article>
        <article>
          <p>Supervision</p>
          <strong>{machine.supervisor}</strong>
        </article>
      </div>
    </SectionCard>
  );
}

export default MachineSummary;
