import React from 'react';
import propTypes from 'prop-types';

const confirmTrunfo = (test) => {
  if (test) {
    return (
      <p data-testid="trunfo-card">Super Trunfo</p>
    );
  }
};

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <form>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="name-card">
          {' '}
          {cardName}
          {' '}
        </p>
        <p data-testid="description-card">
          {' '}
          {cardDescription}
          {' '}
        </p>
        <p data-testid="attr1-card">
          {' '}
          {cardAttr1}
          {' '}
        </p>
        <p data-testid="attr2-card">
          {' '}
          {cardAttr2}
          {' '}
        </p>
        <p data-testid="attr3-card">
          {' '}
          {cardAttr3}
          {' '}
        </p>
        <p data-testid="rare-card">
          {' '}
          {cardRare}
          {' '}
        </p>
        {confirmTrunfo(cardTrunfo)}
      </form>
    );
  }
}

Card.propTypes = {
  cardImage: propTypes.string.isRequired,
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
