import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes!: Note[] 

  constructor(private noteServeice: NoteService) {
    
  }

  ngOnInit(): void {
    this.notes = this.noteServeice.getNotes()
  }

}
