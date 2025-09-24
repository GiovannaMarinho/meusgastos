import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityOn from "./assets/visibility-on.svg";
import VisibilityOff from "./assets/visibility-off.svg";
import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Digite um email válido.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("A senha deve ter no mínimo 8 caracteres.");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passwordError && email && password) {
      console.log("Login efetuado:", { email, password });
    }
  };

  return (
    <main className="bg login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title-login">
          <img className="logo" src={Logo} alt="Logo" />
          <h1 className="login-title">Login</h1>
        </div>

        <div className="content">
          <div className="content-area">
            <label>Email</label>
            <div className="input-container">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="nome@gmail.com"
              />
            </div>
            {emailError && <span className="error-text">{emailError}</span>}
          </div>

          <div className="content-area">
            <label>Senha</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Palavra1234@"
              />
              <button
                type="button"
                className="btnVisibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? VisibilityOn : VisibilityOff}
                  alt={showPassword ? "Esconder senha" : "Mostrar senha"}
                />
              </button>
            </div>
            {passwordError && (
              <span className="error-text">{passwordError}</span>
            )}
          </div>

          <Link className="link forgot-link" to="/forgot-password">
            Esqueceu a senha?
          </Link>
        </div>

        <div className="btn">
          <button type="submit" className="btn-submit">
            Login
          </button>

          <span className="textFinal">
            Não tem uma conta?{" "}
            <Link to="/signup" className="link">
              Cadastre-se
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default App;
