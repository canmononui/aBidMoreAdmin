import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-account-admin',
  templateUrl: './admin-create-account-admin.component.html',
  styleUrls: ['./admin-create-account-admin.component.css']
})
export class AdminCreateAccountAdminComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('admin');
  }

}
