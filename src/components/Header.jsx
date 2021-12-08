import React from 'react';
import profileIcon from '../images/profileIcon.svg';

function Header() {
  return (
    <header>
      <h1 data-testid="page-title"> Header! </h1>
      <input
        data-testid="search-top-btn"
        type="text"
      />
      <button
        type="button"
      >
        <img
          src={ profileIcon }
          alt="profile"
          data-testid="profile-top-btn"
        />
      </button>
    </header>
  );
}

export default Header;
