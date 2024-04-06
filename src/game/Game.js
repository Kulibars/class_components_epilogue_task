import { Component } from "react";
import { GameLayout } from "./components/GameLayout";
import { connect } from "react-redux";
import { resetartGame } from "./redux/actions/gameActions";

class GameContainer extends Component {
  render() {
    const { restart } = this.props;
    return (
      <>
        <GameLayout />
        <button className="gameResetart" onClick={() => restart()}>
          Начать заново
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  restart: () => dispatch(resetartGame()),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);

export default Game;
