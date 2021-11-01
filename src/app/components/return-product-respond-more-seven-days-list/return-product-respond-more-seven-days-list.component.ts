import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-product-respond-more-seven-days-list',
  templateUrl: './return-product-respond-more-seven-days-list.component.html',
  styleUrls: ['./return-product-respond-more-seven-days-list.component.css']
})
export class ReturnProductRespondMoreSevenDaysListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('returnProduct');
  }

}
