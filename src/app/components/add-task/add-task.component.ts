import { Component,   OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subcription!: Subscription;
  constructor(private uiService: UiService) {
    this.subcription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddTask = value);
  }
  ngOnInit(): void {}
  onSubmit()
  {
    if(!this.text){
      alert('please add a task !');
      return;
    }
    const newTask ={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    console.log("1111")
    //@todo - emit event
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
