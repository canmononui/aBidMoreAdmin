import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyyer-account-detail',
  templateUrl: './buyyer-account-detail.component.html',
  styleUrls: ['./buyyer-account-detail.component.css']
})
export class BuyyerAccountDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('buyyer');
  }

}
