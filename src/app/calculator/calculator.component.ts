import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  showtodo:boolean=false;

  add() {
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.result = this.num1 * this.num2;
  }

  divide() {
    if (this.num2 !== 0) {
      this.result = this.num1 / this.num2;
    } else {
      alert("Cannot divide by zero");
    }
  }
   goTotodo(){
    this.showtodo=!this.showtodo;
    
  }
}
