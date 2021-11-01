import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-percentage-cancel-order',
  templateUrl: './percentage-cancel-order.component.html',
  styleUrls: ['./percentage-cancel-order.component.css']
})
export class PercentageCancelOrderComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('percentage');
  }

}
