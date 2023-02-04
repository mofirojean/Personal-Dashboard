import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticationService {

  private notication$: Subject<string> = new Subject()

  constructor() { }

  get notifications() {
    return this.notication$.asObservable()
  }

  // It will show the text to all subscribers of this notification
  show(text: string) {
    this.notication$.next(text)
  }

}
