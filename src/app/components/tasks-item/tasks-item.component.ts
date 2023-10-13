import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task:Task;
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();

  constructor(){}

  ngOnInit(){}

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
