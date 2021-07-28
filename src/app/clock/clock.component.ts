import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  time: Date = new Date();
  timerId: number = 0; 

  constructor() { }

  ngOnInit(): void {
    this.time = new Date() ;
    this.tick(); 
  }

  ngOnDestroy(): void{
    window.clearInterval(this.timerId);
  }

  tick(): void {
    this.timerId = window.setInterval(()=>{
      this.time = new Date(); 
    },1000)
  }

}
