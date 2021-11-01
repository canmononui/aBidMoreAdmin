import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-product-sendback-wrong-detail',
  templateUrl: './return-product-sendback-wrong-detail.component.html',
  styleUrls: ['./return-product-sendback-wrong-detail.component.css']
})
export class ReturnProductSendbackWrongDetailComponent implements OnInit {

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
