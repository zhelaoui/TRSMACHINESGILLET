import { formatMinutesToHours } from '../../utils/formatters';

function PlanningTimeline({ items }) {
  return (
    <section className="panel">
      <h3>Agenda machine (jour)</h3>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={item.businessId}>
            <div className="timeline-head">
              <strong>{item.businessId}</strong>
              <span>{item.start} → {item.end}</span>
            </div>
            <p>{item.label}</p>
            <div className="timeline-meta">
              <span>Durée planifiée : {formatMinutesToHours(item.plannedMinutes)}</span>
              <span>Usinage théorique : {formatMinutesToHours(item.theoreticalMachiningMinutes)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PlanningTimeline;
