import React from 'react';

function Login() {
  return (
    <div className="register-content">
      <form>
        <label htmlFor="name">
          Nome
          <input
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            name="name"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            placeholder="seu-email@site.com.brr"
            data-testid="common_register__input-email"
            name="email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            placeholder="******"
            data-testid="common_register__input-password"
            name="password"
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
    </div>

  );
}

export default Login;
