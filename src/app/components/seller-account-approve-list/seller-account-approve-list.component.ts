import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-account-approve-list',
  templateUrl: './seller-account-approve-list.component.html',
  styleUrls: ['./seller-account-approve-list.component.css']
})
export class SellerAccountApproveListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
  }

}
