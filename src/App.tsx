import * as React from 'react';
import './App.css';

// Enum to define which player is currently clicking on what tile
const enum Player { 
  None = 0,
  One = 1,
  Two = 2
}

// Interface to contract state properties.
interface IState{ 
  board: Player[],
  playerTurn: Player
}

// Properties Interface to contract props items.
interface IProps{

}


class App extends React.Component<IProps, IState>{

// Define state and initialize the game board as an array of Player enums in a 3x3 grid [9 squares]
// create an property to store the turn of the player that is calculated based on onclick event handler
 public state = {
  board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
  playerTurn: Player.One
}

// function that is called during onClick event to create an event handler to edit the state of the application.
// destructures the state object into seperate variables
// returns the entire board array into a new constant board variable 
// assigns the new player enum value to the array index passed by the handler
// updates state of the new board array values and the players turn
CreateOnclickHandler = (index: number) => (event: any) =>{
  const {board, playerTurn} = this.state;
  const updatedBoard = board.slice();
  updatedBoard[index] = playerTurn;
  this.setState({ board: updatedBoard, playerTurn: 3 - playerTurn}) 
}

// Renders a cell to represent each index of the 'board' array. receives & passes the current mapped index value to allow the onclick handler 
// to alter the 'board' arrays value at the passed index value. (creates all 9(0-8) onclick event listeners and passes in the value of that cell tldr.)
 _renderCell = (index: number) => {
   const {board} = this.state
  return <div className="cell" onClick={this.CreateOnclickHandler(index)} data-player={board[index]}  />
}
 
// destructures the board property from the state object and iterates through the array, calling renderCell on each index, which returns the div cell with an eventlistener 
// to edit the array value based on the passed in index integer, supplied by the mapping function key parameter.
 _renderBoard = () => {
  const {board} = this.state;
  return <div className="BoardContainer">{board.map((value, key) => this._renderCell(key))}</div>
}

  public render() {
    return (
      <div className="App">
          <div className="BoardContainer">
            {this._renderBoard()}
          </div>
      </div>
    );
  }
}

export default App;
