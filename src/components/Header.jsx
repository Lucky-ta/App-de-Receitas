import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, isRender }) {
  const [search, setSearch] = useState(false);

  const history = useHistory();
  function profileRedirect() {
    history.push('/perfil');
  }

  return (
    <div>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
          onClick={ profileRedirect }
        />
        { isRender && (
          <input
            data-testid="search-top-btn"
            type="image"
            src={ searchIcon }
            alt="searchIcon"
            onClick={ () => setSearch(!search) }
          />
        )}
        { search && (
          <div>
            <p />
            <input data-testid="search-input" type="text" />
          </div>
        )}
        <h1 data-testid="page-title">{ title }</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  isRender: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
