import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vdo-history-list',
  templateUrl: './vdo-history-list.component.html',
  styleUrls: ['./vdo-history-list.component.css']
})
export class VdoHistoryListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('vdo');
  }
  
}
