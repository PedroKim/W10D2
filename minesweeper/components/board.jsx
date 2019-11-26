import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    // this.props.board, this.props.updateGame

  }

  render() {
    const grid = this.props.board.grid.map((row, rowIdx) => {
      const tiles = row.map((tile, tileIdx) => {
        return <Tile key={tileIdx} tile={tile} updateGame={this.props.updateGame}/>
      });
      return (
      <div className="row" key={rowIdx}>{tiles}</div>
      )
    }); 

    return (
      <div>
        {grid}
      </div>
    )
  }
}