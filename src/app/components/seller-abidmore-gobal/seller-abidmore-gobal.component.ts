import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-abidmore-gobal',
  templateUrl: './seller-abidmore-gobal.component.html',
  styleUrls: ['./seller-abidmore-gobal.component.css']
})
export class SellerAbidmoreGobalComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
  }

}
