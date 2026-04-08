import { formatMinutesToHours } from '../../utils/formatters';
import SectionCard from '../common/SectionCard';
import StatusBadge from '../common/StatusBadge';

function TodayEvents({ events }) {
  return (
    <SectionCard title="Événements du jour" subtitle="Chronologie des faits marquants de production.">
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <StatusBadge status={event.category} subtle />
              <strong>{event.label}</strong>
              <p>{event.detail}</p>
            </div>
            <div className="event-meta">
              <span>{event.start} - {event.end}</span>
              <span>{formatMinutesToHours(event.durationMinutes)}</span>
            </div>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

export default TodayEvents;
