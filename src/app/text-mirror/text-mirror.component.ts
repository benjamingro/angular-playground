import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-mirror',
  templateUrl: './text-mirror.component.html',
  styleUrls: ['./text-mirror.component.scss']
})
export class TextMirrorComponent implements OnInit {

  public hello = "hello";
  public world = "world"; 

  constructor() { }

  ngOnInit(): void {
  }

}
