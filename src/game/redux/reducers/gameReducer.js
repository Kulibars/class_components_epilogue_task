const initialGameState = {
  field: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  isDraw: false,
  isGameEnded: false,
};

export const gameReducer = (state = initialGameState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_PLAYER": {
      return {
        ...state,
        currentPlayer: payload,
      };
    }

    case "SET_NEW_FIELD": {
      return {
        ...state,
        field: payload,
      };
    }

    case "SET_IS_GAME_ENDED": {
      return {
        ...state,
        isGameEnded: payload,
      };
    }

    case "SET_WINNER": {
      return {
        ...state,
        currentPlayer: payload,
      };
    }

    case "IS_DRAW": {
      return {
        ...state,
        isDraw: payload,
      };
    }

    case "REBOOT": {
      return initialGameState;
    }

    default:
      return state;
  }
};
