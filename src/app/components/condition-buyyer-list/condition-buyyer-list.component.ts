import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition-buyyer-list',
  templateUrl: './condition-buyyer-list.component.html',
  styleUrls: ['./condition-buyyer-list.component.css']
})
export class ConditionBuyyerListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('conditionBuyyer');
  }

}
