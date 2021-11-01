import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-bank-approve-detail',
  templateUrl: './seller-bank-approve-detail.component.html',
  styleUrls: ['./seller-bank-approve-detail.component.css']
})
export class SellerBankApproveDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
  }

}
