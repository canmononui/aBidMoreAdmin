import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-percentage-deposit-seller-support-buy-product',
  templateUrl: './percentage-deposit-seller-support-buy-product.component.html',
  styleUrls: ['./percentage-deposit-seller-support-buy-product.component.css']
})
export class PercentageDepositSellerSupportBuyProductComponent implements OnInit {

  public placeholderPaymentType = 'กรุณาเลือก'

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('percentage');
  }

}
