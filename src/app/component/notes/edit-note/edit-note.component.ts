import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from 'src/app/service/note.model';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note?: Note

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) { }

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
    }
    
  }
}
