import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NoticationData } from 'src/app/model/notification-data.model';
import { NoticationService } from 'src/app/service/notication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)'
        }),
        animate('250ms 105ms ease-out')
      ]),
      transition(':leave', [
        animate('225ms', style({
          opacity: 0,
          transform: 'scale(0.85)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification?: NoticationData[] | null;
  timeout: any;

  constructor(private notifiactionService: NoticationService) { }

  ngOnInit(): void {
    this.notifiactionService.notifications.subscribe((notification: NoticationData) => {
      this.notification = Array(notification);

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.notification = null
      }, notification.duration)
    })
  }

}
