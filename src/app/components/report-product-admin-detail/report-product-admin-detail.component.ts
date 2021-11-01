import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-report-product-admin-detail',
  templateUrl: './report-product-admin-detail.component.html',
  styleUrls: ['./report-product-admin-detail.component.css']
})
export class ReportProductAdminDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.path.setPath('reportProduct');
  }

}
