import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-product-respond-more-seven-days-detail',
  templateUrl: './return-product-respond-more-seven-days-detail.component.html',
  styleUrls: ['./return-product-respond-more-seven-days-detail.component.css']
})
export class ReturnProductRespondMoreSevenDaysDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('returnProduct');
  }

  copyProductKey(){

  }

  copyTrackNumber(){

  }

}
