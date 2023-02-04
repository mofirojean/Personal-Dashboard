import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { BookmarksComponent } from './component/bookmarks/bookmarks.component';
import { TodosComponent } from './component/todos/todos.component';
import { NotesComponent } from './component/notes/notes.component';
import { BookmarkTileComponent } from './component/bookmarks/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './component/notes/add-note/add-note.component';
import { NoteCardComponent } from './component/notes/note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './component/notes/edit-note/edit-note.component';
import { TodoItemComponent } from './component/todos/todo-item/todo-item.component';
import { AddTodoComponent } from './component/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './component/todos/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './component/bookmarks/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './component/bookmarks/manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './component/bookmarks/manage-bookmarks/edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './component/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
