import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

function HomePage() {
  return (
    <div>
      <PageHeader
        title="TRS Machines Gillet"
        subtitle="Maquette front-end V1 pour visualiser le suivi TRS simplifié d'une machine."
      />
      <section className="panel home-actions">
        <h3>Navigation rapide</h3>
        <div className="button-row">
          <Link className="button" to="/tableau-de-bord">Voir le tableau de bord</Link>
          <Link className="button" to="/planning">Consulter le planning</Link>
          <Link className="button" to="/machine">Ouvrir la fiche machine</Link>
          <Link className="button" to="/evenements">Explorer les événements</Link>
          <Link className="button" to="/parametres">Afficher les paramètres</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
