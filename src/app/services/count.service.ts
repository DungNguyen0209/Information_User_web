import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private count = 0;

  constructor() { }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}
