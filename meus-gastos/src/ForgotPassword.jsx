import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.svg";
import "./App.css";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <main className="bg bg-password">
      <form className="login">
        <div className="title">
          <img className="logo" src={Logo} alt="Logo" />
          <h1 className="forgotPassword-title">Recuperar Senha</h1>
        </div>

        <div className="content">
          <div className="content-area">
            <label>Digite seu email</label>
            <div className="input-container">
              <input type="email" placeholder="nome@gmail.com" />
            </div>
          </div>
        </div>

        <div className="login-button">
          <button type="submit">Enviar link de recuperação</button>
        </div>

        <span className="textFinal">
          Voltar para o{" "}
          <Link className="link" to="/">
            Login
          </Link>
        </span>
      </form>
    </main>
  );
}

export default ForgotPassword;