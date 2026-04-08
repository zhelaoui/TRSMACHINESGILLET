import { formatMinutesToHours } from '../../utils/formatters';
import SectionCard from '../common/SectionCard';
import StatusBadge from '../common/StatusBadge';

function PlanningTimeline({ items, title = 'Agenda machine (jour)', subtitle = 'Créneaux planifiés pour la journée.' }) {
  return (
    <SectionCard title={title} subtitle={subtitle}>
      <div className="timeline">
        {items.map((item) => (
          <article className={`timeline-item ${item.type || 'job'}`} key={`${item.businessId}-${item.start}`}>
            <div className="timeline-time">{item.start} → {item.end}</div>
            <div className="timeline-content">
              <div className="timeline-head">
                <strong>{item.businessId}</strong>
                <StatusBadge status={item.type || 'job'} subtle />
              </div>
              <p>{item.label}</p>
              <div className="timeline-meta">
                <span>Durée planifiée : {formatMinutesToHours(item.plannedMinutes)}</span>
                <span>Usinage théorique : {formatMinutesToHours(item.theoreticalMachiningMinutes)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

export default PlanningTimeline;
