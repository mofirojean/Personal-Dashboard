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

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
