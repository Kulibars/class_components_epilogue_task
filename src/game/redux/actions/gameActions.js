export const setCurrentPlayer = (currentPlayer) => ({
  type: "SET_CURRENT_PLAYER",
  payload: currentPlayer,
});

export const setNewField = (currentField) => ({
  type: "SET_NEW_FIELD",
  payload: currentField,
});

export const setIsGameEnded = (check) => ({
  type: "SET_IS_GAME_ENDED",
  payload: check,
});

export const setWinner = (winner) => ({
  type: "SET_WINNER",
  payload: winner,
});

export const setIsDraw = (IsDraw) => ({
  type: "IS_DRAW",
  payload: IsDraw,
});

export const resetartGame = () => ({
  type: "REBOOT",
});
