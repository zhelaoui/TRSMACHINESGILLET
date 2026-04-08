const mockPlanning = [
  {
    businessId: 'AFF-25041',
    label: 'Corps valve inox',
    start: '08:00',
    end: '09:30',
    plannedMinutes: 90,
    theoreticalMachiningMinutes: 82,
    type: 'job'
  },
  {
    businessId: 'ARR-090',
    label: 'Arrêt court - attente outil',
    start: '09:30',
    end: '09:45',
    plannedMinutes: 15,
    theoreticalMachiningMinutes: 0,
    type: 'stop'
  },
  {
    businessId: 'AFF-25042',
    label: 'Axe hydraulique série B',
    start: '09:45',
    end: '11:45',
    plannedMinutes: 120,
    theoreticalMachiningMinutes: 110,
    type: 'job'
  },
  {
    businessId: 'MAINT-021',
    label: 'Maintenance préventive broche',
    start: '11:45',
    end: '12:00',
    plannedMinutes: 15,
    theoreticalMachiningMinutes: 0,
    type: 'maintenance'
  },
  {
    businessId: 'AFF-25058',
    label: 'Bagues de précision',
    start: '13:00',
    end: '15:00',
    plannedMinutes: 120,
    theoreticalMachiningMinutes: 112,
    type: 'job'
  },
  {
    businessId: 'NC-114',
    label: 'Contrôle NC et reprise lot',
    start: '15:00',
    end: '15:15',
    plannedMinutes: 15,
    theoreticalMachiningMinutes: 8,
    type: 'quality'
  },
  {
    businessId: 'AFF-25061',
    label: 'Série reprise contrôle',
    start: '15:15',
    end: '16:45',
    plannedMinutes: 90,
    theoreticalMachiningMinutes: 80,
    type: 'job'
  }
];

export default mockPlanning;
