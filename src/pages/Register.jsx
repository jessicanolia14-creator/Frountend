// src/pages/Register.jsx

import "./../styles/register.css";

import { Link } from "react-router-dom";

import {
  Handshake,
  ClipboardList,
  Eye,
  User,
  Mail,
  LockKeyhole,
} from "lucide-react";

function Register() {
  return (
    <div className="register-page">

      {/* LEFT SIDE */}
      <div className="register-left">

        <div className="left-overlay">

          <img
            src="/logo.png"
            alt="VolunteerHub"
            className="main-logo"
          />

          <h1>VolunteerHub</h1>

          <p>
            Empowering communities through
            purposeful collaboration. Choose your
            role and start making a difference today.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="register-right">

        <div className="register-card">

          {/* HEADER */}
          <div className="register-header">

            <span className="mini-badge">
              Join With Us
            </span>

            <h2>Create Account</h2>

            <p>
              Select your role and provide your details
            </p>

          </div>

          {/* ROLE */}
          <div className="role-section">

            <label>Choose Your Role</label>

            <div className="role-container">

              <button
                type="button"
                className="role-card active"
              >
                <Handshake size={22} />
                <span>Volunteer</span>
              </button>

              <button
                type="button"
                className="role-card"
              >
                <ClipboardList size={22} />
                <span>Organizer</span>
              </button>

            </div>

          </div>

          {/* FORM */}
          <form className="register-form">

            {/* FULL NAME */}
            <div className="input-group">

              <label>Full Name</label>

              <div className="input-box">

                <User size={18} />

                <input
                  type="text"
                  placeholder="Tiara Anggun"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div className="input-group">

              <label>Email Address</label>

              <div className="input-box">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="tiara@example.com"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="input-group">

              <label>Password</label>

              <div className="input-box">

                <LockKeyhole size={18} />

                <input
                  type="password"
                  placeholder="••••••••"
                />

                <Eye
                  size={18}
                  className="eye-icon"
                />

              </div>

            </div>

            {/* BUTTON */}
            <Link
              to="/login"
              className="register-btn"
            >
              Create Account
            </Link>

          </form>

          {/* LOGIN */}
          <p className="bottom-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;