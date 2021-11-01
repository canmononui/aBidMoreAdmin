import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-history-list',
  templateUrl: './notification-history-list.component.html',
  styleUrls: ['./notification-history-list.component.css']
})
export class NotificationHistoryListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('notification');
  }

}
