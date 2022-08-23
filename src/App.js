import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cartas: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.confirmButton(value));
  }

  confirmButton = (test) => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const total = attr1 + attr2 + attr3;

    if (test === '') {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }

    if (test !== '') {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
    if (parseInt(cardAttr1, 10) < 0 || parseInt(cardAttr1, 10) > parseInt('90', 10)) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    if (parseInt(cardAttr2, 10) < 0 || parseInt(cardAttr2, 10) > parseInt('90', 10)) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    if (parseInt(cardAttr3, 10) < 0 || parseInt(cardAttr3, 10) > parseInt('90', 10)) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    if (total > parseInt('210', 10)) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo,
    } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((preventState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cartas: [...preventState.cartas, obj],
    }));
  }

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
      isSaveButtonDisabled,
      hasTrunfo,
      cartas,
    } = this.state;
    return (
      <div>
        <Form
          cardImage={ cardImage }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardImage={ cardImage }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          cartas.map((card, index) => (
            <div key={ index }>
              {card.cardImage}
              {card.cardName}
              {card.cardDescription}
              { card.cardAttr1 }
              { card.cardAttr2 }
              { card.cardAttr3 }
              { card.cardRare }
            </div>
          ))
        }
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
