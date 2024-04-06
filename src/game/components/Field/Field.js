import { FieldLavout } from "./FieldLavout.js";
import { Component } from "react";
import { connect } from "react-redux";
import { WIN_PATTERNS } from "../../constants/constants.js";
import { checkDraw } from "../../utils/utils.js";
import {
  setCurrentPlayer,
  setNewField,
  setIsDraw,
  setIsGameEnded,
  setWinner,
} from "../../redux/actions/gameActions.js";

class FieldContainer extends Component {
  getWinner = (copyField, isGameEnded, onWinner) => {
    if (!isGameEnded) {
      for (let i = 0; i < WIN_PATTERNS.length; i++) {
        let el = WIN_PATTERNS[i];
        let fildEl = [];
        for (let j = 0; j < el.length; j++) {
          fildEl.push(copyField[el[j]]);
        }
        if (fildEl.join("") === "XXX") {
          onWinner({ isGameEnded: true, winner: "X" });
        }
        if (fildEl.join("") === "OOO") {
          onWinner({ isGameEnded: true, winner: "O" });
        }
      }
    }
  };

  playerTurn = (el, index) => {
    const {
      field,
      currentPlayer,
      isGameEnded,
      newTurn,
      changeCheckDraw,
      onWinner,
    } = this.props;

    if (!isGameEnded) {
      const copyField = [...field];
      const indexValue = index;

      if (el === "") {
        copyField.splice(indexValue, 1, currentPlayer);

        if (currentPlayer === "X") {
          newTurn(copyField, "O");
        } else {
          newTurn(copyField, "X");
        }
        changeCheckDraw(checkDraw(copyField));
        this.getWinner(copyField, isGameEnded, onWinner);
      }
    }
  };

  render() {
    const { field } = this.props;

    const playerTurn = this.playerTurn;

    return <FieldLavout field={field} playerTurn={playerTurn} />;
  }
}

const mapGameState = (state) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
});

const mapDispatchToProps = (dispatch) => ({
  newTurn: (copyField, currentPlayer) => {
    dispatch(setNewField(copyField));
    dispatch(setCurrentPlayer(currentPlayer));
  },
  changeCheckDraw: (checkDraw) => {
    dispatch(setIsDraw(checkDraw));
  },
  onWinner: ({ isGameEnded, winner }) => {
    dispatch(setIsGameEnded(isGameEnded));
    dispatch(setWinner(winner));
  },
});

export const Field = connect(mapGameState, mapDispatchToProps)(FieldContainer);
