import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vdo-online-list',
  templateUrl: './vdo-online-list.component.html',
  styleUrls: ['./vdo-online-list.component.css']
})
export class VdoOnlineListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('vdo');
  }

}
