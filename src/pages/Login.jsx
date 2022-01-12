import React, { useState } from 'react';
import { useHistory } from 'react-router';

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
    localStorage.setItem('favoriteRecipes', JSON.stringify([{ id: 52977 }]));
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ cocktails: {}, meals: {} }));

    history.push('/comidas');
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="email-input">
          <input
            id="email-input"
            data-testid="email-input"
            type="email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          <input
            id="password-input"
            data-testid="password-input"
            type="password"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
          />
        </label>
        <button
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
