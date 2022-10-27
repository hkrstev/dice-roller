import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-die',
  templateUrl: './roll-die.component.html',
  styleUrls: ['./roll-die.component.css']
})
export class RollDieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result = 0;

  roll = () => {
    this.result = Math.floor(Math.random() * Number(this.sideCount)) + 1;
  };

  @Input('side-count')
  sideCount = "";


}
