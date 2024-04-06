import { Component } from "react";

export class FieldLavout extends Component {
  render() {
    const { field, playerTurn } = this.props;

    return field.map((el, index) => (
      <button
        className="gameButtons"
        key={index}
        id={index}
        onClick={() => {
          playerTurn(el, index);
        }}
      >
        {el}
      </button>
    ));
  }
}

// {styles.buttons}
