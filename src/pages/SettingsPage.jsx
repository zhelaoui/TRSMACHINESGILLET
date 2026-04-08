import PageHeader from '../components/common/PageHeader';
import SectionCard from '../components/common/SectionCard';
import mockMachine from '../data/mockMachine';

function SettingsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        meta="Paramétrage fictif"
        title="Paramètres machine"
        subtitle="Configuration visuelle sans enregistrement ni backend."
      />

      <SectionCard title="Identité machine" subtitle="Informations générales affichées dans l'outil.">
        <div className="settings-grid">
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
            Plages de travail
            <input type="text" defaultValue={mockMachine.workRanges.join(' / ')} />
          </label>
        </div>
      </SectionCard>

      <SectionCard title="Options de supervision" subtitle="Comportement d'affichage et statut simulés.">
        <div className="settings-grid">
          <label>
            Couleur / statut
            <input type="text" defaultValue={mockMachine.colorCode} />
          </label>
          <label>
            Mode d'affichage atelier
            <select defaultValue="production">
              <option value="production">Production</option>
              <option value="maintenance">Maintenance</option>
              <option value="quality">Qualité</option>
            </select>
          </label>
          <label>
            Niveau d'alerte visuelle
            <select defaultValue="alert-1">
              <option value="alert-1">Standard</option>
              <option value="alert-2">Renforcé</option>
            </select>
          </label>
          <label>
            Affichage des arrêts
            <select defaultValue="enabled">
              <option value="enabled">Activé</option>
              <option value="disabled">Désactivé</option>
            </select>
          </label>
        </div>
        <button type="button" className="button muted">Simuler la sauvegarde</button>
      </SectionCard>
    </div>
  );
}

export default SettingsPage;
