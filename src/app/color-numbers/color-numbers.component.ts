import { Component, OnInit } from '@angular/core';

type ColorNumber = {
  number: number;
  color: string;
}

@Component({
  selector: 'app-color-numbers',
  templateUrl: './color-numbers.component.html',
  styleUrls: ['./color-numbers.component.scss']
})
export class ColorNumbersComponent implements OnInit {

  // public numberArray [] : number[] = []; 
  // numberArray : [];
  private colorArray = ["red", "orange", "yellow", "blue", "green", "purple"];

  public colorNumberArray : ColorNumber[] = [];
  public numberArray : number[] = [];
  constructor() { }

  ngOnInit(): void {
    let i=0;
    for(i=0;i<11;i++){
      let myColor = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
      let myColorNumber : ColorNumber = {number:i,color:myColor};
      this.colorNumberArray.push(myColorNumber);
    }
  }

}
