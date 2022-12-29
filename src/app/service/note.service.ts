import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note("Test title", "Test content"),
    new Note("Test 2", "Test content 2")
  ]

  constructor() { }

  getNotes() {
    return this.notes
  }

  getNote(id: string){
    return this.getNotes().find(n => n.id === id) // returns the note object
  }

  addNote(note: Note) {
    this.notes.push(note)
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id)
    // test if the note is object before updating the fields
    if (typeof note === 'object') {
      Object.assign(note, updatedFields)
    }
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex(n => n.id === id)
    if (noteIndex === -1) return 
    this.notes.splice(noteIndex, 1)
  }
}
