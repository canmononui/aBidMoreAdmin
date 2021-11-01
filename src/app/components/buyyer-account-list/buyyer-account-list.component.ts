import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyyer-account-list',
  templateUrl: './buyyer-account-list.component.html',
  styleUrls: ['./buyyer-account-list.component.css']
})
export class BuyyerAccountListComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('buyyer');
  }

}
