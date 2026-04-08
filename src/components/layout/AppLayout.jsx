import SidebarNav from './SidebarNav';

function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <SidebarNav />
      <main className="app-content">{children}</main>
    </div>
  );
}

export default AppLayout;
