import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-product-admin-list',
  templateUrl: './report-product-admin-list.component.html',
  styleUrls: ['./report-product-admin-list.component.css']
})
export class ReportProductAdminListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.path.setPath('reportProduct');
  }

}
