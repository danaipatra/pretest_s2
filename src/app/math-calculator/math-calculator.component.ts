import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-calculator',
  templateUrl: './math-calculator.component.html',
  styleUrls: ['./math-calculator.component.css'],
})
export class MathCalculatorComponent implements OnInit {
  answer: string[] = [];
  
  constructor() {}

  ngOnInit(): void {}

  onChange(val: HTMLInputElement, choose: HTMLSelectElement) {
    if (+val.value < 0) {
      val.value = '1';
    }
    if (val.value) {
      val.value = Math.round(+val.value).toString();
      const isFiboSet = val.value == '0' ? true : this.isFibonacci(+val.value);
      const isBooleanSet = choose.value === 'true' ? true : false;
      isBooleanSet
        ? this.answer.unshift(`${val.value} is ${isFiboSet}`)
        : this.answer.unshift(`${val.value} is ${this.isPrime(+val.value)}`);
    }
  }

  isPrime(val: number): boolean {
    for (let i = 2; i <= Math.sqrt(val); i++) {
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  }

  isFibonacci(val: number, count = 1, last = 0): boolean {
    if (count < val) {
      return this.isFibonacci(val, count + last, count);
    }
    if (count === val) {
      return true;
    }

    return false;
  }
}
