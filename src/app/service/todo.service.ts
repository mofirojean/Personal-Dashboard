import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo("This is a test"),
    new Todo("This is a test")
  ]

  constructor() {
   }

  getTodos() {
    return this.todos
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id) // gets the unique todo
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo = this.getTodo(id)
    if (typeof todo == 'object') {
      Object.assign(todo, updatedTodoFields)
    }
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    if (index == -1) return
    this.todos.splice(index, 1)
  }
}
