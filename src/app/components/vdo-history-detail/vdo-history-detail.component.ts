import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vdo-history-detail',
  templateUrl: './vdo-history-detail.component.html',
  styleUrls: ['./vdo-history-detail.component.css']
})
export class VdoHistoryDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('vdo');
  }

}
