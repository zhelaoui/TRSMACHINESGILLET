import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/accueil', label: 'Accueil' },
  { to: '/tableau-de-bord', label: 'Tableau de bord' },
  { to: '/planning', label: 'Planning' },
  { to: '/machine', label: 'Machine' },
  { to: '/evenements', label: 'Événements' },
  { to: '/parametres', label: 'Paramètres' }
];

function SidebarNav() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <p className="brand-overline">Société Gillet</p>
        <h1>TRS Machines</h1>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default SidebarNav;
