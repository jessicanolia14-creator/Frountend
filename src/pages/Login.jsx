// src/pages/Login.jsx

import "./../styles/login.css";

import { Link } from "react-router-dom";

import {
  Mail,
  LockKeyhole,
  Eye,
} from "lucide-react";

function Login() {
  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

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
      <div className="login-right">

        <div className="login-card">

          {/* HEADER */}
          <div className="top-text">

            <h2>Welcome Back 👋</h2>

            <p className="welcome-desc">
              Sign in to continue your journey,
              connect with communities, and create
              meaningful impact together.
            </p>

          </div>

          {/* FORM */}
          <form className="login-form">

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
              to="/dashboard"
              className="login-btn"
            >
              Login
            </Link>

          </form>

          {/* REGISTER */}
          <p className="bottom-text">

            Don’t have an account?

            <Link to="/">
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;