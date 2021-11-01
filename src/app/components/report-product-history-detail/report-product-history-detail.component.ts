import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-product-history-detail',
  templateUrl: './report-product-history-detail.component.html',
  styleUrls: ['./report-product-history-detail.component.css']
})
export class ReportProductHistoryDetailComponent implements OnInit {
  
  constructor(
    public path: LinkPathService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.path.setPath('reportProduct');
  }

}
