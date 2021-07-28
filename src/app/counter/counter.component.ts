import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  counter = 0; 
  timerId = 0; 

  constructor() { }

  ngOnInit(): void {
    this.tick(); 
  }

  ngOnDestroy(): void{
    window.clearInterval(this.timerId);

  }

  tick() : void {
    this.timerId = window.setInterval(()=>{
      this.counter++; 
    },1000); 
  }

}
