import { InformationLayout } from "./InformationLayout.js";
import { Component } from "react";
import { connect } from "react-redux";

class InformationContainer extends Component {
  status = () => {
    const { currentPlayer, isGameEnded, isDraw } = this.props;

    if (!isDraw && !isGameEnded) {
      return `Ходит: ${currentPlayer}`;
    } else if (isGameEnded) {
      return `Победил: ${currentPlayer}`;
    } else if (isDraw) {
      return "Ничья";
    }
  };

  render() {
    return <InformationLayout status={this.status} />;
  }
}

const mapGameState = (state) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
});

export const Information = connect(mapGameState)(InformationContainer);

// export const Information = () => {
//   const isDraw = useSelector((state) => state.isDraw);
//   const isGameEnded = useSelector((state) => state.isGameEnded);
//   const currentPlayer = useSelector((state) => state.currentPlayer);

//   let status;

//   if (!isDraw && !isGameEnded) {
//     status = `Ходит: ${currentPlayer}`;
//   }
//   if (isGameEnded) {
//     status = `Победил: ${currentPlayer}`;
//   } else if (isDraw) {
//     status = "Ничья";
//   }

//   return <InformationLayout status={status} />;
// };
