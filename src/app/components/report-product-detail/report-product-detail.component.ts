import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-product-detail',
  templateUrl: './report-product-detail.component.html',
  styleUrls: ['./report-product-detail.component.css']
})
export class ReportProductDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.path.setPath('reportProduct');
  }

}
