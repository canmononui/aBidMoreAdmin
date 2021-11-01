import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-calendar',
  templateUrl: './banner-calendar.component.html',
  styleUrls: ['./banner-calendar.component.css']
})
export class BannerCalendarComponent implements OnInit {

  public placeholderBannerType = 'กรุณาเลือกรูปแบบ'
  public placeholderPage = 'กรุณาเลือกหน้า'
  public placeholderPosition = 'กรุณาเลือกตำแหน่ง'

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('banner');
  }

  selectBannerType(type) {
    this.placeholderBannerType = type
  }

  selectPage(type) {
    this.placeholderPage = type
  }

  selectPosition(type) {
    this.placeholderPosition = type
  }

}
