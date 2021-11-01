import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-history-detail',
  templateUrl: './notification-history-detail.component.html',
  styleUrls: ['./notification-history-detail.component.css']
})
export class NotificationHistoryDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('notification');
  }

}
