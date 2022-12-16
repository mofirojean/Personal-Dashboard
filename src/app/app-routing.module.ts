import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './component/bookmarks/bookmarks.component';
import { NotesComponent } from './component/notes/notes.component';
import { TodosComponent } from './component/todos/todos.component';

const routes: Routes = [
  {path: "bookmarks", component: BookmarksComponent},
  {path: "todos", component: TodosComponent},
  {path: "notes", component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
