import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-approve-account-access',
  templateUrl: './admin-approve-account-access.component.html',
  styleUrls: ['./admin-approve-account-access.component.css']
})
export class AdminApproveAccountAccessComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('admin');
  }

}
