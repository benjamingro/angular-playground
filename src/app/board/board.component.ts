import { Component, OnInit } from '@angular/core';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';

// import { BoardServiceService, SquareState } from '../board-service.service';

class SquareState {
  letter: string = '';
  horizontalWinner: boolean = false;
  verticalWinner: boolean = false;
  diagonalRightWinner: boolean = false;
  diagonalLeftWinner: boolean = false;
}

type boardSizeSelectItem = {
  boardSize: number;
  boardSizeText: string;
};

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  faTimes = faTimes;

  public boardSize: number = 3;
  public boardState: SquareState[][];
  public gameState: SquareState[][][];
  public turn: string = 'x';
  public winner: boolean = false; 
  public boardSizeSelect: boardSizeSelectItem[] = [
    { boardSize: 3, boardSizeText: '3x3 board' },
    { boardSize: 4, boardSizeText: '4x4 board' },
    { boardSize: 5, boardSizeText: '5x5 board' },
  ];

  public boardSizeSelected: boardSizeSelectItem = {
    boardSize: 3,
    boardSizeText: '3x3 board',
  };

  private reinitializeBoard(): void {
    this.boardState = [];
    this.gameState = [];
    for (let i = 0; i < this.boardSizeSelected.boardSize; i++) {
      this.boardState[i] = [];
      for (let j = 0; j < this.boardSizeSelected.boardSize; j++) {
        this.boardState[i][j] = new SquareState();
      }
    }

    this.gameState.push(JSON.parse(JSON.stringify(this.boardState))); 

  }

  constructor() {
    this.gameState=[];
    this.boardState = [];
    for (let i = 0; i < this.boardSizeSelected.boardSize; i++) {
      this.boardState[i] = [];
      for (let j = 0; j < this.boardSizeSelected.boardSize; j++) {
        this.boardState[i][j] = new SquareState();
      }
    }
    this.gameState.push(JSON.parse(JSON.stringify(this.boardState))); 
  }

  // this function is required for setting the default select option
  public compareFn(
    option1: boardSizeSelectItem,
    option2: boardSizeSelectItem
  ): boolean {
    if (option2 && option1.boardSize == option2.boardSize) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {}

  public borderModifier(rowIndex: number, columnIndex: number): string[] {
    let myClass: string[] = ['border', 'border-warning'];
    if (rowIndex == 0) {
      myClass.push('border-top-0');
    } else {
      myClass.push('border-top');
    }

    if (rowIndex == this.boardSizeSelected.boardSize - 1) {
      myClass.push('border-bottom-0');
    } else {
      myClass.push('border-bottom');
    }
    if (columnIndex == 0) {
      myClass.push('border-start-0');
    } else {
      myClass.push('border-start');
    }
    if (columnIndex == this.boardSizeSelected.boardSize - 1) {
      myClass.push('border-end-0');
    } else {
      myClass.push('border-end');
    }

    return myClass;
  }

  public makeMove(rowIndex: number, columnIndex: number) {
    if (this.boardState[rowIndex][columnIndex].letter == '' && !this.winner) {
      this.boardState[rowIndex][columnIndex].letter = this.turn;
      this.gameState.push(JSON.parse(JSON.stringify(this.boardState))); 
      // check for winner
      this.calculateWinner();
      // invert turn
      // if(!this.winner){
      //   this.invertTurn();
      // }
      this.invertTurn();
    }
  }

  private invertTurn():void{
    this.turn == 'x' ? (this.turn = 'o') : (this.turn = 'x');
  }

  public resetBoard():void{
    this.winner=false;
    this.reinitializeBoard(); 
    this.turn='x'; 
    
  }

  public undoMove():void{
    this.winner = false;
    this.invertTurn(); 
    this.gameState.pop();
    this.boardState = JSON.parse(JSON.stringify(this.gameState[this.gameState.length-1])) ;
  }

  private calculateWinner(): void {
    // first check for horizontal winner 
    for (let i = 0; i < this.boardState.length; i++) {
      let winFlag = false;
      for (let j = 0; j < this.boardState[i].length; j++) {
        let firstValue = this.boardState[i][0].letter;

        if (firstValue != '') {
          if (this.boardState[i][j].letter != firstValue) {
            winFlag = false;
            break;
          } else {
            winFlag = true;
          }
        }
      }

      if (winFlag) {
        this.winner=true;
        for (let j = 0; j < this.boardState.length; j++) {
          this.boardState[i][j].horizontalWinner = true;
        }
        break;
      }
    }

    //next check for vertical winner 
    if(!this.winner){
      for (let j = 0; j < this.boardState.length; j++) {
        let winFlag = false;
        for (let i = 0; i < this.boardState.length; i++) {
          let firstValue = this.boardState[0][j].letter;
  
          if (firstValue != '') {
            if (this.boardState[i][j].letter != firstValue) {
              winFlag = false;
              break;
            } else {
              winFlag = true;
            }
          }
        }
  
        if (winFlag) {
          this.winner=true;
          for (let i = 0; i < this.boardState.length; i++) {
            this.boardState[i][j].verticalWinner = true;
          }
          break;
        }
      }
    }

    //next check for diagonal right winner
    let firstSquare : SquareState = this.boardState[0][0];
    let winFlag = false; 
    if(!this.winner && firstSquare.letter!='' ){
      for(let i = 0; i < this.boardState.length;i++){
        if(this.boardState[i][i].letter == firstSquare.letter)
        {
          winFlag = true; 
        } else { 
          winFlag = false;
          break; 
        }
      }
      
      if(winFlag){
        this.winner=true; 
        for(let i=0; i<this.boardState.length; i++){
          this.boardState[i][i].diagonalRightWinner = true;
        }
      }

    }

    // next check for diagonal left winner
    firstSquare = this.boardState[this.boardState.length-1][0];
    winFlag = false; 
    if(!this.winner && firstSquare.letter!='' ){
      for(let i = 0; i < this.boardState.length;i++){
        if(this.boardState[i][this.boardState.length-1-i].letter == firstSquare.letter)
        {
          winFlag = true; 
        } else { 
          winFlag = false;
          break; 
        }
      }
      
      if(winFlag){
        this.winner=true; 
        for(let i=0; i<this.boardState.length; i++){
          this.boardState[i][this.boardState.length-1-i].diagonalLeftWinner = true;
        }
      }

    }
    // end function 

  }

  
}
