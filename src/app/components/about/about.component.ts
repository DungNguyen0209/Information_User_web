import { Component } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  count = 0;

  constructor(private countService: CountService) {

  }

  getCount() {
    return this.countService.getCount();
  }

  increase() {
    this.countService.increase();
  }
}
