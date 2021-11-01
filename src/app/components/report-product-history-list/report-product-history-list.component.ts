import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-product-history-list',
  templateUrl: './report-product-history-list.component.html',
  styleUrls: ['./report-product-history-list.component.css']
})
export class ReportProductHistoryListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.path.setPath('reportProduct');
  }

}
