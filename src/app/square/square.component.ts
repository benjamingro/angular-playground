import { Component, OnInit, Input } from '@angular/core';
import {BoardServiceService} from '../board-service.service'; 

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() rowIndex? : number; 
  @Input() columnIndex? : number;


  constructor(private boardServiceService : BoardServiceService) { }

  ngOnInit(): void {
  }

}
