import PageHeader from '../components/common/PageHeader';
import mockMachine from '../data/mockMachine';

function SettingsPage() {
  return (
    <div>
      <PageHeader title="Paramètres (fictifs)" subtitle="Formulaire de visualisation sans enregistrement." />
      <section className="panel settings-grid">
        <label>
          Nom machine
          <input type="text" defaultValue={mockMachine.name} />
        </label>
        <label>
          Groupe
          <input type="text" defaultValue={mockMachine.group} />
        </label>
        <label>
          Horaires d'ouverture
          <input type="text" defaultValue={mockMachine.openingHours} />
        </label>
        <label>
          Couleur / statut
          <input type="text" defaultValue={mockMachine.colorCode} />
        </label>
        <label>
          Option fictive A
          <select defaultValue="enabled">
            <option value="enabled">Activée</option>
            <option value="disabled">Désactivée</option>
          </select>
        </label>
        <label>
          Option fictive B
          <select defaultValue="alert-1">
            <option value="alert-1">Alerte standard</option>
            <option value="alert-2">Alerte renforcée</option>
          </select>
        </label>
        <button type="button" className="button muted">Simuler la sauvegarde</button>
      </section>
    </div>
  );
}

export default SettingsPage;
