import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  CheckSquare,
  Settings,
  LogOut,
} from "lucide-react";
import Logo from "./Logo.jsx";
import "./AdminLayout.css";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/kegiatan", label: "Kegiatan", icon: CalendarDays },
  { to: "/users", label: "Pengguna", icon: Users },
  { to: "/approval", label: "Approval", icon: CheckSquare },
  { to: "/pengaturan", label: "Pengaturan", icon: Settings },
];

const AdminLayout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }

    navigate("/login");
  };

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="header-logo">
          <Logo size={52} />
          <span className="header-logo-text">VolunteerHub</span>
        </div>

        <div className="header-title-area">
          <h1 className="header-page-title">Dashboard Admin</h1>
          <p className="header-subtitle">Selamat datang, Admin!</p>
        </div>
      </header>

      <div className="admin-body">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `sidebar-item${isActive ? " active" : ""}`
                }
              >
                <Icon size={20} className="sidebar-icon" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <button type="button" className="sidebar-logout" onClick={handleLogout}>
            <LogOut size={20} className="sidebar-icon" />
            <span>Keluar</span>
          </button>
        </aside>

        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;