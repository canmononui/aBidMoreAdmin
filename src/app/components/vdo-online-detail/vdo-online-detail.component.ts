import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vdo-online-detail',
  templateUrl: './vdo-online-detail.component.html',
  styleUrls: ['./vdo-online-detail.component.css']
})
export class VdoOnlineDetailComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('vdo');
  }

}
