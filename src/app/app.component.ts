import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  public num1:number = 1;
  public num2: number = 0;
  public num3: number;

  Add() {
    this.num3 = Number.parseInt(this.num1.toString()) + Number.parseInt(this.num2.toString());
  }
  Sub() {
    (this.num3 = this.num1 - this.num2)
  }
  Multiply() {
    (this.num3 = this.num1 * this.num2)
  }
  Divide() {
    (this.num3 = this.num1 / this.num2)
  }

}

