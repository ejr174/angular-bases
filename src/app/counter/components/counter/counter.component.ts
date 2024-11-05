import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public valueCounter : number = 0

  actionsCounter(value: number): void{
    this.valueCounter += value;
  }

  resetCounter(){
    this.valueCounter = 0;
  }

}
