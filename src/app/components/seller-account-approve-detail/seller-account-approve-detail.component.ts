import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-account-approve-detail',
  templateUrl: './seller-account-approve-detail.component.html',
  styleUrls: ['./seller-account-approve-detail.component.css']
})
export class SellerAccountApproveDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
  }

}
