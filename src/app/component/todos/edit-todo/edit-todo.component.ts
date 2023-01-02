import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo?: Todo

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id') // this will grap it from the router link [todos/:id]
      if (typeof todoId == "string") {
        this.todo = this.todoService.getTodo(todoId)
      }
    })
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return
    if (typeof this.todo?.id == 'string') {
      this.todoService.updateTodo(this.todo?.id, form.value)
    }
    this.router.navigateByUrl('/todos')
  }
}
