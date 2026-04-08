import { useMemo, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import mockEvents from '../data/mockEvents';
import { formatMinutesToHours } from '../utils/formatters';

const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'Marche', value: 'run' },
  { label: 'Arrêt', value: 'stop' },
  { label: 'Maintenance', value: 'maintenance' },
  { label: 'Non-conformité', value: 'quality' }
];

function EventsPage() {
  const [filter, setFilter] = useState('all');

  const filteredEvents = useMemo(() => {
    if (filter === 'all') return mockEvents;
    return mockEvents.filter((event) => event.category === filter);
  }, [filter]);

  return (
    <div>
      <PageHeader title="Historique des événements" subtitle="Vue front fictive des événements machine." />
      <section className="panel">
        <div className="filter-row">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`chip ${filter === item.value ? 'active' : ''}`}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <table className="event-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Début</th>
              <th>Fin</th>
              <th>Durée</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.type}</td>
                <td>{event.label}</td>
                <td>{event.start}</td>
                <td>{event.end}</td>
                <td>{formatMinutesToHours(event.durationMinutes)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default EventsPage;
