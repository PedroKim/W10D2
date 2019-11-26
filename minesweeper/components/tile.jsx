import React from 'react';

const Tile = ({ tile, updateGame }) => {
  let stateClass = 'tile', tileVal = '';
  
  if (tile.explored && tile.bombed) {
    stateClass += ' bombed';
    tileVal = "☢";
  } else if (tile.explored){
    stateClass += ' revealed';
    tileVal = tile.adjacentBombCount() === 0 ? '' : `${tile.adjacentBombCount()}`;
  } else if (tile.flagged) {
    stateClass += ' flagged';
    tileVal = "⚑";
  } else {
    // not revealed.
  }


  function handleClick(event) {
    const flagging = event.altKey;
    updateGame(tile, flagging);
  }

  return (
    <div className={stateClass} onClick={handleClick}>{tileVal}</div>
  );
};

export default Tile;