import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/service/note.service';
import { NoticationService } from 'src/app/service/notication.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  showValidationErrors?: boolean
  
  constructor(
    private noteService: NoteService, 
    private router: Router,
    private notificationService: NoticationService
    ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {

    if (form.invalid) return this.showValidationErrors = true

    const note = new Note(form.value.title, form.value.content)
    this.noteService.addNote(note)
    this.router.navigateByUrl("/notes")
    this.notificationService.show("Created Note!")
  }
}
