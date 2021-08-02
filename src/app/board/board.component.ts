import { Component, OnInit } from '@angular/core';
import { BoardServiceService, SquareState } from '../board-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public boardSize: number;
  public boardState: SquareState[][];

  constructor(private boardServiceService: BoardServiceService) {
    this.boardSize = boardServiceService.boardSize;
    this.boardState = boardServiceService.boardState;
  }

  ngOnInit(): void {}

  public borderModifier(rowIndex: number, columnIndex: number): string[] {
    let myClass: string[] = [];
    if (rowIndex === 0) {
      myClass.push('border-top-0');
    } else {
      myClass.push('border-top');
    }

    if (rowIndex === this.boardSize-1) {
      myClass.push('border-bottom-0');
    } else { 
      myClass.push('border-bottom');
    }
    if(columnIndex === 0){
      myClass.push('border-start-0'); 
    } else { 
      myClass.push('border-start'); 
    }
    if(columnIndex === this.boardSize-1){
      myClass.push('border-end-0'); 
    } else { 
      myClass.push('border-end'); 
    }

    return myClass;
  }
}
