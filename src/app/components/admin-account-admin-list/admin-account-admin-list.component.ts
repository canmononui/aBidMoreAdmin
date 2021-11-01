import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account-admin-list',
  templateUrl: './admin-account-admin-list.component.html',
  styleUrls: ['./admin-account-admin-list.component.css']
})
export class AdminAccountAdminListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('admin');
  }

}
