import PropTypes from 'prop-types';
import React from 'react';

function Buttons({ shareIcon, WHIcon }) {
  return (
    <div>
      <button
        type="button"
      >
        <img
          src={ shareIcon }
          alt="shareIcon"
          data-testid="share-btn"
        />
      </button>
      <button
        type="button"
      >
        <img
          src={ WHIcon }
          alt="favoriteButton"
          data-testid="favorite-btn"
        />
      </button>

    </div>
  );
}

Buttons.propTypes = {
  WHIcon: PropTypes.string.isRequired,
  shareIcon: PropTypes.string.isRequired,
};

export default Buttons;
