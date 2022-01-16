import PropTypes from 'prop-types';
import React from 'react';
import '../css/details.css';

function ImageAndTitle({ img, title }) {
  return (
    <div className="img-title-container">
      <div className="detailts-image-container">
        <img
          className="details-image"
          data-testid="recipe-photo"
          src={ img }
          alt="mealImage"
          // style={ { height: '5em' } }
        />
      </div>
      <div className="details-title-container">
        <h1 className="details-title" data-testid="recipe-title">{title}</h1>
      </div>
    </div>
  );
}

ImageAndTitle.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageAndTitle;
