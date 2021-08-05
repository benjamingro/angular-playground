import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss']
})
export class MyNavbarComponent implements OnInit {

  public current_route : string = '/playground'; 
  constructor(private location : Location) { 
    location.onUrlChange((url: string, state: unknown):void=>{
      this.current_route = url; 
      console.log(`this.current_route = ${this.current_route}`); 
    }); 
  }

  ngOnInit(): void {
  }

}
