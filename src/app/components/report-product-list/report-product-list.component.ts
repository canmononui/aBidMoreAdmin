import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-product-list',
  templateUrl: './report-product-list.component.html',
  styleUrls: ['./report-product-list.component.css']
})
export class ReportProductListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.path.setPath('reportProduct');
  }

}
