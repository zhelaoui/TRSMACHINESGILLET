function MachineSummary({ machine }) {
  return (
    <section className="panel">
      <h3>Fiche machine</h3>
      <div className="definition-grid">
        <p>Nom</p><strong>{machine.name}</strong>
        <p>Groupe</p><strong>{machine.group}</strong>
        <p>Statut</p><strong>{machine.status}</strong>
        <p>Ouverture</p><strong>{machine.openingHours}</strong>
        <p>Plages de travail</p><strong>{machine.workRanges.join(' / ')}</strong>
      </div>
    </section>
  );
}

export default MachineSummary;
