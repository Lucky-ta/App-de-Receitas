import PropTypes from 'prop-types';
import React from 'react';

function ImageAndTitle({ img, title }) {
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ img }
        alt="mealImage"
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
