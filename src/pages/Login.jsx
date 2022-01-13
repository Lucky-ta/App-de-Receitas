import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../css/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function validateInputs() {
    const re = /\S+@\S+\.\S+/;
    const validEmail = re.test(email);
    const SIX = 6;

    if (validEmail && password.length > SIX) {
      return false;
    }
    return true;
  }

  function onClickButton() {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ cocktails: {}, meals: {} }));
    history.push('/comidas');
  }

  return (
    <form>
      <h1>App de Receitas</h1>
      <fieldset className="login-field">
        <label className="form__label" htmlFor="email-input">
          <input
            id="email-input"
            data-testid="email-input"
            type="email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
            placeholder="Informe o seu e-mail"
          />
        </label>
        <label className="form__label" htmlFor="password-input">
          <input
            id="password-input"
            data-testid="password-input"
            type="password"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
            placeholder="Digite sua senha"
          />
        </label>
        <button
          className="login-btn"
          data-testid="login-submit-btn"
          type="button"
          disabled={ validateInputs() }
          onClick={ onClickButton }
        >
          Entrar
        </button>
      </fieldset>
    </form>
  );
}

export default Login;
