import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-money-setting',
  templateUrl: './admin-money-setting.component.html',
  styleUrls: ['./admin-money-setting.component.css']
})
export class AdminMoneySettingComponent implements OnInit {
  
  public moneyRate = true
  public moneyRateSetting = false
  
  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('admin');
  }

  submitEdit(){
    this.moneyRate = false
    this.moneyRateSetting = true
  }

  save(){
    this.moneyRate = true
    this.moneyRateSetting = false
  }

}
