import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account-admin-detail',
  templateUrl: './admin-account-admin-detail.component.html',
  styleUrls: ['./admin-account-admin-detail.component.css']
})
export class AdminAccountAdminDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('admin');
  }

}
