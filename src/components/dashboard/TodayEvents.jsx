import { formatMinutesToHours } from '../../utils/formatters';

function TodayEvents({ events }) {
  return (
    <section className="panel">
      <h3>Événements du jour</h3>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <strong>{event.type}</strong>
              <p>{event.label}</p>
            </div>
            <div className="event-meta">
              <span>{event.start} - {event.end}</span>
              <span>{formatMinutesToHours(event.durationMinutes)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodayEvents;
