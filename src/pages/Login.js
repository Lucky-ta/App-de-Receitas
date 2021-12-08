import React from 'react';

function Login() {
  return (
    <form>
      <fieldset>
        <input data-testid="email-input" type="email" />
        <input data-testid="password-input" type="password" />
        <button data-testid="login-submit-btn" type="button">Entrar</button>
      </fieldset>
    </form>
  );
}

export default Login;
