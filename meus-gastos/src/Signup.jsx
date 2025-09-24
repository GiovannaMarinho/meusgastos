import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityOn from "./assets/visibility-on.svg";
import VisibilityOff from "./assets/visibility-off.svg";
import Logo from "./assets/logo.svg";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres.");
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError("A senha deve conter uma letra maiúscula.");
    } else if (!/[0-9]/.test(value)) {
      setPasswordError("A senha deve conter um número.");
    } else if (!/[!@#$%^&*]/.test(value)) {
      setPasswordError("A senha deve conter um caractere especial (!@#$...).");
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("As senhas não coincidem.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <main className="signup-bg bg">
      <form className="login">
        <div className="title-login">
          <img className="logo" src={Logo} alt="Logo" />
          <h1 className="signup-title">Cadastro</h1>
        </div>

        <div className="content">
          <div className="content-area">
            <label>Nome</label>
            <div className="input-container">
              <input
                type="text"
                placeholder="Maria José..."
                required
              />
            </div>
          </div>

          <div className="content-area">
            <label>Email</label>
            <div className="input-container">
              <input
                type="email"
                placeholder="nome@gmail.com"
                required
              />
            </div>
          </div>

          <div className="content-area">
            <label>Crie uma senha</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Palavra1234@"
                required
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
            {passwordError && <p className="error-text">{passwordError}</p>}
          </div>

          <div className="content-area">
            <label>Confirme a senha</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Repita a senha"
                required
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
            {confirmPasswordError && (
              <p className="error-text">{confirmPasswordError}</p>
            )}
          </div>
        </div>

        <div className="login-button">
          <button type="submit">Cadastrar</button>
        </div>

        <span className="textFinal">
          Já tem uma conta? <Link className="link" to="/">Login</Link>
        </span>
      </form>
    </main>
  );
}

export default Signup;
