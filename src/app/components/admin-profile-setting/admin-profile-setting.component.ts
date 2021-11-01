import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile-setting',
  templateUrl: './admin-profile-setting.component.html',
  styleUrls: ['./admin-profile-setting.component.css']
})
export class AdminProfileSettingComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('admin');
  }

}
