import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="panel">
      <h2>Page introuvable</h2>
      <p>La route demandée n'existe pas dans cette maquette.</p>
      <Link className="button" to="/accueil">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFoundPage;
