import React from "react";

import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";

import "../styles/sidebarorganizer.css";
import logo from "../assets/logo.png";

const SidebarOrganizer = () => {
  return (
    <div className="sidebar-organizer">

      <div>

        {/* LOGO */}
        <div className="sidebar-logo">
            <img src={logo} alt="logo" />

          <h1>VolunteerHub</h1>

          <p>BERBAGI KEBAIKAN</p>

        </div>

        {/* MENU */}
        <div className="sidebar-menu">

          <NavLink to="/organizer/dashboard">

            <LayoutDashboard size={22} />

            Dashboard

          </NavLink>

          <NavLink to="/organizer/kegiatan">

            <Calendar size={22} />

            Kegiatan Saya

          </NavLink>

          <NavLink to="/organizer/pendaftaran">

            <Users size={22} />

            Pendaftaran

          </NavLink>

          <NavLink to="/organizer/tambah-kegiatan">

            <Plus size={22} />

            Tambah Kegiatan

          </NavLink>

          <NavLink to="/organizer/pengaturan">

            <Settings size={22} />

            Pengaturan

          </NavLink>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="sidebar-bottom">

        <a href="/" className="sidebar-menu-item logout-item"
        >

            <LogOut size={22} />

            <span>Logout</span>

        </a>

        <div className="profile-box">

          <div className="avatar">
            YP
          </div>

          <div>

            <h4>Yayasan Peduli Alam</h4>

            <p>alam@org.com</p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SidebarOrganizer;