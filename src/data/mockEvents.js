const mockEvents = [
  { id: 'evt-1', type: 'Marche', label: 'Production nominale', start: '08:00', end: '09:20', durationMinutes: 80, category: 'run' },
  { id: 'evt-2', type: 'Arrêt', label: 'Attente matière', start: '09:20', end: '09:35', durationMinutes: 15, category: 'stop' },
  { id: 'evt-3', type: 'Maintenance', label: 'Réglage lubrification', start: '11:45', end: '12:00', durationMinutes: 15, category: 'maintenance' },
  { id: 'evt-4', type: 'Non-conformité', label: 'Contrôle dimension hors tolérance', start: '14:10', end: '14:35', durationMinutes: 25, category: 'quality' },
  { id: 'evt-5', type: 'Marche', label: 'Production après correction', start: '14:35', end: '16:55', durationMinutes: 140, category: 'run' }
];

export default mockEvents;
