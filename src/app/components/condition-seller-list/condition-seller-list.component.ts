import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition-seller-list',
  templateUrl: './condition-seller-list.component.html',
  styleUrls: ['./condition-seller-list.component.css']
})
export class ConditionSellerListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('conditionSeller');
  }

}
