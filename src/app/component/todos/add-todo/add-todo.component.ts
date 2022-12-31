import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/service/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  showValidationErrors!: boolean

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true
    const todo = new Todo(form.value.text)
    this.todoService.addTodo(todo)
    this.router.navigateByUrl("/todos")
  }

}
