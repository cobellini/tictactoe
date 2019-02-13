import * as React from 'react';
import './App.css';

const enum Player { 
  None = 0,
  One = 1,
  Two = 2
}

interface IState{ 
  board: Player[]
}

interface IProps{

}


class App extends React.Component<IProps, IState>{

 public state = {
  board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
 
}

 _renderCell = (index: number) => {
  return <div className="cell" />
}
 
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
