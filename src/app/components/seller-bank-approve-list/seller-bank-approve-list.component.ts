import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-bank-approve-list',
  templateUrl: './seller-bank-approve-list.component.html',
  styleUrls: ['./seller-bank-approve-list.component.css']
})
export class SellerBankApproveListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
  }

}
