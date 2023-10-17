import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { CountService } from 'src/app/services/count.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
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
