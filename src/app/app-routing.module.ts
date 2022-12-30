import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './component/bookmarks/bookmarks.component';
import { NotesComponent } from './component/notes/notes.component';
import { TodosComponent } from './component/todos/todos.component';
import { AddNoteComponent } from './component/notes/add-note/add-note.component';
import { EditNoteComponent } from './component/notes/edit-note/edit-note.component';

const routes: Routes = [
  {path: "bookmarks", component: BookmarksComponent, data: {tab: 1}},
  {path: "todos", component: TodosComponent, data: {tab: 2}},
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
