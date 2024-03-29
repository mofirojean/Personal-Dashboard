import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/service/note.service';
import { NoticationService } from 'src/app/service/notication.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note?: Note

  constructor(
    private route: ActivatedRoute, 
    private noteService: NoteService, private router: Router,
    private notificationService: NoticationService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')

      if (typeof idParam == 'string') {
        this.note = this.noteService.getNote(idParam)
      }

    })
  }

  onFormSave(form: NgForm) {
    if (typeof this.note?.id == 'string') {
      this.noteService.updateNote(this.note?.id, form.value)
      this.router.navigateByUrl('/notes')
      this.notificationService.show("Note Updated!")
    }
    
  }

  deleteNote() {
    if (typeof this.note?.id == 'string') {
      this.noteService.deleteNote(this.note.id)
      this.router.navigateByUrl('/notes')
      this.notificationService.show("Note Deleted!")
    }
  }
}
