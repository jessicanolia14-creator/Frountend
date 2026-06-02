import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Logo from "../components/Logo.jsx";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@volunteerhub.com" && password === "admin123") {
      onLogin();
    } else {
      setError("Email atau password salah. Coba: admin@volunteerhub.com / admin123");
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="login-logo-wrap">
          <Logo size={52} />
          <span className="login-logo-text">VolunteerHub</span>
        </div>
      </header>

      <main className="login-main">
        <h2 className="login-title">LOGIN</h2>

        <div className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-row">
              <div className="form-label-group">
                <Mail size={22} className="form-icon" />
                <label className="form-label">Email</label>
              </div>

              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-label-group">
                <Lock size={22} className="form-icon" />
                <label className="form-label">Password</label>
              </div>

              <div className="input-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="toggle-pw"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-submit-btn">
              LOGIN
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;