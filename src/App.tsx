import * as React from 'react';
import './App.css';

const enum Player { 
  None = 0,
  One = 1,
  Two = 2
}

// interface IState {
//   board: Player[];
// }

class App extends React.Component{

public state = {
  board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
 
}


public renderCell = (index: number) => {
  return <div className="cell" />
}

public renderBoard = () => {
  const {board} = this.state;
  return <div className="BoardContainer">{board.map((value, key) => this.renderCell(key))}</div>
}


  public render() {
    return (
      <div className="App">
          <div className="BoardContainer">
            {this.renderBoard()}
          </div>
      </div>
    );
  }
}

export default App;
