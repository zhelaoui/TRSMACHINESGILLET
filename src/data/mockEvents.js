const mockEvents = [
  {
    id: 'evt-1',
    type: 'Marche',
    label: 'Production nominale',
    start: '08:00',
    end: '09:20',
    durationMinutes: 80,
    category: 'run',
    detail: 'Cadence stabilisée à 95% de la référence.'
  },
  {
    id: 'evt-2',
    type: 'Arrêt',
    label: 'Attente matière',
    start: '09:20',
    end: '09:35',
    durationMinutes: 15,
    category: 'stop',
    detail: 'Alimentation barre en retard sur poste amont.'
  },
  {
    id: 'evt-3',
    type: 'Maintenance',
    label: 'Réglage lubrification',
    start: '11:45',
    end: '12:00',
    durationMinutes: 15,
    category: 'maintenance',
    detail: 'Intervention maintenance planifiée.'
  },
  {
    id: 'evt-4',
    type: 'Non-conformité',
    label: 'Contrôle dimension hors tolérance',
    start: '14:10',
    end: '14:35',
    durationMinutes: 25,
    category: 'quality',
    detail: 'Dérive diamètre +0.04 mm, reprise validée.'
  },
  {
    id: 'evt-5',
    type: 'Marche',
    label: 'Production après correction',
    start: '14:35',
    end: '16:55',
    durationMinutes: 140,
    category: 'run',
    detail: 'Retour à cadence nominale et rejet nul.'
  }
];

export default mockEvents;
