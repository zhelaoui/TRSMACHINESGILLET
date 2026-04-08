import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import PlanningPage from '../pages/PlanningPage';
import MachinePage from '../pages/MachinePage';
import EventsPage from '../pages/EventsPage';
import SettingsPage from '../pages/SettingsPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/accueil" element={<HomePage />} />
      <Route path="/tableau-de-bord" element={<DashboardPage />} />
      <Route path="/planning" element={<PlanningPage />} />
      <Route path="/machine" element={<MachinePage />} />
      <Route path="/evenements" element={<EventsPage />} />
      <Route path="/parametres" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
