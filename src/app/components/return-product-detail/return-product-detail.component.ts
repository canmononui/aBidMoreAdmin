import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-product-detail',
  templateUrl: './return-product-detail.component.html',
  styleUrls: ['./return-product-detail.component.css']
})
export class ReturnProductDetailComponent implements OnInit {

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
