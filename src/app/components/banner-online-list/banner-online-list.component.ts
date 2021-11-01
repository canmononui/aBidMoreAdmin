import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-online-list',
  templateUrl: './banner-online-list.component.html',
  styleUrls: ['./banner-online-list.component.css']
})
export class BannerOnlineListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('banner');
  }

}
