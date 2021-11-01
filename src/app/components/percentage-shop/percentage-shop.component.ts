import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-percentage-shop',
  templateUrl: './percentage-shop.component.html',
  styleUrls: ['./percentage-shop.component.css']
})
export class PercentageShopComponent implements OnInit {

  public placeholderPaymentType = 'กรุณาเลือก'

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('percentage');
  }

  selectPaymentType(type) {
    this.placeholderPaymentType = type
  }

}
