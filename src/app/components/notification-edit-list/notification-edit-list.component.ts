import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-edit-list',
  templateUrl: './notification-edit-list.component.html',
  styleUrls: ['./notification-edit-list.component.css']
})
export class NotificationEditListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('notification');
  }

}
