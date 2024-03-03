import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola</h1>
  <h3>Counter: {{counter}}</h3>
  <button (click)="sumaValor(1)"> +1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="restaValor(1)"> -1</button>`
})

export class CounterComponent{
  constructor() { }
  public counter: number = 0;

  sumaValor(value: number):void{
    this.counter += value;
  }

  restaValor(value: number):void{
    this.counter -= value;
  }

  reset():void{
    this.counter = 10;
  }
}
