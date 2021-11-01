import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition-buyyer-detail',
  templateUrl: './condition-buyyer-detail.component.html',
  styleUrls: ['./condition-buyyer-detail.component.css']
})
export class ConditionBuyyerDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('conditionBuyyer');
  }

}
