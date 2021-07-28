import { Component, OnInit } from '@angular/core';

type ColorNumber = {
  number: number;
  color: string;
}

@Component({
  selector: 'app-color-numbers-ui',
  templateUrl: './color-numbers-ui.component.html',
  styleUrls: ['./color-numbers-ui.component.scss']
})
export class ColorNumbersUiComponent implements OnInit {

  private colorArray = ["red", "orange", "yellow", "blue", "green", "purple"];

  public colorNumberArray : ColorNumber[] = [];
  public numberArray : number[] = [];
  constructor() { }

  ngOnInit(): void {
    let i=0;
    for(i=0;i<6;i++){
      let myColor = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
      let myColorNumber : ColorNumber = {number:i,color:myColor};
      this.colorNumberArray.push(myColorNumber);
    }
  }

  pushColorNumber() : void {
    let myColor = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
    let myNumber = this.colorNumberArray.length; 
    let myColorNumber : ColorNumber = {number:myNumber,color:myColor};
    this.colorNumberArray.push(myColorNumber);
  }

  popColorNumber() : void { 
    this.colorNumberArray.pop(); 
  }

  refreshColors() : void {
    for(let i = 0; i < this.colorNumberArray.length; i++)
    {
      let myColor = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
      this.colorNumberArray[i].color = myColor; 
    }
  }

}
