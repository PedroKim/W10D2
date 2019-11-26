import React from 'react';

const Modal = ({ gameOverMsg, gameOverClass, resetGame }) => {

  gameOverClass += ' modal';
  
  // click handler for button
  function handleClick(event) {
    resetGame();
  }

  return (
    <div className={gameOverClass.trim()}>
      <div className='modal-screen'></div>
      <div className='modal-pane'>
        <p>{gameOverMsg}</p>
        <button onClick={handleClick}>Play Again</button>
      </div>
    </div>
  )
}

export default Modal;