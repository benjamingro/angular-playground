import { Injectable } from '@angular/core';

export class SquareState {
  letter: string = '';
  horizontalWinner: boolean = true;
  verticalWinner: boolean = true;
  diagonalRightWinner: boolean = true;
  diagonalLeftWinner: boolean = true;
}

// type BoardState = SquareState [][] ;

@Injectable({
  providedIn: 'root',
})
export class BoardServiceService {
  public boardSize: number = 3;

  // private boardState?: SquareState[][];
  public boardState: SquareState[][];

  public turn: string = 'x';

  constructor() {
    this.boardState = [];
    for (let i = 0; i < this.boardSize; i++) {
      this.boardState[i]=[]
      for (let j = 0; j < this.boardSize; j++) {
        this.boardState[i][j] = new SquareState(); 
      } 
    }
  }

  public makeMove(rowIndex: number, columnIndex: number): void {
    this.boardState[rowIndex][columnIndex].letter = this.turn;
    this.determineWinner(); 
  }

  private determineWinner() : void { 
    
  }
}
