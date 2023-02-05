import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NoticationData } from '../model/notification-data.model';

@Injectable({
  providedIn: 'root'
})
export class NoticationService {

  private notication$: Subject<NoticationData> = new Subject()

  constructor() { }

  get notifications() {
    return this.notication$.asObservable()
  }

  // It will show the text to all subscribers of this notification
  show(text: string, duration = 4000) {
    this.notication$.next({text, duration})
  }

}
