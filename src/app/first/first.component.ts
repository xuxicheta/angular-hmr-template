import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public counter: string;
  constructor() { }

  ngOnInit() {
    this.counter = this.initCounter();
  }

  private initCounter(): string {
    return (Math.random() * 100).toFixed(0);
  }



}
