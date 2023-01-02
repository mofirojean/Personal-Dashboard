import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo

  // This emits the onEditClick and onDeleteClick method to the todos compponent and 
  // we use event binding to work with the method
  @Output() editClick: EventEmitter<void> = new EventEmitter()
  @Output() deleteClick: EventEmitter<void> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  
  onEditClick() {
    this.editClick.emit()
  }

  onDeleteClick() {
    this.deleteClick.emit()
  }
}
