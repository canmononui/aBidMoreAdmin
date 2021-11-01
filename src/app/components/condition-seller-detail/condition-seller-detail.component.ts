import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition-seller-detail',
  templateUrl: './condition-seller-detail.component.html',
  styleUrls: ['./condition-seller-detail.component.css']
})
export class ConditionSellerDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('conditionSeller');
  }

}
