import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-product-sendback-wrong-list',
  templateUrl: './return-product-sendback-wrong-list.component.html',
  styleUrls: ['./return-product-sendback-wrong-list.component.css']
})
export class ReturnProductSendbackWrongListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('returnProduct');
  }

}