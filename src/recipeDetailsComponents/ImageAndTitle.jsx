import PropTypes from 'prop-types';
import React from 'react';

function ImageAndTitle({ img, title }) {
  return (
    <div>
      <img
        src={ img }
        alt="mealImage"
        data-testid="recipe-photo"
        style={ { height: '5em' } }
      />
      <h1 data-testid="recipe-title">{title}</h1>
    </div>
  );
}

ImageAndTitle.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageAndTitle;
