import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './component/bookmarks/bookmarks.component';
import { NotesComponent } from './component/notes/notes.component';
import { TodosComponent } from './component/todos/todos.component';
import { AddNoteComponent } from './component/notes/add-note/add-note.component';
import { EditNoteComponent } from './component/notes/edit-note/edit-note.component';
import { AddTodoComponent } from './component/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './component/todos/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './component/bookmarks/add-bookmark/add-bookmark.component';

const routes: Routes = [
  {path: "bookmarks", component: BookmarksComponent, data: {tab: 1}},
  {path: "bookmarks/add", component: AddBookmarkComponent},
  {path: "todos", component: TodosComponent, data: {tab: 2}},
  {path: "todos/add", component: AddTodoComponent},
  {path: "todos/:id", component: EditTodoComponent},
  {path: "notes", component: NotesComponent, data: {tab: 3}},
  {path: "notes/add", component: AddNoteComponent},
  {path: "notes/:id", component: EditNoteComponent},
  {path: '', redirectTo: '/bookmarks', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
