import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-report-detail',
  templateUrl: './seller-report-detail.component.html',
  styleUrls: ['./seller-report-detail.component.css']
})
export class SellerReportDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
  }

}
