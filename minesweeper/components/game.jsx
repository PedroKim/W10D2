import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';
import Modal from './modal'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 5)
    };

    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateGame(tile, flagging) { 
    // (tile object, flagging boolean)
    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  resetGame() {
    this.setState({ board: new Minesweeper.Board(9, 5) });
  }

  render() {
    const board = this.state.board;
    let gameOverMsg = '', gameOverClass = '';

    if (board.lost() || board.won()){
      gameOverClass = "open";
      if (board.lost()) gameOverMsg = "You lost!";
      if (board.won()) gameOverMsg = "You won!!!";
    } else {
      // gameOverClass = ""
    }

    return (
      <>
        <h1>Minesweeper</h1>
        <p>Click to explore a tile.</p>
        <p>Alt(Option) + click to flag a tile.</p>
        <div className="board">
          <Board board={this.state.board} updateGame={this.updateGame} />
          <Modal 
            gameOverClass={gameOverClass} 
            gameOverMsg={gameOverMsg}
            resetGame={this.resetGame}
          />
        </div>
      </>
    )
  }
}