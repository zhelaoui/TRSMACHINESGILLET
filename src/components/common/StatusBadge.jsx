const statusLabels = {
  run: 'Marche',
  stop: 'Arrêt',
  maintenance: 'Maintenance',
  quality: 'Non-conformité',
  job: 'Affaire planifiée'
};

function StatusBadge({ status, label, subtle = false }) {
  const resolvedLabel = label || statusLabels[status] || status;
  const tone = subtle ? 'subtle' : 'solid';

  return <span className={`status-badge ${status} ${tone}`}>{resolvedLabel}</span>;
}

export default StatusBadge;
