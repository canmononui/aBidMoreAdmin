import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-online-detail',
  templateUrl: './banner-online-detail.component.html',
  styleUrls: ['./banner-online-detail.component.css']
})
export class BannerOnlineDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('banner');
  }

}
