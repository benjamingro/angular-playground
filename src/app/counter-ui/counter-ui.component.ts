import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  templateUrl: './counter-ui.component.html',
  styleUrls: ['./counter-ui.component.scss']
})
export class CounterUiComponent implements OnInit, OnDestroy {

  counter = 0; 
  timerId = 0;
  public timerInterval=1000; 
  public increment = 1;  

  constructor() { }

  ngOnInit(): void {
    this.tick(); 
  }

  ngOnDestroy(): void{
    window.clearInterval(this.timerId);

  }

  tick() : void {
    this.timerId = window.setInterval(()=>{
      this.counter = this.counter + this.increment; 
    },this.timerInterval); 
  }

  resetTimer() : void { 
    window.clearInterval(this.timerId);
    this.tick(); 
  }

  resetCounter() : void{
    this.counter=0;
  }

}

